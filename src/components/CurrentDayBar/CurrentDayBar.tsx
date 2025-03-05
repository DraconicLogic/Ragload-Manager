import React from "react";

function CurrentDayBar() {
	// temporary variables
	let day = "Tuesday";
	let ragloadDayWeight = "5000";
	let ragloadWeekWeight = "20000";

	return (
		<div id="current-day-bar">
			<div>
				{day}
				{" Ragload: "}
				{ragloadDayWeight}kg
			</div>
			<div>
				{"Week Ragloads: "}
				{ragloadWeekWeight}kg
			</div>
		</div>
	);
}

export default CurrentDayBar;
