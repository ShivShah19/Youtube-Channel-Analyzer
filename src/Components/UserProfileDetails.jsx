import Audience from "../assets/audience.svg";
import Video from "../assets/video.svg";
import View from "../assets/view.svg";

export default function UserProfileDetails() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-gradient-to-br from-black via-zinc-900 to-zinc-900 rounded-3xl shadow-xl flex flex-col md:flex-row items-left gap-7 md:gap-12 backdrop-blur-lg border border-white/10 text-white">
            <div className="flex-shrink-0">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-white/10 shadow-inner">
                    <img
                        src={Audience}
                        alt="User"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 text-left justify-center">
                <h2 className="text-3xl font-bold">Coder shiv</h2>
                <p className="text-gray-300 text-ms flex gap-1.5"><img src={Audience} alt="Subscriber" /> <span>85K</span></p>
                <p className="text-gray-300 text-ms flex gap-1.5"><img src={Video} alt="video" /> <span>419 </span> videos</p>
                <p className="text-gray-300 text-ms flex gap-1.5"><img src={View} alt="views" /> <span>18,568,299</span>views</p>
            </div>
        </div>
    );
}
