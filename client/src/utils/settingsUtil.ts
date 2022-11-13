import React from 'react';
// import 
import * as serverErrors from './errors';

export async function fetchUserSavedRecord() {
    /**
     * Fetches the saved array data of user
     */
    return await fetch("http://localhost:5000/upload", {
        method: "GET",
        credentials: "include"
    })
    .then((res) => res.json())
    .then((res) => {
        const resStatus: string = res.Response.status;
        let resError: string = res.Response?.error?.name;
        // Check if server responded
        resError = (typeof resError === "string") ? resError : "ServerIsDownError";
        let savedData;
        let resMessage;
        switch (resStatus) {
          case "SUCCESS":
            savedData = res.Response.savedData as Promise<string[]>;
            resMessage = "Fetched user saved data";
            console.log(`SUCCESS: ${resMessage}`);
            break;
          case "FAILED":
            resMessage = serverErrors.clientErrorMap[resError];
            console.warn(`FAILED: ${resMessage}`);
            break;
        }
        return savedData;
    })
}

export async function fetchSavedPiczzles(fetchedSavedDataPromise: Promise<string[]>, updateSavedPiczzles: React.Dispatch<React.SetStateAction<string[]>>) {
    /**
     * Tell the server to prepare the actual images and updates the user saved url array state
     */
    fetchedSavedDataPromise.then(async (res) => {
        // Access previous async fetch result
        const savedDataArr = res as string[];
        // Save to session the value of user saved data
        sessionStorage.setItem("uGICount", `${savedDataArr.length}`);
        // Iterate over result array and create a promise using fetch for each item
        const fetchPiczzlePromiseArr = savedDataArr.map(async (imageSource) => {
          return await fetch(
            `http://localhost:5000/upload/saved/${imageSource}`,
            {
              method: "GET",
              credentials: "include",
            }
          ).then((res) => res);
        });
        // Return all fetch result
        return Promise.allSettled(fetchPiczzlePromiseArr);
      })
      .then((allSettledResult) => {
        const userSavedUrlArr = allSettledResult.map((result) => {
            if (result.status === "fulfilled") return result.value.url;
            else throw new Error("Failed to fetch some user saved resource");
        })
        updateSavedPiczzles(userSavedUrlArr);
      });
}
