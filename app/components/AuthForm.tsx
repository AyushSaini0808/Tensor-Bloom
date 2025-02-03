"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn, signUp} from "@/lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
    const router=useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({})
    // Schema based on form type
    const formSchema = z.object({
        username: type === "sign-up" ? z.string().min(3, "Username is required") : z.string().optional(),
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try{
            if(type==="sign-up"){
                const newUser=await signUp(data);
                setUser(newUser)
                router.push("/");
            }
            if(type==="sign-in"){
                const response=await signIn({email:data.email,password:data.password})
                if(response){
                    console.log("User logged in:", response);
                    router.push("/")
                }
            }
        }catch(e){
            console.error(e)
        }finally {
            setIsLoading(false)
        }

    };

    return (
        <section className="flex min-h-72 w-full max-w-[420px] flex-col justify-center gap-5 px-10 py-10 bg-white rounded-lg">
            <header className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <h1 className="text-xl font-bold">
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </h1>
                    <p className="text-lg text-gray-700">
                        Please fill out your details
                    </p>
                </div>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {type === "sign-up" && (
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={"font-bold"}>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={"font-bold"}>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={"font-bold"}>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Enter your password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" /> Loading...
                            </>
                        ) : type === "sign-in" ? "Sign In" : "Sign Up"}
                    </Button>
                </form>
            </Form>

            <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                    {type === "sign-in" ? "Don't have an account?" : "Already have an account?"}
                </p>
                <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="font-semibold text-blue-600">
                    {type === "sign-in" ? "Sign up" : "Sign in"}
                </Link>
            </footer>
        </section>
    );
};

export default AuthForm;
