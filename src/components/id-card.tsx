import Image from "next/image";
const IdCard = () => {
    const info = [
        {
            name: '文章数',
            value: 10
        },
        {
            name: '分类数',
            value: 10
        },
        {
            name: '评论数',
            value: 10
        },
        {
            name: '访问量',
            value: 1020
        },
    ]

    return (
        <div className="relative rounded-xl overflow-hidden">
            <div className="w-full h-44 bg-center bg-cover" style={{ backgroundImage: 'url(/id-bg.jpg)' }}></div>
            <Image width={100} height={100} src="/avatar.jpeg" alt="Avatar" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-white" />
            <div className="w-full h-52 bg-white flex flex-col items-center  pt-10">
                <span className="text-xl font-bold">stepbystep</span>
                <div className="text-gray-400 font-light">再美的梦也有苏醒的一天</div>
                <div className="flex gap-5 mt-7">
                    {
                        info.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-2xl" style={{fontFamily:'Rough Motion'}}>{item.value}</span>
                                <span className="text-sm text-gray-400 font-extralight">{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default IdCard;
