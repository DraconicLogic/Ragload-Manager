import { Ragload } from "./types";

export function getLocalRagloads(): Ragload[] {
	const localData: Ragload[] = JSON.parse(localStorage.getItem("ragloads"));
	return localData ? localData : [];
}

export function saveLocalRagloads(ragloads: Ragload[]): void {
	localStorage.setItem("ragloads", JSON.stringify(ragloads));
}

// export function getCloudRagloads(){
// 	console.log("Getting Cloud data")
// 	return null;
// }
