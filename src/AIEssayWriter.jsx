import React from 'react';

const AIEssayWriter = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0a0a] to-[#19073a] text-white">
            <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black">
                <div className="flex items-center gap-2">
                    <div className="text-3xl text-purple-500">🤖</div>
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
                    />
                    <button className="bg-[#552fff] hover:bg-[#6e3aff] px-6 py-6 rounded-md text-white text-ms font-semibold">
                        Analysis
                    </button>

                </div>
            </main>
        </div>
    );
};

export default AIEssayWriter;
