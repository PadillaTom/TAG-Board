import { fetchProfile } from "@/actions/profileActions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
	const profileData = await fetchProfile();
	return (
		<div className="bg-pink-50 h-dvh flex justify-center flex-col items-center">
			<p className="text-slate-800 text-center tracking-wide font-extralight mb-8"> Mi Perfil </p>
			<div className=" flex flex-col justify-center items-center">
				<span className="">Nombre: {profileData.name}</span>
				<span className="">Apellido: {profileData.lastName}</span>
				<Image className="" src={profileData.imageUrl} width={300} height={700} alt="Profile"></Image>
			</div>
			<Link href="/dashboard" className="mt-8 underline">
				Inicio
			</Link>
		</div>
	);
};

export default ProfilePage;
