import { getLocalVendors } from "../../data";
import { useState, useEffect } from "react";

function Settings() {
	const vendors: string[] = getLocalVendors();
	const [selectedVendor, setSelectedVendor] = useState<string>("");

	return (
		<div>
			<h2>Settings</h2>

			<h3>Vendors</h3>
			<div id="settings__vendors" className="settings__feature">
				<div>
					{vendors.map((vendor) => {
						const selectedStatus =
							selectedVendor === vendor
								? "settings__vendors__list-item--selected"
								: "settings__vendors__list-item";
						return (
							<div className={selectedStatus} key={vendor}>
								{vendor}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Settings;
