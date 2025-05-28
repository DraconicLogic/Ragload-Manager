import * as React from "react";
// @ts-ignore
import { formatISOString } from "../../utils";
// @ts-ignore
import RagloadCardOptions from "../RagloadCardOptions/RagloadCardOptions.tsx";

function RagloadCard({ ragload, handleRagload, handleModal }) {
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showOptions, setShowOptions] = React.useState(false);

	function toggleOptions() {
		setShowOptions(!showOptions);
	}

	function displayCard() {
		return (
			<tr className="ragload-card">
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{formatISOString(deliveryDate)}</td>
				<td
					onClick={() => handleModal("RagloadCardMenu")}
					className="ragload-card__option-toggle"
					title="More options">
					⋮
				</td>
			</tr>
		);
	}
	// TODO: Remove the RagloadCardOptions. We are going to use a pop up menu on a modal
	return showOptions ? (
		<RagloadCardOptions
			handleRagload={handleRagload}
			optionsState={{ showOptions, setShowOptions }}
			ragload={ragload}
		/>
	) : (
		displayCard()
	);
}

export default RagloadCard;
