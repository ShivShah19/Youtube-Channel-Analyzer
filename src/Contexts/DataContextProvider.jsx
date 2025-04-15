import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataContextProvider = ({ children }) => {
    const [channelInfo, setChannelInfo] = useState(null);
    const [yearlyStats, setYearlyStats] = useState();
    console.log(channelInfo);
    console.log(yearlyStats);


    return (
        <DataContext.Provider value={{ channelInfo, setChannelInfo, yearlyStats, setYearlyStats }}>
            {children}
        </DataContext.Provider>
    );
};