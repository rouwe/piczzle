import {GridFSBucket} from 'mongodb';
import {piczzleDb} from './connect';

export const piczzleBucket = new GridFSBucket(piczzleDb, { bucketName: "saved" });