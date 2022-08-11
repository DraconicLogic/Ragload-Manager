import { Ragload } from "../../types";
// @ts-ignore
import RagloadCard from "../RagloadCard/RagloadCard.tsx";

function DeliveredRagloads({ ragloadState }) {
	const { ragloads, setRagloads } = ragloadState;

	const rawMaterials = ragloads.filter((ragload: Ragload) => {
		return !ragload.sortingStartDate && !ragload.sortedDate;
	});

	const currentlySorting = ragloads.filter((ragload: Ragload) => {
		return ragload.sortingStartDate && !ragload.sortedDate;
	});
	console.log("currentProcessing: ", currentlySorting);

	// Since I'm using this function elsewhere perhaps I need to abstract it away??
	function populateRagloads(ragloads) {
		return ragloads
			.map((ragload, index) => {
				return (
					<RagloadCard
						ragload={ragload}
						handleRagload={handleRagload}
						key={index}
					/>
				);
			})
			.reverse();
	}

	function handleRagload(ragloadObject) {
		const { action, selectedRagload } = ragloadObject;
		console.log("Handled Ragload: ", ragloadObject);
		const newRagloads = [...ragloads];
		console.log("newRagloads: ", newRagloads);

		const ragloadIndex = newRagloads.findIndex((ragload) => {
			console.log("Ragload find Index: ", ragload);
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
			console.log("FINISH PROCESSING");
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

	return (
		<div id="delivered-ragloads">
			<table>
				<caption>Delivered Ragloads</caption>
				<thead id="delievered-ragloads__headers">
					<tr>
						<th>Ticket Number</th>
						<th>Vendor</th>
						<th>Weight(kg)</th>
						<th>Delivery Date</th>
					</tr>
				</thead>
				<tbody id="delievered-ragloads__data">
					<tr>
						<td className="table--information">Sorting</td>
					</tr>
					{populateRagloads(currentlySorting)}
					<tr>
						<td className="table--information">-</td>
					</tr>
					<tr>
						<td className="table--information">Raw materials</td>
					</tr>
					{populateRagloads(rawMaterials)}
				</tbody>
			</table>
		</div>
	);
}

export default DeliveredRagloads;
