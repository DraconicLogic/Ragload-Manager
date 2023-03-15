export function getLocalRagloads() {
	console.log("Getting local data");
	const localData = localStorage.getItem("ragloads");
	console.log("LocalStorage Data: ", localData);
	if (localData) {
		return JSON.parse(localData);
	} else {
		return localData;
	}
}

export function saveLocalRagloads(ragloads) {
	console.log("Saving Local data");
	console.log("input: ", ragloads);
	localStorage.setItem("ragloads", JSON.stringify(ragloads));
}

export function getCloudRagloads() {
	console.log("Getting Cloud data");
	return null;
}
