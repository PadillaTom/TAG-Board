import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function avatarGenerator(myString: string) {
	let acronym = "TAG";
	if (myString != null) {
		const matches = myString.match(/\b(\w)/g);
		if (matches) {
			return (acronym = matches.join(""));
		}
		return acronym;
	}
	return acronym;
}