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
		console.log("ragload: ", ragload);
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

	const sortingStartedExpression = ragload.sortingStartDate ? false : true;

	function displayOptions() {
		return (
			<tr>
				<td>
					<button onClick={(event) => handleOptions({ event, ragload })}>
						{ragload.sortingStartDate ? "Suspend Sorting" : "Start Sorting"}
					</button>
				</td>
				<td>
					<button onClick={(event) => handleOptions({ event, ragload })}>
						Delete
					</button>{" "}
				</td>
				<td> </td>
				{/*  */}
				<td>
					<button disabled={sortingStartedExpression}>Finish Sorting</button>
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
