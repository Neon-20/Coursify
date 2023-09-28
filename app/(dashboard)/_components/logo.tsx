import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <>
        <Image
        height={82}
        width={82}
        alt="logo"
        src="/logo.svg"
        className="p-4 absolute top-0 left-0 inset-y-0"
        />
        <Link href="/">
        <p className="ml-12 text-2xl font-sans cursor-pointer">COURSIFY</p>
        </Link>
        </>
    );
}

export default Logo;