import { Ragload } from "../../types";
import RagloadCard from "../RagloadCard/RagloadCard";
import * as utils from "../../utils";

function RagloadTable({ ragloads, handlers, selectedDate }) {
	const filteredRagloads = selectedDate
		? ragloads.filter((ragload) => {
				const deliveryDate = new Date(ragload.deliveryDate);
				return utils.isSameDay(deliveryDate, selectedDate);
		  })
		: ragloads;

	function populateRagloads(ragloads: Ragload[]) {
		return ragloads
			.map((ragload, index) => {
				console.log("populateRagloads() index: ", index);
				return (
					<RagloadCard ragload={ragload} handlers={handlers} key={index} />
				);
			})
			.reverse();
	}

	console.log("Filtered Ragloads: ", filteredRagloads);
	return (
		<div>
			{filteredRagloads.length === 0 ? (
				<p style={{ padding: "1rem", textAlign: "center", color: "gray" }}>
					No ragloads for this day
				</p>
			) : (
				<table className="ragload-table">
					<thead>
						<tr>
							<th>Ticket Number</th>
							<th>Vendor</th>
							<th>Weight(kg)</th>
							<th>Delivery Date</th>
						</tr>
					</thead>
					<tbody>{populateRagloads(filteredRagloads)}</tbody>
				</table>
			)}
		</div>
	);
}

export default RagloadTable;
