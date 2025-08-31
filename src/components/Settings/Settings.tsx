import { getLocalVendors, addNewVendor } from "../../data";
import { useState } from "react";

function Settings() {
	const vendors: string[] = getLocalVendors();
	const [selectedVendor, setSelectedVendor] = useState<string>("");
	const [inputVisible, setInputVisible] = useState<boolean>(false);
	// const [newVendorInput, setNewVendorInput] = useState<string>("");

	// function handleNewVendorInput(event) {
	// 	const { value } = event.target;

	// 	const previousInput = newVendorInput;
	// }

	function handleVendorSettings(event) {
		const operation = event.target.value;

		if (operation === "add") {
			setInputVisible(!inputVisible);
			addNewVendor(selectedVendor);
		}

		if (operation === "remove") {
			if (selectedVendor) {
			}
		}
	}
	return (
		<div>
			<h2>Settings</h2>

			<h3 className="settings__section-title">Vendors</h3>
			<div id="settings__vendors" className="settings__section">
				<div hidden={!inputVisible}>
					<input type="text" />
					<button value="add" onClick={handleVendorSettings}>
						Add
					</button>{" "}
				</div>
				<div className="settings__vendors-list">
					{vendors.map((vendor) => {
						const selectedStatus =
							selectedVendor === vendor
								? "settings__vendors__list-item--selected"
								: null;
						return (
							<div
								className="settings__vendors__list-item"
								id={selectedStatus}
								key={vendor}
								onClick={() => setSelectedVendor(vendor)}>
								{vendor}
							</div>
						);
					})}
				</div>
				<div className="settings__vendors-controls">
					<button
						className="settings__vendors-controls__button"
						onClick={() => setInputVisible(!inputVisible)}>
						ADD
					</button>
					<button
						className="settings__vendors-controls__button"
						value="remove"
						onClick={handleVendorSettings}>
						REMOVE
					</button>
				</div>
			</div>
		</div>
	);
}

export default Settings;
