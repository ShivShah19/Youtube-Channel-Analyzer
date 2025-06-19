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

    return (
        <>
            <div className='flex my-16 justify-around flex-wrap gap-8 sm:gap-4'>
                <Chart data={videoData} type="Video" />
                <Chart data={likeData} type="Like" />
                <Chart data={commentData} type="Comment" />
            </div>
        </>
    )
}
