import { getLocalVendors } from "../../data";
import { useState, useEffect } from "react";

function Settings() {
	const vendors: string[] = getLocalVendors();
	const [selectedVendor, setSelectedVendor] = useState<string>("");

	return (
		<div>
			<h2>Settings</h2>

			<h3 className="settings__section-title">Vendors</h3>
			<div id="settings__vendors" className="settings__section">
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
					<button className="settings__vendors-controls__button">EDIT</button>
					<button className="settings__vendors-controls__button">ADD</button>
					<button className="settings__vendors-controls__button">REMOVE</button>
				</div>
			</div>
		</div>
	);
}

export default Settings;
