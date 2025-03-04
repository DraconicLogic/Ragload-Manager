import React from "react";

function CurrentMonthBar() {
	// temporary variables
	let month = "March ";
	let year = " 2025";
	let ragloadMonthWeight = "50000";

	return (
		<div id="current-month-bar">
			<div>
				{month}
				{year}
			</div>
			<div>
				{"Ragloads: "}
				{ragloadMonthWeight} kg{" "}
			</div>
		</div>
	);
}

export default CurrentMonthBar;
