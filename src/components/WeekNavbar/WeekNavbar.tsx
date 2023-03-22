import React from "react";
import { Ragload, WeekRagloads } from "../../types";

function setWeekNavbarText({
	currentWeek,
	currentWeekIndex,
	weekRagloadsCollection,
}) {
	console.log("currentWeek: ", currentWeek);
	console.log("weekIndex: ", currentWeekIndex);
	console.log("weekRagloads: ", weekRagloadsCollection);
	// TODO: Needs more detail. If we skip a week I don't want week before(latest entry) to be labeled "this week."

	const lastEntry = weekRagloadsCollection.length - 1;
	const currentRagloadsWeekNumber =
		weekRagloadsCollection[currentWeekIndex].weekNumber;
	// week ragload collection is in date order. if the current week is larger than week number of WeekRagloads just subtract from current week to get weeks past.
	if (currentWeek > currentRagloadsWeekNumber) {
		if (currentRagloadsWeekNumber === currentWeek) {
			return "This week";
		}
		if (currentWeek - currentRagloadsWeekNumber === 1) {
			return "Last Week";
		}
		if (currentWeek - currentRagloadsWeekNumber > 1) {
			return `${currentWeek - currentRagloadsWeekNumber} Weeks ago`;
		}
	}
	if (currentWeek < currentRagloadsWeekNumber) {
		return `Last Year`;
	}

	// if week number is larger then just say last year in month gathered(processed)
	// const distanceFromCurrentWeek = lastEntry - currentWeekIndex;

	// if (lastEntry === currentWeekIndex) {
	// 	return "This week";
	// }
	// if (distanceFromCurrentWeek === 1) {
	// 	return "Last Week";
	// }
	// if (distanceFromCurrentWeek > 1) {
	// 	return `${distanceFromCurrentWeek} Weeks ago`;
	// }
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

function WeekNavbar({ currentWeek, currentWeekState, weekRagloadsCollection }) {
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
				<div>
					{setWeekNavbarText({
						currentWeek,
						currentWeekIndex,
						weekRagloadsCollection,
					})}
				</div>
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
