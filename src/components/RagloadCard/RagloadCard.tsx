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
			<tr>
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{deliveryDate}</td>
				<span onClick={toggleOptions} className="ragload-card__option-toggle">
					‹
				</span>
			</tr>
		);
	}

	function displayOptions() {
		return (
			<tr>
				<td>
					<button>Start Sorting</button>
				</td>
				<td> </td>
				<td> </td>
				<td>
					<button>Delete</button>
				</td>
				<span onClick={toggleOptions} className="ragload-card__option-toggle">
					›
				</span>
			</tr>
		);
	}

	return showOptions ? displayOptions() : displayCard();
}

export default RagloadCard;
