import React from "react";
import { Ragload } from "../../types";
// @ts-ignore
import RagloadCard from "../RagloadCard/RagloadCard.tsx";
// @ts-ignore
import RagloadCardOptions from "../RagloadCardOptions/RagloadCardOptions.tsx";
// @ts-ignore
import RagloadTable from "../RagloadTable/RagloadTable.tsx";

function DeliveredRagloads({ ragloadState }) {
	const { ragloads, setRagloads } = ragloadState;
	console.log(ragloads);

	const rawMaterials: Ragload[] = ragloads.filter((ragload: Ragload) => {
		return !ragload.sortingStartDate && !ragload.sortedDate;
	});

	const currentlySorting: Ragload[] = ragloads.filter((ragload: Ragload) => {
		return ragload.sortingStartDate && !ragload.sortedDate;
	});

	// console.log("currentProcessing: ", currentlySorting);

	// Since I'm using this function elsewhere perhaps I need to abstract it away??
	// function populateRagloads(ragloads: Ragload[]) {
	// 	return ragloads
	// 		.map((ragload, index) => {
	// 			return (
	// 				<RagloadCardOptions handleRagload={handleRagload}>
	// 					<RagloadCard
	// 						ragload={ragload}
	// 						handleRagload={handleRagload}
	// 						key={index}
	// 					/>
	// 				</RagloadCardOptions>
	// 			);
	// 		})
	// 		.reverse();
	// }
	// populateRagloads() is a local function in RagloadTable.tsx. If This file is modified to use <RagloadTable/> then we can remove populateRagloads here.

	function handleRagload(ragloadObject) {
		const { action, selectedRagload } = ragloadObject;
		// console.log("Handled Ragload: ", ragloadObject);
		const newRagloads = [...ragloads];
		// console.log("newRagloads: ", newRagloads);

		const ragloadIndex = newRagloads.findIndex((ragload) => {
			// console.log("Ragload find Index: ", ragload);
			return ragload.ticketNumber === selectedRagload.ticketNumber;
		});

		// Move to "Sorting"
		if (action === "start") {
			newRagloads[ragloadIndex].sortingStartDate = new Date().toISOString();
		}

		// Delete Ragload
		if (action === "delete") {
			newRagloads.splice(ragloadIndex, 1);
		}

		// Return back to "Raw Materials"
		if (action === "suspend") {
			delete newRagloads[ragloadIndex].sortingStartDate;
		}

		// Finish ragload and move to Sorted component
		if (action === "finish") {
			// console.log("FINISH PROCESSING");
			newRagloads[ragloadIndex].sortedDate = new Date().toISOString();
		}

		setRagloads(newRagloads);
	}

	// function handleCurrentlySorting(ragload) {
	// 	console.log("Ragload to start sorting: ", ragload);
	// 	const newCurrentlySorting = [...currentlySorting];
	// 	ragload.sortingStartDate = new Date().toISOString();
	// 	newCurrentlySorting.push(ragload);
	// 	// TODO: add new ragload to newCurrentlySorting
	// 	console.log("newCurrentlySorting: ", newCurrentlySorting);
	// 	setCurrentlySorting(newCurrentlySorting);
	// }
	const hasSortingEntries = currentlySorting.length > 0;
	const hasRawMaterialsEntries = rawMaterials.length > 0;
	return (
		<div>
			{!hasSortingEntries && !hasRawMaterialsEntries && (
				<h2>Please add Ragload</h2>
			)}
			{hasSortingEntries && (
				<React.Fragment>
					<h2>Sorting</h2>
					<RagloadTable
						ragloads={currentlySorting}
						handleRagload={handleRagload}
					/>
				</React.Fragment>
			)}
			<br />
			{hasRawMaterialsEntries && (
				<React.Fragment>
					<h2>RawMaterials</h2>
					<RagloadTable ragloads={rawMaterials} handleRagload={handleRagload} />
				</React.Fragment>
			)}
		</div>
		// <div id="delivered-ragloads">
		// 	<table>
		// 		<caption>Delivered Ragloads</caption>
		// 		<thead id="delivered-ragloads__headers">
		// 			<tr>
		// 				<th>Ticket Number</th>
		// 				<th>Vendor</th>
		// 				<th>Weight(kg)</th>
		// 				<th>Delivery Date</th>
		// 			</tr>
		// 		</thead>
		// 		<tbody id="delivered-ragloads__data">
		// 			<tr>
		// 				<td className="table--information">Sorting</td>
		// 			</tr>
		// 			{populateRagloads(currentlySorting)}
		// 			<tr>
		// 				<td className="table--information">-</td>
		// 			</tr>
		// 			<tr>
		// 				<td className="table--information">Raw materials</td>
		// 			</tr>
		// 			{populateRagloads(rawMaterials)}
		// 		</tbody>
		// 	</table>
		// </div>
	);
}

export default DeliveredRagloads;
