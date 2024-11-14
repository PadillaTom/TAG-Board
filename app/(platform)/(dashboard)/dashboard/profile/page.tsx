import { fetchProfile } from "@/actions/profile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
	const profileData = await fetchProfile();
	console.log(profileData);
	return (
		<div className="bg-cyan-100 h-dvh flex justify-center flex-col items-center">
			<p className="text-slate-800 text-center tracking-wide font-extralight"> Profile </p>
			<span className="">{profileData.name}</span>
			<Image className="" src={profileData.imageUrl} width={500} height={500} alt="Profile"></Image>
			<Link href="/dashboard" className="mt-8">
				Inicio
			</Link>
		</div>
	);
};

export default ProfilePage;
