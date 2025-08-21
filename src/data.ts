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

const VENDOR_STORAGE_KEY = "rag-manager:data:vendors";

const defaultVendors = [
	"UWT",
	"Kabir",
	"John Rodgers",
	"Fountain",
	"Yacine",
	"Cash4Clothes",
	"Uniform Exchange",
	"British Heart Foundation",
];

export function getLocalVendors(): string[] {
	const localData = JSON.parse(localStorage.getItem(VENDOR_STORAGE_KEY));
	return localData ? localData : defaultVendors;
}

export function addNewVendor(newVendor: string): void {
	const vendorsCopy = getLocalVendors();
	if (!vendorsCopy.includes(newVendor)) {
		vendorsCopy.push(newVendor);
		saveVendors(vendorsCopy);
	}
}

function saveVendors(vendors: string[]): void {
	localStorage.setItem(VENDOR_STORAGE_KEY, JSON.stringify(vendors));
}
