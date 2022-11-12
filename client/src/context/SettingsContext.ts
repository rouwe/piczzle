import React, { createContext } from 'react';

type SettingsContextType = {
    updatePiczzleSource: null | React.Dispatch<React.SetStateAction<string>>,
    updateGridInfo: null | React.Dispatch<React.SetStateAction<{
        gridColumns: number;
        gridRows: number;
        gaps: number;
    }>>
}

const SettingsContextProps = {
    updatePiczzleSource: null,
    updateGridInfo: null
} as SettingsContextType;

export const SettingsContext = createContext(SettingsContextProps);