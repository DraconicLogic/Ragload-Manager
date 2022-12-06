import React from "react";
import { Ragload } from "../../types";

function SortedRagloads({ ragloadState }) {
	const {
		ragloads,
		// setRagloads
	} = ragloadState;

	const processedRagloads = ragloads.filter((ragload: Ragload) => {
		return ragload.sortedDate;
	});

	// I want to create the data shape
	console.log("Processed Ragloads: ", processedRagloads);

	return <div>SORTED RAGLOADS</div>;
}

export default SortedRagloads;
