import {Layers3, Tag} from "lucide-react";

const CategoriesTags = () => {

    const tags = [
        {
            name:'人工智能',
            value: 1
        },{
            name:'区块链',
            value: 2
        },{
            name:'前端',
            value: 3
        },{
            name:'后端',
            value: 4
        }
    ]
    return(
<div className="rounded-xl bg-white dark:bg-[#242525] p-4">
    <div className="flex gap-1">
        <Layers3 className="text-blue-600"/>
        <span className="font-bold text-xl">分类目录</span>
    </div>
    <div className="mt-4 flex flex-wrap gap-1">
        {tags.map((item, index) => {
            return (
                <div key={index} className="flex  dark:bg-[#3d3e3e] line-clamp-2 border-2 p-[5px] rounded-xl bg-gray-100">{item.name}
                    <div className="flex justify-center items-center bg-gray-300 rounded-full px-2 mx-2 dark:bg-[#242525] text-sm">{item.value}</div>
                </div>
            )
        })}</div>
</div>
)};
export default CategoriesTags;
