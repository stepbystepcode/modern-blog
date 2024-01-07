import Markdown from "@/components/markdown";
import {getPost} from "@/app/util";
export const revalidate = 3600
export default async function ArticlePage({params: { id },}: { params: { id: string } }) {

    const item = await getPost(id);
    return (
        <div className="col-span-2 max-[1200px]:col-span-3 bg-white dark:bg-[#242525] rounded-lg p-5">
            <div>
                <h1 className="text-4xl font-bold text-gray-800">{item.title}</h1>
                <Markdown content={item.content} />
            </div>
        </div>
    )
}
