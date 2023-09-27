import NavbarRoutes from "@/components/navbar-routes";
import MobileSideBar from "./mobile-sidebar";

const NavBar = () => {
    return ( 
        <div className="h-full shadow-sm p-4 border-b flex items-center
        bg-white">
        <MobileSideBar />
        <NavbarRoutes />
        </div>
    );
}

export default NavBar;