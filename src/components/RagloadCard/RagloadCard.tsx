import * as React from "react";
// @ts-ignore
import { formatISOString } from "../../utils.ts";
// @ts-ignore
import RagloadCardOptions from "../RagloadCardOptions/RagloadCardOptions.tsx";

function RagloadCard({ ragload, handleRagload }) {
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showOptions, setShowOptions] = React.useState(false);

	function toggleOptions() {
		setShowOptions(!showOptions);
	}

	const isHandlerPresent = !!handleRagload;

	function displayCard() {
		return (
			<tr className="ragload-card">
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{formatISOString(deliveryDate)}</td>
				<td
					hidden={!isHandlerPresent}
					onClick={toggleOptions}
					className="ragload-card__option-toggle">
					‹
				</td>
			</tr>
		);
	}

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
