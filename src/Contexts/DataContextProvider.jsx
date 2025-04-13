import React, { useState } from "react";
import { DataContext } from "./DataContext";

export const DataContextProvider = ({ children }) => {
    const [channelName, setChannelName] = useState("");
    const [channelInfo, setChannelInfo] = useState(null);
    console.log(channelName);
    console.log(channelInfo);



    return (
        <DataContext.Provider value={{ channelName, setChannelName, channelInfo, setChannelInfo }}>
            {children}
        </DataContext.Provider>
    );
};