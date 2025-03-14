// TODO: I Want this screen when closed to return to the previous screen.

import * as React from "react";
import { Ragload } from "../../types";

function RagloadEntry({ handlers }) {
	const { handleAddRagload, handleModalVisibility } = handlers;
	const [currentRagload, setCurrentRagload] = React.useState<Ragload>({
		vendor: "",
		weight: 0,
		ticketNumber: "",
		deliveryDate: new Date().toISOString(),
	});

	function handleRagloadEntry(event) {
		const { name, value } = event.target;

		const newRagload: Ragload = {
			...currentRagload,
		};

		console.log(currentRagload);

		newRagload[name] = value;
		setCurrentRagload(newRagload);
	}

	function handleSubmit(event) {
		event.preventDefault();
		currentRagload.weight = Number(currentRagload.weight);

		console.log(
			"Current Ragload Weight: ",
			currentRagload.weight,
			typeof currentRagload.weight
		);
		handleAddRagload(currentRagload);
		handleModalVisibility();
	}

	return (
		<div id="RagloadEntry">
			<h1>Ragload Entry</h1>
			<div id="RagloadEntry__hideArrow">⌄</div>
			<form id="RagloadEntry__form" onInput={handleRagloadEntry}>
				<label>
					Vendor :
					{/* TODO: create custom input element that starts as text field and matches results in a select field */}
					<select name="vendor" className="RagloadEntry__form__field">
						<option></option>
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
						type="text"></input>
				</label>
				<br />
				<label>
					Weight(kg) :
					<input
						className="RagloadEntry__form__field"
						name="weight"
						type="number"></input>
				</label>
			</form>
			<br />
			<button onClick={handleSubmit}>Confirm</button>
		</div>
	);
}

export default RagloadEntry;
