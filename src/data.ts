import { Ragload } from "./types";

const RAGLOAD_KEY = "rag-manager:data:ragloads";

export function getLocalRagloads(): Ragload[] {
	const localData: Ragload[] = JSON.parse(localStorage.getItem(RAGLOAD_KEY));
	return localData ? localData : [];
}

export function saveLocalRagloads(ragloads: Ragload[]): void {
	localStorage.setItem(RAGLOAD_KEY, JSON.stringify(ragloads));
}

// export function getCloudRagloads(){
// 	console.log("Getting Cloud data")
// 	return null;
// }
