"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import {usePathname,useRouter} from "next/navigation";

type SideBarProps = {
    icon:string
    label:string
    href:string
}
const SideBarItems = ({
    icon:Icon,
    label,
    href
}:SideBarProps) => {
const pathname = usePathname();
const router = useRouter();

const isActive =
(pathname === '/' && href === '/') || (pathname === href) || (pathname?.startsWith(`${href}/`))  

const onClick = () =>{
    router.push(href);
}
    return ( 
        <button
        onClick={onClick}
        type="button"
        // classname shd be dynamic using cn
        className={cn(`text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition`,
        isActive && "text-white bg-white/10")}
        >
        <div className="flex items-center gap-x-2 py-2">
        <Icon 
        size = {26}
        className = {cn("text-slate-500",isActive && "text-red-600")}
        />
        {label}
        </div>
        <div 
        className={cn("ml-auto opacity-0 border-2 border-pink-400 h-full transition-all",
        isActive && "opacity-100")}
        />
        </button>
    );
}

export default SideBarItems;