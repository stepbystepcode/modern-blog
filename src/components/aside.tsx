import CalendarCard from '../components/calendar-card'
import IdCard from "@/components/id-card";
import HotArticle from "@/components/hot-article";
import Timeline from "@/components/timeline";
import CategoriesTags from "@/components/categories-tags";
import TagsCard from "@/components/tags-card";
const Aside = () => {

    return (
        <aside className="max-[1200px]:hidden flex flex-col gap-[1rem]">
            <CalendarCard/>
            <IdCard/>
            <HotArticle/>
            <Timeline/>
            <CategoriesTags/>
            <TagsCard/>
        </aside>
    )
}
export default Aside;
