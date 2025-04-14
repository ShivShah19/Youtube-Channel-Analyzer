import { useContext } from "react";
import axios from "axios";
import { DataContext } from "../Contexts/DataContext";

const API_KEY = import.meta.env.VITE_YT_API;

export const useFetchChannelData = () => {
    const { channelName, setChannelInfo } = useContext(DataContext);

    const fetchChannelData = async () => {
        try {
            const searchRes = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                params: {
                    part: "snippet",
                    type: "channel",
                    q: channelName,
                    key: API_KEY,
                },
            });

            const channelId = searchRes.data.items[0]?.id?.channelId;
            if (!channelId) {
                console.error("Channel not found.");
                return;
            }

            const channelRes = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
                params: {
                    part: "snippet",
                    id: channelId,
                    key: API_KEY,
                },
            });

            const info = channelRes.data.items[0].snippet;
            console.log(info);

            setChannelInfo({
                title: info.title,
                dp: info.thumbnails.high.url,
            });
        } catch (err) {
            console.error("Failed to fetch channel data:", err);
        }
    };

    return fetchChannelData;
};
