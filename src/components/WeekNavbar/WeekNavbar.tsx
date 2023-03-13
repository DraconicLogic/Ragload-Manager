import React from "react";
import { Ragload, WeekRagloads } from "../../types";

function setWeekNavbarText(weekIndex, weekRagloads) {
	console.log("weekIndex: ", weekIndex);
	console.log("weekRagloads: ", weekRagloads);
	// TODO: Needs more detail. If we skip a week I don't want week before(latest entry) to be labeled "this week."
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

function displayDateRange(weekRagloads: WeekRagloads) {
	// const weekRagloadsArray = Object.values(weekRagloads);
	// console.log("Week Ragload Array", weekRagloadsArray);
	// const rangeObject = weekRagloadsArray.reduce(
	// 	(rangeObj, dayRagloads: Array<Ragload>) => {
	// 		const dayRagsSorted = dayRagloads[0].sortedDate;
	// 		if (!rangeObj.lowestDate) {
	// 			rangeObj.lowestDate = dayRagsSorted;
	// 		} else if (rangeObj.lowestDate > dayRagsSorted) {
	// 			rangeObj.lowestDate = dayRagsSorted;
	// 		}
	// 		return rangeObj;
	// 	},
	// 	{}
	// );
	// const rangeObject = {
	// 	lowestDate<any>: null,
	// 	highestDate: "",
	// }
	// weekRagloadsArray.forEach((dayRagloads: Ragload[]) => {
	//
	// })
}

function WeekNavbar({ currentWeekState, weekRagloadsCollection }) {
	const { currentWeekIndex, setCurrentWeekIndex } = currentWeekState;

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
			<div className="sorted-ragloads__week-nav__text">
				<div>{setWeekNavbarText(currentWeekIndex, weekRagloadsCollection)}</div>
				<div>
					{/* {displayDateRange(weekRagloadsCollection[currentWeekIndex])} */}
					displayDateRange
				</div>
			</div>
			<div
				className="sorted-ragloads__week-nav__navigator"
				onClick={handleRightClick}>
				→
			</div>
		</div>
	);
}

export default WeekNavbar;
