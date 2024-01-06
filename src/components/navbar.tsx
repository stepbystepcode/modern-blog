const NavBar = () => {
    const items = [
        "人工智能",
        "大数据",
        "区块链",
        "云技术",
        "银行",
        "数字货币",];
    return (<>
            {items.map((item, index) => {
                return (
                    <div key={index}
                         style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/items/${index + 1}.jpg)`}}
                         className="max-[1200px]:col-span-2 flex backdrop-opacity-5 text-white justify-center items-center rounded-lg bg-center bg-cover h-14">
                        {item}
                    </div>
                )
            })}
        </>
    )
}
export default NavBar;
