import React from "react";

function WeekNav({ currentWeekState, weeklyRagloads }) {
	const { currentWeekIndex, setCurrentWeekIndex } = currentWeekState;

	function setWeekNavText(weekIndex, weekRagloads) {
		/* TODO: this needs extending. I want it to return 
			"Last week", "2 Weeks ago", "3 Weeks ago" etc...
		*/

		if (weekRagloads.length - 1 === weekIndex) {
			return "This week";
		}
	}

	function handleLeftClick(event) {
		console.log("Event: ", event);
		if (currentWeekIndex !== 0) {
			setCurrentWeekIndex(currentWeekIndex - 1);
		}
	}

	function handleRightClick(event) {
		console.log("Event: ", event);
		if (currentWeekIndex !== weeklyRagloads.length - 1) {
			setCurrentWeekIndex(currentWeekIndex + 1);
		}
	}

	return (
		<div id="sorted-ragloads__week-nav">
			<div
				className="sorted-ragloads__week-nav__navigator"
				onClick={handleLeftClick}>
				←
			</div>
			<div>{setWeekNavText(currentWeekIndex, weeklyRagloads)} </div>
			<div
				className="sorted-ragloads__week-nav__navigator"
				onClick={handleRightClick}>
				→
			</div>
		</div>
	);
}

export default WeekNav;
