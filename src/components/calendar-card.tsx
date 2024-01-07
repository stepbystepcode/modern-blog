import dayjs from "dayjs";
const CalendarCard = () => {
    return (
        <div className="cursor-pointer rounded-lg bg-white dark:bg-[#242525] h-80 p-10 bg-center bg-cover" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/cal.jpg")`}}>
            <div style={{fontFamily:"Rough Motion"}} className="w-[5rem] flex flex-col items-center" >
            <div className="text-7xl text-white">{
                dayjs().format("DD")
            }</div>
            <div className="text-1xl text-white">{
                dayjs().format("YYYY-MM")
            }</div>
            </div>
            <div className="mt-24 text-gray-300 transition-all hover:text-white font-bold text-2xl">第四范式冲刺IPO，难逃AI玩家通病？</div>
        </div>
    )
}
export default CalendarCard;
