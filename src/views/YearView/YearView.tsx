import React from "react";

function YearView({ ragloadState, screenState }) {
	// Temporary function. Move to CurrentYearBar.tsx when it's been created
	function switchToMonthView() {
		screenState.setScreen(0);
	}

	return (
		<div id="year-view">
			<div id="year-view__current-year-bar">
				Current Year Bar <span onClick={switchToMonthView}>{">"}</span>
			</div>
			<div id="year-view__month-cards">Month Cards</div>
			<div id="year-view__tool-bar">Tool Bar</div>
		</div>
	);
}

export default YearView;
