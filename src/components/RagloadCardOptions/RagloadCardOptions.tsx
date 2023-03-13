import * as React from "react";

function RagloadCardOptions({ ragload, handleRagload, optionsState }) {
	const { showOptions, setShowOptions } = optionsState;

	function toggleOptions() {
		setShowOptions(!showOptions);
	}

	function handleOptions({ event, ragload }) {
		// TODO: Get rid of console.logs
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

	return displayOptions();
}

export default RagloadCardOptions;
