"use client";

import * as z from "zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { register } from "@/actions/authentication";
import { registerSchema } from "@/schemas/authSchema";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: "",
			password: "",
			passwordConfirmation: "",
			roleId: 2,
		},
	});

	const onSubmit = (values: z.infer<typeof registerSchema>) => {
		startTransition(async () => {
			const result = await register(values);
			if (result && result.httpStatus) {
				form.setError("root", {
					type: "manual",
					message: result.message,
				});
			} else {
				router.push("/dashboard");
			}
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="username"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Email"} type="email" disabled={isPending}></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormLabel>Contraseña</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Escriba su contraseña"} type="password" disabled={isPending}></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="passwordConfirmation"
					control={form.control}
					render={({ field }) => (
						<FormItem className="mt-5">
							<FormLabel>Repita su contraseña</FormLabel>
							<FormControl>
								<Input {...field} placeholder={"Repita su contraseña"} type="password" disabled={isPending}></Input>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" variant={"default"} className="mt-10 w-auto px-12">
					Quiero unirme!
				</Button>
				{form.formState.errors.root && <FormMessage className="mt-2">{form.formState.errors.root.message}</FormMessage>}
			</form>
		</Form>
	);
};

export default RegisterForm;
