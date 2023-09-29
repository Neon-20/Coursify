"use client";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import {useForm} from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormDescription,
    FormItem
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

type TitleFormProps = {
    initialData:{
        title:string
    }
    courseId:string
}

const formSchema = z.object({
    title:z.string().min(1,{
        message:"Title is required"
    })
})

const TitleForm = ({
    initialData,
    courseId
}:TitleFormProps) => {
// for edit state
const [isEditing, setIsEditing] = useState(false);
const toggleEdit = () => setIsEditing(current => !current)

const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:initialData
})

const {isSubmitting,isValid} = form.formState;
const router = useRouter();
const onSubmit = async(values:z.infer<typeof formSchema>) => {
    try{
    await axios.patch(`/api/courses/${courseId}`,values)
    toast({
        title:"Course title updated",
        variant:"default"
    })
    toggleEdit();
    router.refresh();
    }
    catch{
        toast({
        title:"An error occurred",
        description:"Unable to update course title",
        variant:"destructive"
        })
    }
}
    return ( 
    <div className="mt-6 border bg-slate-50 rounded-md p-4">
    <div className="font-medium flex items-center justify-between ml-2">
    Course Title 
    <Button onClick={toggleEdit}
    variant={"ghost"} className="hover:bg-slate-400 cursor-pointer">
    {isEditing ? (
        <>Cancel</>
    ):(
    <>
    <Pencil className="h-4 w-4 mr-2"/>
    Edit Title
    </>
    )}
    </Button>
    </div>
    {!isEditing && (
        <p className="mt-2 text-sm ml-2">
        {initialData.title}
        </p>
    )}
    {isEditing && (
    <Form{...form}>
    <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="mt-4 space-y-4"
    >
    <FormField
    control={form.control}
    name="title"
    render = {({field}) => (
        <FormItem>
        <FormControl>
        <Input 
        disabled={isSubmitting}
        placeholder="e.g Web Development"
        {...field}
        />
        </FormControl>
        <FormMessage/>
        </FormItem>
    )}
    />
    <div className="flex items-center gap-x-2">
    <Button 
    disabled={!isValid || isSubmitting}
    type="submit"
    >
    Save
    </Button>
    </div>
    </form>
    </Form>
    )}
    </div> 
    );
}

export default TitleForm;