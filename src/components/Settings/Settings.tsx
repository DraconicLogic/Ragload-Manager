import { getLocalVendors } from "../../data";
import { useState, useEffect } from "react";

function Settings() {
	const vendors: string[] = getLocalVendors();

	return (
		<div>
			Settings
			<div id="setttings__vendors" className="settings__feature">
				Vendors
				<div>
					{vendors.map((vendor) => {
						return <div className="settings__feature__list-item">{vendor}</div>;
					})}
				</div>
			</div>
		</div>
	);
}

export default Settings;
