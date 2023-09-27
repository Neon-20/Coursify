//We dont have reusable components here

import Logo from "./logo";
import SideBarRoutes from "./sidebarRoutes";

const SideBar = () => {
    return (
    <div className="text-white text-2xl h-full border-r flex flex-col overflow-y-auto bg-gray-950 shadow-sm space-y-4">
    {/* Another div for the logo */}
    <div className="p-6">
    <Logo/>
    </div>
    <div className="flex flex-col w-full">
    <SideBarRoutes/>
    </div>
    </div> 
    );
}

export default SideBar;