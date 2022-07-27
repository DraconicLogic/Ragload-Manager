import { Ragload } from "../../types";
// @ts-ignore
import { parseDate } from "../../utils.ts";
// @ts-ignore
import RagloadCard from "../RagloadCard/RagloadCard.tsx";

function DeliveredRagloads({ ragloadState }) {
	const { ragloads, setRagloads } = ragloadState;

	function populateRagloads(rags) {
		return rags
			.map((rag) => {
				return <RagloadCard ragload={rag} />;
			})
			.reverse();
	}

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
					{populateRagloads(ragloads)}
				</tbody>
			</table>
		</div>
	);
}

export default DeliveredRagloads;
