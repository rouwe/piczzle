import React, { createContext } from 'react';

type SettingsContextType = {
    updatePiczzleSource: React.Dispatch<React.SetStateAction<string>> | null,
    updateGridInfo: React.Dispatch<React.SetStateAction<{
        gridColumns: number;
        gridRows: number;
        gaps: number;
    }>> | null,
    gallery: {
        galleryItemCount: number,
        updateGalleryItemCount: React.Dispatch<React.SetStateAction<number>> | null,
    }
}

const SettingsContextProps = {
    updatePiczzleSource: null,
    updateGridInfo: null,
    gallery: {
        galleryItemCount: 0,
        updateGalleryItemCount: null
    }

} as SettingsContextType;

export const SettingsContext = createContext(SettingsContextProps);