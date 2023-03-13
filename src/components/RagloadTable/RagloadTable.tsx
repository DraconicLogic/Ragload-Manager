import * as React from "react";
import { Ragload } from "../../types";
// @ts-ignore
import RagloadCard from "../RagloadCard/RagloadCard.tsx";

function RagloadTable({ ragloads, handleRagload }) {
	function populateRagloads(ragloads: Ragload[]) {
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
	console.log("Ragloads: ", ragloads);
	return (
		<table className="ragload-table">
			<thead>
				<tr>
					<th>Ticket Number</th>
					<th>Vendor</th>
					<th>Weight(kg)</th>
					<th>Delivery Date</th>
				</tr>
			</thead>
			<tbody>{populateRagloads(ragloads)}</tbody>
		</table>
	);
}

export default RagloadTable;
