import { Menu } from "lucide-react";
import { Sheet,SheetContent,SheetTrigger } from "@/components/ui/sheet";
import SideBar from "./SideBar";

const MobileSideBar = () => {
    return ( 
    <div>
    <Sheet>
    <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
    <Menu/>
    </SheetTrigger>
    <SheetContent side="left" className="p-0 bg-gray-100">
        <SideBar/>
    </SheetContent>
    </Sheet>
    </div> 
    );
}

export default MobileSideBar;