// import {
//     ResizableHandle,
//     ResizablePanel,
//     ResizablePanelGroup,
// } from "@/components/ui/resizable"
// import { Card } from "@/components/ui/card"
// const Admin = () => {
//     return (
//         <div className="py-24 px-10">
//             <Card className="p-5">
//                 <h1 className="text-3xl font-bold tracking-tight">仪表盘</h1>
//                 <ResizablePanelGroup className="min-h-[200px] rounded-lg border" direction="horizontal">
//                     <ResizablePanel>One</ResizablePanel>
//                     <ResizableHandle />
//                     <ResizablePanel>Two</ResizablePanel>
//                 </ResizablePanelGroup>

//             </Card>
//         </div>
//     );
// }
// export default Admin;
// pages/index.js
// pages/index.js

const HomePage = () => {
    return <div>This is the home page</div>;
  };
  
  HomePage.getLayout = function PageLayout(page) {
    // Returning `null` means no layout will be used for this page
    return null;
  };
  
  export default HomePage;
  