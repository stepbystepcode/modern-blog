import {Card} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Checkbox} from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input";


const PostsPage: React.FC = () => {
    return (
        <>
            <Card className="col-span-2">
                <div className="p-3 flex items-center gap-4"><Checkbox/><Input className="w-50"
                                                                               placeholder="输入搜索内容"/></div>
                <Separator/>123</Card>
        </>
    );
}
export default PostsPage;