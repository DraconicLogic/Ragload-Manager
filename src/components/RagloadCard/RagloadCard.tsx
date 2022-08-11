import { useState } from "react";

function RagloadCard({ ragload, handleRagload }) {
	const { vendor, ticketNumber, weight, deliveryDate } = ragload;
	const [showOptions, setShowOptions] = useState(false);

	function toggleOptions() {
		setShowOptions(!showOptions);
	}

	// TODO: I need to handle all the options here then hand off to parent component handler
	function handleOptions({ event, ragload }) {
		// TODO: find option selected and pass to parent handler
		console.log("event: ", event);
		console.log("event target: ", event.target);
		console.log("value: ", event.target.value);
		console.log("ragload: ", ragload);

		const options = {
			action: event.target.value,
			selectedRagload: ragload,
		};
		console.log("HANDLING OPTIONS: ", options);
		handleRagload(options);
	}

	function displayCard() {
		return (
			<tr className="ragload-card">
				<td>{ticketNumber}</td>
				<td>{vendor}</td>
				<td>{weight}</td>
				<td>{deliveryDate}</td>
				<td onClick={toggleOptions} className="ragload-card__option-toggle">
					‹
				</td>
			</tr>
		);
	}

	const sortingStartedExpression = ragload.sortingStartDate ? false : true;

	function displayOptions() {
		return (
			<tr className="ragload-card">
				<td>
					<button
						value={ragload.sortingStartDate ? "suspend" : "start"}
						onClick={(event) => handleOptions({ event, ragload })}>
						{ragload.sortingStartDate ? "Suspend Sorting" : "Start Sorting"}
					</button>
				</td>
				<td>
					<button
						value="delete"
						onClick={(event) => handleOptions({ event, ragload })}>
						Delete
					</button>
				</td>
				<td> </td>
				{/*  */}
				<td>
					<button
						value="finish"
						disabled={sortingStartedExpression}
						onClick={(event) => handleOptions({ event, ragload })}>
						Finish Sorting
					</button>
				</td>
				<td onClick={toggleOptions} className="ragload-card__option-toggle">
					›
				</td>
			</tr>
		);
	}

	return showOptions ? displayOptions() : displayCard();
}

export default RagloadCard;
