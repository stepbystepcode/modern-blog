import {Calendar} from "lucide-react";
import Image from "next/image";

const Timeline = () => {
    const timelist = [
        {
            date: '2021-09-12',
            title: 'iOS 17升级密码功能，苹果给安卓手机们上了一堂课',
        }
    ];
    return (
    <div className="rounded-xl bg-white p-4">
        <div className="flex gap-1">
            <Calendar className="text-blue-600" />
            <span className="font-bold text-xl">时间轴</span>
        </div>
        <div className="flex items-center relative">
        <div className="bg-gray-200 w-1 absolute left-1/20 ml-5 h-72 z-0"></div>
        <div>
        {Array(3).fill(timelist[0]).map((item, index) => {
            return (
                <div key={index} className="flex gap-3 bg-white rounded-lg col-span-6 p-4">
                    <div className={`shadow-xl z-50 aspect-square mt-2 rounded-full ${index === 0 ? 'bg-blue-700 border-blue-100 w-[16px] h-[16px] ml-[-2px] border-[3px]' : 'w-3 h-3 bg-white border-black border-2'}`}></div>
                    <div className="font-extralight">
                        <div className="line-clamp-2 mb-2">{item.title}</div>
                        <span className="text-md text-gray-400" style={{fontFamily:'Rough Motion'}}>{item.date}</span>
                    </div>
                </div>
            )
        })}</div></div>
    </div>
    )
}
export default Timeline;
