import { useContext } from "react";
import axios from "axios";
import { DataContext } from "../Contexts/DataContext";

const API_KEY = import.meta.env.VITE_YT_API;

export const useFetchChannelData = () => {
    const { setChannelInfo } = useContext(DataContext);

    const fetchChannelData = async (name) => {
        try {
            const searchRes = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: "snippet",
                    type: "channel",
                    q: name,
                    key: API_KEY,
                },
            });

            const channelId = searchRes.data.items[0]?.id?.channelId;
            console.log(channelId);

            if (!channelId) {
                console.error("Channel not found.");
                return;
            }

            const channelRes = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
                params: {
                    part: "snippet,statistics,brandingSettings,contentDetails",
                    id: channelId,
                    key: API_KEY,
                },
            });

            console.log(channelRes.data.items[0]);

            const info = channelRes.data.items[0];
            console.log(info);

            setChannelInfo(info);
            return true;
        } catch (err) {
            console.error("Failed to fetch channel data:", err);
            return false;
        }
    };

    return fetchChannelData;
};
