import React from "react";

function CurrentMonthBar({ screenState }) {
	const { screen, setScreen } = screenState;

	// temporary variables
	let month = "March ";
	let year = " 2025";
	let ragloadMonthWeight = "50000";

	function switchToYearView() {
		setScreen(1);
	}

	return (
		<div id="current-month-bar">
			<div
				id="current-month-bar__switch-to-year-view"
				onClick={switchToYearView}>
				{"<"}
			</div>
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
