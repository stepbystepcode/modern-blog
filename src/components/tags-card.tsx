import {Tag} from "lucide-react";

const TagsCard = () => {
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
    <div className="rounded-xl bg-white p-4">
        <div className="flex gap-1">
            <Tag className="text-blue-600"/>
            <span className="font-bold text-xl">标签</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
        {tags.map((item, index) => {
            return (
               <div key={index} className="flex font-extralight line-clamp-2 border-2 p-2 rounded-md bg-gray-100">#{item.name}
               <div className="flex justify-center items-center bg-gray-300 rounded-full px-2 mx-2 text-sm">{item.value}</div>
               </div>
            )
        })}</div>
    </div>
)};
export default TagsCard;
