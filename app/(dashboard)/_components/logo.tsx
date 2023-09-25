import Image from "next/image";

const Logo = () => {
    return ( 
        <>
        <Image
        height={80}
        width={80}
        alt="logo"
        src="/logo.svg"
        className="p-4 absolute top-0 left-0 inset-y-0"
        />
        <p className="ml-14 text-2xl">Coursify</p>
        </>
    );
}

export default Logo;