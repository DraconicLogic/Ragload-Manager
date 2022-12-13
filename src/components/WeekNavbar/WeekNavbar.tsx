import React from "react";

function WeekNavbar({ currentWeekState, weekRagloadsCollection }) {
	const { currentWeekIndex, setCurrentWeekIndex } = currentWeekState;

	function setWeekNavbarText(weekIndex, weekRagloads) {
		const lastEntry = weekRagloads.length - 1;
		const distanceFromCurrentWeek = lastEntry - weekIndex;
		if (lastEntry === weekIndex) {
			return "This week";
		}
		if (distanceFromCurrentWeek === 1) {
			return "Last Week";
		}
		if (distanceFromCurrentWeek > 1) {
			return `${distanceFromCurrentWeek} Weeks ago`;
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
		if (currentWeekIndex !== weekRagloadsCollection.length - 1) {
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
			<div>{setWeekNavbarText(currentWeekIndex, weekRagloadsCollection)} </div>
			<div
				className="sorted-ragloads__week-nav__navigator"
				onClick={handleRightClick}>
				→
			</div>
		</div>
	);
}

export default WeekNavbar;
