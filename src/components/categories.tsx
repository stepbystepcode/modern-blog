const CategoriesBar = () => {
    const navList=[
        "最新",
        "时间轴",
        "效字货币",
        "人工智能",
        "大数据",
        "购买主题",
    ]
    return (
        <>
            <div className="bg-white rounded-lg col-span-6 flex gap-3 p-3">
                {navList.map((item,index)=>{
                    return(
                        <div key={index} className="flex text-xs font-light justify-center items-center py-2 px-4 hover:bg-black hover:text-white text-gray-500 cursor-pointer transition-all rounded-full bg-[#f1f1f2]">
                            {item}
                        </div>
                    )})
                }
            </div>
        </>
    )
}
export default CategoriesBar;
