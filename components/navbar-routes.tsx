"use client"
import { UserButton } from "@clerk/nextjs";
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

const NavbarRoutes = () => {
const pathname = usePathname();
const router = useRouter();

const isTeacherPage = pathname?.startsWith("/teacher");
const isPlayerPage = pathname?.includes("/chapter");

    return ( 
        <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
        <Link href="/">
        <Button size="sm" variant={"outline"}>  
        <LogOut className="h-4 w-4 mr-2"/>
        Exit
        </Button>
        </Link>
        ):(     
        <Link href="/teacher/courses">
        <Button size="sm" variant={"outline"} >
        Teacher Mode
        </Button>
        </Link>
        )}
        <UserButton
        afterSignOutUrl="/"
        />
        </div>
    );
}

export default NavbarRoutes;