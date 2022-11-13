import express from 'express';
import multer from 'multer';
import fs from 'node:fs';
import  path from 'node:path';
import {usersCollection} from '../db/connect';
import { piczzleBucket } from '../db/bucket';
import { UploadFailedError } from '../utils/errors';
import configs from '../configs/configs';
import { UnknownUserError } from '../utils/errors';

const uploadRouter = express.Router();
const upload = multer(configs.multer);

uploadRouter
    .route("/")
    .get( async (req, res) => {
        // Send user saved array data as json
        try {
            // Get user id
            const userId: string = req.cookies.u_Id;
            // Find user saved data
            const userDoc = await usersCollection.findOne({ username: userId });
            if (userDoc) {
                const userSavedArr: string[] = userDoc.saved;
                // Format user save data
                const jsonUserSavedArr = userSavedArr;
                // Send as json string
                res.json({
                    Response: {
                        status: "SUCCESS",
                        savedData: jsonUserSavedArr
                    }
                })
            } else {
                throw new UnknownUserError("User not found");
            }

        } catch(err) {
            res.json({
                Response: {
                    status: "FAILED",
                    error: err
                }
            })
        }
    })
    .post(upload.single("piczzleSource"), (req, res) => {
        // Upload handler
        console.log(req.file);
        try {
            if (req.file) {
                const {
                    originalname,
                    mimetype,
                    destination,
                    filename,
                    size
                } = req.file;
                // Upload file to gridfs bucket
                fs.createReadStream(`${destination}${filename}`)
                    .pipe(piczzleBucket.openUploadStream(`${filename}`, {
                        chunkSizeBytes: size,
                        contentType: mimetype,
                        metadata: {
                            originalName: originalname,
                        }
                    }))
                // Add filename to user document saved array
                const userId = req.cookies.u_Id;
                const extension = mimetype.split('/')[1];
                usersCollection.updateOne({username: userId}, {$push: { saved: `${filename}.${extension}` }})
                res.setHeader("Content-Type", "application/json");
                res.json({
                    Response: {
                        status: "SUCCESS",
                    }
                })
            } else {
                throw new UploadFailedError("Upload file data is undefined");
            }
        } catch(err) {
            res.json({
                Response: {
                    status: "FAILED",
                    error: err
                }
            })
        }
    })

uploadRouter
    .route(`/saved/:savedId`)
    .get(async (req, res) => {
        try {
            const reqPiczzle = req.params.savedId;
            const [reqFilename, fileExtension] = reqPiczzle.split('.');
            console.log(reqPiczzle, fileExtension)
            const tempPath = `upload/saved/${reqPiczzle}`;
            // Download and Create temporary file
            piczzleBucket.openDownloadStreamByName(reqFilename)
                .pipe(fs.createWriteStream(tempPath))
                .on('error', (error) => {
                    console.log(error)
                })
                .on('finish', () => {
                    console.log('Done!')
                    // Ensures that the client can use the resource
                    res.setHeader('Cross-Origin-Resource-Policy', "cross-origin");
                    res.set({
                        'Content-Type': `image/${fileExtension}`,
                        "Cache-Control": "private, max-age=604800"
                    });
                    res.type(fileExtension);
                    res.sendFile(`${tempPath}`, {
                        root: './'
                    });
                })
        } catch(err) {
            res.json({
                Response: {
                    status: "FAILED"
                }
            })
        }
    })

export default uploadRouter;