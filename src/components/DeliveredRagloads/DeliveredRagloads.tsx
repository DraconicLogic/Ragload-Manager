import { Ragload } from "../../types";
// @ts-ignore
import RagloadCard from "../RagloadCard/RagloadCard.tsx";

function DeliveredRagloads({ ragloadState }) {
	const { ragloads } = ragloadState;

	const rawMaterials = ragloads.filter((ragload: Ragload) => {
		return !ragload.sortingStartDate && !ragload.sortedDate;
	});

	// change to activeProcessing
	const currentlySorting = ragloads.filter((ragload: Ragload) => {
		return ragload.sortingStartDate && !ragload.sortedDate;
	});

	function populateRagloads(ragloads) {
		// Since I'm using this function elsewhere perhaps I need to abstract it away??
		return ragloads
			.map((ragload) => {
				return <RagloadCard ragload={ragload} handleRagload={handleRagload} />;
			})
			.reverse();
	}

	function handleRagload(ragload) {
		console.log("Handled Ragload: ", ragload);
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
						<td className="table--information">Sorting</td>{" "}
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
