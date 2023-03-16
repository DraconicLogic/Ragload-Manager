import { Ragload } from "./types";

export function getLocalRagloads() {
	const localData: Ragload[] = JSON.parse(localStorage.getItem("ragloads"));
	return localData;
}

export function saveLocalRagloads(ragloads: Ragload[]) {
	localStorage.setItem("ragloads", JSON.stringify(ragloads));
}

export function getCloudRagloads() {
	// console.log("Getting Cloud data");
	return null;
}
