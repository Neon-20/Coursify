// This page will have server actions and will fetch 
//course from server
import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";

const CourseIdPage = async({
    params
}:{
    params:{courseId:string}
}) => {
const {userId} = auth();
if(!userId){
    return redirect("/")
}

const course = await db.course.findUnique({
    where:{
        id:params.courseId,
    }
})
if(!course){
    return redirect("/");
}
const TotalProperties = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId
]

const totalLength = TotalProperties.length;
const completedFields = TotalProperties.filter(Boolean).length;

const completionText = `(${completedFields}/${totalLength})`

    return ( 
        <div className="p-8">
        <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-medium">Course Details</h1>
        <span className="text-sm text-slate-700">
        Complete all fields {completionText}
        </span>
        </div>
        </div>
        <div className="grid grid-col-1 md:grid-col-2 gap-6 mt-16">
        <div>
        <div className="flex items-center gap-x-2">
        <IconBadge variant="default" icon={LayoutDashboard}/>
        <h2 className="text-xl">Customise your Course</h2>
        </div>
        </div>
        </div>
        </div>
    );
}

export default CourseIdPage;