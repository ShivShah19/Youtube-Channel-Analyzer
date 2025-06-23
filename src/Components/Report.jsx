import React, { useContext } from 'react'
import { DataContext } from '../Contexts/DataContext';
import { Chart } from './Chart';
import video from '../assets/video.png';
import view from '../assets/view.png';
import like from '../assets/like.png';
import comment from '../assets/comment.png';



export const Report = () => {
    const { yearlyStats } = useContext(DataContext);
    console.log(yearlyStats);


    const videoData = [];
    const viewsData = [];
    const likeData = [];
    const commentData = [];

    if (yearlyStats) {
        for (const [year, data] of Object.entries(yearlyStats)) {
            videoData.push({ year, value: data.videoCount });
            viewsData.push({ year, value: data.totalViews });
            likeData.push({ year, value: data.totalLikes });
            commentData.push({ year, value: data.totalComments });
        }
    }

    return (
        <>
            <div className='flex my-5 justify-around flex-wrap gap-8'>
                <Chart data={videoData} type="Video" icon={video} />
                <Chart data={viewsData} type="view" icon={view} />
                <Chart data={likeData} type="Like" icon={like} />
                <Chart data={commentData} type="Comment" icon={comment} />
            </div>
        </>
    )
}
