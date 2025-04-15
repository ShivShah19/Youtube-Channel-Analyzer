import React, { useState } from 'react'
import { useFetchChannelData } from '../Hooks/useFetchChannelData';
import { useNavigate } from 'react-router';

export const Home = () => {
    const fetchChannelData = useFetchChannelData();
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const youtubeRegex = /^https:\/\/(www\.)?youtube\.com\/@([A-Za-z0-9_-]+)$/;

    const handleInput = (e) => {
        setInput(e.target.value);
        setError("");
    }

    const checkInput = async () => {
        if (!input) {
            setError("Please enter youtube url");
        }
        else {
            if (youtubeRegex.test(input)) {
                let name = input.split("@")[1];
                // setChannelName(name);
                setLoading(true);
                const success = await fetchChannelData(name);
                setLoading(false);
                if (success) {
                    navigate("/analysis");
                } else {
                    setError("Failed to fetch channel data");
                }
            }
            else {
                setError("Please enter a valid YouTube channel link.");
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] via-black to-[#1a0f1f]  text-white">
            <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black">
                <div className="flex items-center gap-2">
                    {/* <div className="text-3xl text-purple-500 w-8 h-8 flex align-center "><img src={ytLogo} alt="YouTube Logo" />
                    </div> */}
                    <h1 className="text-white text-xl font-semibold">
                        YouTube<span className="text-purple-500"> Analyzer</span>
                    </h1>
                </div>
                <div className="flex items-center gap-6 text-sm">
                    <a href="#" className="hover:underline">CountDown</a>
                </div>
            </header>

            <main className="flex flex-col items-center justify-center px-4 text-center mt-28">
                <h2 className="text-2xl font-bold mb-4 sm:text-5xl">
                    AI-Powered YouTube Channel Analyzer
                </h2>
                <p className="text-gray-300 mb-8 text-ms sm:text:lg">
                    Get insights. Improve engagement. Grow faster. TRY FOR FREE!
                </p>

                <div className="flex flex-col sm:flex-row items-center w-full max-w-3xl gap-4">
                    <input
                        type="text"
                        placeholder="Enter Your youtube channel link"
                        className="flex-1 py-5 px-4 rounded-md w-full border border-gray-600 bg-black text-white placeholder:text-gray-400"
                        value={input}
                        onChange={handleInput}
                    />
                    <button className="bg-[#552fff] hover:bg-[#6e3aff] px-6 py-6 rounded-md text-white text-ms font-semibold" onClick={checkInput}>
                        Analysis
                    </button>

                </div>
                {loading && (
                    <div className="mt-4">
                        <div className="loader border-4 border-purple-500 border-t-transparent rounded-full w-8 h-8 animate-spin mx-auto"></div>
                        <p className="text-sm text-gray-400 mt-2">Analyzing Channel...</p>
                    </div>
                )}

                {error && <p className="text-red-500 mt-4">{error}</p>}
            </main>
        </div>
    );
}
