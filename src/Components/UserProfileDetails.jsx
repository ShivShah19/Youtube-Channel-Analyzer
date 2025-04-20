import { useContext, useState } from "react";
import worldIcon from "../assets/worldIcon.svg";
import subscriberIcon from "../assets/subscriberIcon.svg";

import { DataContext } from "../Contexts/DataContext";
import CountryCodes from "../CountryCode/countryCode";


export default function UserProfileDetails() {
    const { channelInfo } = useContext(DataContext);
    const [showDesc, setShowDesc] = useState(false);

    const dp = channelInfo?.snippet?.thumbnails?.high?.url;

    const subscriber = channelInfo?.statistics?.subscriberCount;

    const title = channelInfo?.snippet?.title;
    const description = channelInfo?.snippet?.description || "";
    const words = description.split(" ");
    const shortDesc = words.slice(0, 25).join(" ") + (words.length > 25 ? "..." : "");

    const code = channelInfo?.snippet?.country;
    const countryName = CountryCodes[code] || code;

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-black via-zinc-900 to-zinc-900 rounded-3xl shadow-xl flex flex-col md:flex-row items-left gap-7 md:gap-12 backdrop-blur-lg border border-white/10 text-white">
                <div className="flex-shrink-0">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-inner">
                        <img
                            src={dp}
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-left justify-center">
                    <h2 className="text-3xl font-bold">{title}</h2>

                    <p className="text-gray-300 text-sm leading-relaxed">
                        {showDesc ? description : shortDesc}
                        {words.length > 25 && (
                            <span
                                onClick={() => setShowDesc(!showDesc)}
                                className="ml-2 text-purple-400 cursor-pointer hover:underline"
                            >
                                {showDesc ? "Show less" : "Show more"}
                            </span>
                        )}
                    </p>
                    <p className="text-gray-300 text-ms flex gap-1.5"><img src={subscriberIcon} alt="subscriberIcon" /><span>{subscriber ? subscriber : 0} <span>{subscriber < 10 ? "Subscriber" : "Subscribers"}</span></span></p>
                    {countryName && <p className="text-gray-300 text-ms flex gap-1.5"><img src={worldIcon} alt="worldIcon" /><span>{countryName}</span></p>}
                </div>
            </div>
        </div >
    );
}
