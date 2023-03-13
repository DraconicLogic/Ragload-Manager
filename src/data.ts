export function getLocalRagloads() {
	console.log("Getting local data");
	const localData = localStorage.getItem("ragloads");
	if (localData) {
		return JSON.parse(localData);
	} else {
		return localData;
	}
}

export function getCloudRagloads() {
	console.log("Getting Cloud data");
	return null;
}
