import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext';
import { Chart } from './Chart';

export const Report = () => {
    const { yearlyStats } = useContext(DataContext);

    const videoData = [];
    const likeData = [];
    const commentData = [];

    if (yearlyStats) {
        for (const [year, data] of Object.entries(yearlyStats)) {
            videoData.push({ year, value: data.videoCount });
            likeData.push({ year, value: data.totalLikes });
            commentData.push({ year, value: data.totalComments });
        }
    }
    console.log(videoData);

    return (
        <>
            <Chart data={videoData} />
        </>
    )
}
