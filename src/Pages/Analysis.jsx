import React, { useContext, useEffect } from 'react'
import UserProfileDetails from '../Components/UserProfileDetails'
import { DataContext } from '../Contexts/DataContext';
import { getYouTubeYearlyStats } from '../utils/getYoutubeYearlyStats';
import { useNavigate } from 'react-router';

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
        <div className="w-screen h-screen mx-auto p-6 bg-[#121212] shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 border border-[#1f1f1f]">
            <UserProfileDetails />
        </div>
    );
}
