// TODO: I want the curent date and time displayed.
// TODO: I want this component to take a ragload. If theres no ragload to take then it should still work with

import { useState, useEffect } from "react";
import { Ragload } from "../../types";
import { formatISOString } from "../../utils";

function RagloadEntry({ ragload, handlers, key }) {
	console.log("key", key);
	const { handleAddRagload, handleUpdateRagload, handleModalVisibility } =
		handlers;

	const [currentRagload, setCurrentRagload] = useState<Ragload>({
		vendor: "",
		weight: 0,
		ticketNumber: "",
		deliveryDate: new Date().toISOString(),
	});

	useEffect(() => {
		console.log("Call initRagloadForEdit()");
		(function initRagloadForEdit() {
			const ragloadToEdit: Ragload = { ...ragload };
			if (ragload) setCurrentRagload(ragloadToEdit);
		})();
	}, [ragload]);

	function handleRagloadEntry(event) {
		console.log("handling Ragload Entry");
		const { name, value } = event.target;

		const newRagload: Ragload = {
			...currentRagload,
		};

		console.log(currentRagload);

		newRagload[name] = value;
		setCurrentRagload(newRagload);
	}

	function handleSubmit(event) {
		// TODO handle submision if updating a previously created Ragload
		event.preventDefault();
		currentRagload.weight = Number(currentRagload.weight);

		console.log(
			"Current Ragload Weight: ",
			currentRagload.weight,
			typeof currentRagload.weight
		);

		console.log("Current Ragload: ", currentRagload);

		if (ragload) {
			console.log("Updating Ragload");
			const updatedRagloadObj = {
				updatedRagload: currentRagload,
				previousRagload: ragload,
				// previousRagloadIndex: key,
			};
			// console.log(
			// 	"updatedRagloadObj.key: ",
			// 	updatedRagloadObj.previousRagloadIndex
			// );
			handleUpdateRagload(updatedRagloadObj);
		} else {
			handleAddRagload(currentRagload);
		}
		handleModalVisibility();
		// TODO: Close modal after submision
	}
	// const defaultFormSelection = ragload ? ragload.vendor : "";

	// const formAutofill = ragload ? {
	// 	currentRagload
	// } : null
	return (
		<div id="RagloadEntry">
			<h1>Ragload Entry</h1>
			<div id="RagloadEntry__currrent-date">
				{formatISOString(currentRagload.deliveryDate)}
			</div>
			<form id="RagloadEntry__form" onInput={handleRagloadEntry}>
				<label>
					Vendor :
					{/* TODO: create custom input element that starts as text field and matches results in a select field */}
					<select name="vendor" className="RagloadEntry__form__field">
						<option defaultValue={currentRagload.vendor}>
							{currentRagload.vendor}
						</option>
						<option value="UWT">UWT</option>
						<option value="Kabir">Kabir</option>
						<option value="John Rodgers">John Rodgers</option>
						<option value="Abdul">Abdul</option>
						<option value="Fountian">Fountian</option>
						<option value="Yacine">Yacine</option>
						<option value="Cash4Clothes">Cash4Clothes</option>
						<option value="Uniform Exchange">Uniform Exchange</option>
						<option value="British Heart Foundation">
							British Heart Foundation
						</option>
					</select>
				</label>
				<br />
				<label>
					Ticket Number :
					<input
						className="RagloadEntry__form__field"
						name="ticketNumber"
						type="text"
						defaultValue={currentRagload.ticketNumber}></input>
				</label>
				<br />
				<label>
					Weight(kg) :
					<input
						className="RagloadEntry__form__field"
						name="weight"
						type="number"
						value={currentRagload.weight}></input>
				</label>
			</form>
			<br />
			<button onClick={handleSubmit}>Confirm</button>
		</div>
	);
}

export default RagloadEntry;
