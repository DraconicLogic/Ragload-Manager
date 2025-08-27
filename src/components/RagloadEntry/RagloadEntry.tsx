// TODO: I want this component to take a ragload. If theres no ragload to take then it should still work with

import { useState, useEffect } from "react";
import { Ragload } from "../../types";
import { formatISOString } from "../../utils";
import ComboBoxInput from "../ComboBoxInput/ComboBoxInput";

function RagloadEntry({ ragload, handlers }) {
	const { handleAddRagload, handleUpdateRagload, handleModalVisibility } =
		handlers;

	const [currentRagload, setCurrentRagload] = useState<Ragload>({
		vendor: "",
		weight: 0,
		ticketNumber: "",
		deliveryDate: new Date().toISOString(),
	});

	useEffect(() => {
		(function initialiseRagloadForEdit() {
			const ragloadToEdit: Ragload = { ...ragload };
			if (ragload) setCurrentRagload(ragloadToEdit);
		})();
	}, [ragload]);

	function handleRagloadEntry(event) {
		const { name, value } = event.target;

		const newRagload: Ragload = {
			...currentRagload,
		};
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

	return (
		<div id="RagloadEntry">
			<h1>Ragload Entry</h1>
			<div id="RagloadEntry__currrent-date">
				{formatISOString(currentRagload.deliveryDate)}
			</div>
			<form id="RagloadEntry__form" onInput={handleRagloadEntry}>
				<label>
					Vendor:
					<ComboBoxInput
						handleRagloadEntry={handleRagloadEntry}
						currentVendor={currentRagload.vendor}
					/>
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
