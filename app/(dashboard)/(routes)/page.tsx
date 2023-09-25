import { UserButton } from "@clerk/nextjs"

export default function Home() {
return (
<div className="absolute top-0 right-0 h-16 w-16">
<UserButton
afterSignOutUrl="/"
/>
</div>
    )
}
