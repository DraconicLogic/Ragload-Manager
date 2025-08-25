import { TextField, Autocomplete } from "@mui/material";
import { getLocalVendors } from "../../data";
import { useState, useEffect } from "react";

function ComboBoxInput({ handleRagloadEntry, currentVendor }) {
	const [vendors, setVendors] = useState<string[]>([]);
	console.log("Current Vendor: ", currentVendor);
	useEffect(() => {
		(function intiVendorList() {
			const vendorList = getLocalVendors();
			setVendors(vendorList);
		})();
	}, []);

	function handleTextfield(event) {
		const vendorIsSelected = event.type === "click";
		const chosenVendor = event.target.textContent;

		const inputObject = {
			target: {
				name: "vendor",
				value: chosenVendor,
			},
		};
		if (vendorIsSelected) {
			handleRagloadEntry(inputObject);
		}
	}

	return (
		<Autocomplete
			options={vendors}
			autoComplete
			autoSelect
			renderInput={(params) => (
				<TextField
					name="vendor"
					{...params}
					placeholder={currentVendor ? currentVendor : null}
					size="small"
				/>
			)}
			onInputChange={handleTextfield}
		/>
	);
}

export default ComboBoxInput;
