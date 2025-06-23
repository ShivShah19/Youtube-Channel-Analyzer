import React, { useContext, useEffect } from 'react'
import UserProfileDetails from '../Components/UserProfileDetails'
import { DataContext } from '../Contexts/DataContext';
import { getYouTubeYearlyStats } from '../utils/getYoutubeYearlyStats';
import { useNavigate } from 'react-router';
import { Report } from '../Components/Report';

export const Analysis = () => {
    const navigate = useNavigate();
    const { channelInfo, setYearlyStats } = useContext(DataContext);

    useEffect(() => {
        if (!channelInfo) {
            navigate("/");
        }
        const fetchStats = async () => {

            if (channelInfo?.id) {
                const stats = await getYouTubeYearlyStats(channelInfo.id);
                setYearlyStats(stats);
            }
        };

        fetchStats();
    }, [channelInfo, navigate]);

    if (!channelInfo) return null;

    return (
        <div className='w-screen h-auto mx-auto p-6 bg-[#0c0c0c] shadow-lg'>
            <UserProfileDetails />
            <div className="text-center my-10">
                <div className="w-16 h-1 bg-purple-500 mx-auto mb-3 rounded"></div>
                <h2 className="text-3xl font-extrabold text-white mb-2">
                    YouTube Yearly Stats 📊
                </h2>
            </div>

            <Report />
        </div>
    );
}
