import axios from "axios";

const API_KEY = import.meta.env.VITE_YT_API;

export const getYouTubeYearlyStats = async (channelId) => {

    if (!channelId) {
        console.error("Channel ID is required!");
        return null;
    }

    try {
        const channelRes = await axios.get("https://www.googleapis.com/youtube/v3/channels", {
            params: {
                part: "contentDetails",
                id: channelId,
                key: API_KEY,
            },
        });

        const uploadsPlaylistId = channelRes.data.items[0].contentDetails.relatedPlaylists.uploads;

        let yearStats = {};
        let nextPageToken = "";

        do {
            const playlistRes = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                params: {
                    part: "snippet",
                    playlistId: uploadsPlaylistId,
                    maxResults: 50,
                    pageToken: nextPageToken,
                    key: API_KEY,
                },
            });

            const videoIds = playlistRes.data.items.map(
                (v) => v.snippet.resourceId.videoId
            );

            const statsRes = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
                params: {
                    part: "snippet,statistics",
                    id: videoIds.join(","),
                    key: API_KEY,
                },
            });

            statsRes.data.items.forEach((video) => {
                const year = new Date(video.snippet.publishedAt).getFullYear();
                const likes = parseInt(video.statistics.likeCount || 0);
                const comments = parseInt(video.statistics.commentCount || 0);

                if (!yearStats[year]) {
                    yearStats[year] = {
                        videoCount: 0,
                        totalLikes: 0,
                        totalComments: 0,
                    };
                }

                yearStats[year].videoCount += 1;
                yearStats[year].totalLikes += likes;
                yearStats[year].totalComments += comments;
            });

            nextPageToken = playlistRes.data.nextPageToken;
        } while (nextPageToken);

        return yearStats;
    } catch (err) {
        console.error("Failed to get yearly stats:", err);
        return null;
    }
};
