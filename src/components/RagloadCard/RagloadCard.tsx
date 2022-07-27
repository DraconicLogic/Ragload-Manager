import { Ragload } from "../../types";
import { useState } from "react";

function RagloadCard({ ragload }) {
	console.log("Ragload in RagloadCard: ", ragload);
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showOptions, setShowOptions] = useState(false);

	function toggleOptions(event) {
		console.log("Options Triggered?");
		setShowOptions(!showOptions);
	}

	function displayCard() {
		return (
			<tr onClick={toggleOptions}>
				<td onClick={toggleOptions}>{ticketNumber}</td>
				<td onClick={toggleOptions}>{vendor}</td>
				<td onClick={toggleOptions}>{weight}</td>
				<td onClick={toggleOptions}>{deliveryDate}</td>
			</tr>
		);
	}

	function displayOptions() {
		return (
			<tr onClick={toggleOptions}>
				<td>
					<button>Start Sorting</button>
				</td>
				<td onClick={toggleOptions}></td>
				<td onClick={toggleOptions}></td>
				<td>
					<button>Delete</button>
				</td>
			</tr>
		);
	}

	return showOptions ? displayOptions() : displayCard();
}

export default RagloadCard;
