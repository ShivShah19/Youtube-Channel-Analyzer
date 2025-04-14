import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataContextProvider = ({ children }) => {
    const [channelInfo, setChannelInfo] = useState(null);
    console.log(channelInfo);

    return (
        <DataContext.Provider value={{ channelInfo, setChannelInfo }}>
            {children}
        </DataContext.Provider>
    );
};