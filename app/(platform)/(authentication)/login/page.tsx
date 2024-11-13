"use client";

import * as z from "zod";
import {useForm} from "react-hook-form";
import React, {useTransition} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/actions/authentication";

const formSchema = z.object({
    username: z.string()
        .min(6, {message: "Mínimo 6 caracteres"})
        .email({message: "El email no es válido."}),
    password: z.string()
        .min(6, {message: "Mínimo 6 caracteres",})
})

const LoginPage = () => {
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        startTransition(() => {
            login(values);
        })
    }

    return (
        <div className="max-w-md w-full text-center">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name="username"
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={"Email"} type="email" disabled={isPending}></Input>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        control={form.control}
                        render={({field}) => (
                            <FormItem className="mt-5">
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={"Escriba su contraseña"} type="password"
                                           disabled={isPending}></Input>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant={"default"} className="mt-10 w-auto px-12" disabled={isPending}>
                        Login
                    </Button>
                </form>
            </Form>
            <p className="mt-7 text-sm font-thin tracking-wide text-gray-700 underline">
                <Link href="/">
                    Volver al inicio
                </Link>
            </p>
        </div>
    )
}

export default LoginPage;