import { useState } from "react";
import { Ragload, WeekRagloads } from "../../types";
//@ts-ignore
import * as utils from "../../utils.ts";
// @ts-ignore
import WeekNavbar from "../WeekNavbar/WeekNavbar.tsx";
// @ts-ignore
import DayAccordion from "../DayAccordion/DayAccordion.tsx";
import { getProcessedDateRange, getYear } from "../../utils";

function formatRagloads(processedRagloads: Ragload[]): WeekRagloads[] {
	const weekRagloadObj = processedRagloads.reduce((ragloadWeekObj, ragload) => {
		const ragloadWeekNumber: number = utils.getWeekNumber(ragload.sortedDate);
		if (ragloadWeekObj[ragloadWeekNumber]) {
			ragloadWeekObj[ragloadWeekNumber].push(ragload);
		} else {
			ragloadWeekObj[ragloadWeekNumber] = [ragload];
		}
		return ragloadWeekObj;
	}, {});
	console.log("Ragload Week Object: ", weekRagloadObj);

	const weekRagloadTuple = Object.entries(weekRagloadObj);
	console.log("Ragload Week Tuple: ", weekRagloadTuple);

	const formattedWeekRagloads: WeekRagloads[] = weekRagloadTuple.reduce(
		// Try to assign type to ragloads param
		(weeks: WeekRagloads[], ragloads: any) => {
			const newWeek: WeekRagloads = {
				weekNumber: Number(ragloads[0]),
				ragloads: {
					monday: null,
					tuesday: null,
					wednesday: null,
					thursday: null,
					friday: null,
					saturday: null,
					sunday: null,
				},
				range: null,
				year: null,
			};
			ragloads[1].forEach((ragload: Ragload) => {
				const day = utils.getDay(ragload.sortedDate);
				if (!newWeek.ragloads[day]) {
					newWeek.ragloads[day] = [ragload];
				} else {
					newWeek.ragloads[day].push(ragload);
				}
			});
			weeks.push(newWeek);
			return weeks;
		},
		[]
	);
	formattedWeekRagloads.forEach((weekRagload: WeekRagloads) => {
		weekRagload.range = getProcessedDateRange(weekRagload.ragloads);

		// TODO: When getProcessedDateRange() has be refactored extract logic that checks ragloads for entries. Use it when implementing the get year
		// weekRagload.year = getYear(
		// 	Object.values(weekRagload.ragloads).find((array) => {
		// 		if (array[0]) {
		// 			return array[0].sortedDate;
		// 		}
		// 	})
		// );
	});

	return utils.sortWeekRagloadsByDate(formattedWeekRagloads);
}

function renderDayAccordions(weekRagloads: WeekRagloads): DayAccordion {
	const days = Object.entries(weekRagloads.ragloads);
	return days.map((dayRagloads) => {
		if (dayRagloads[1]) {
			return <DayAccordion day={dayRagloads[0]} ragloads={dayRagloads[1]} />;
		} else {
			return null;
		}
	});
}

function SortedRagloads({ ragloadState }) {
	const { ragloads } = ragloadState;

	const processedRagloads: Array<Ragload> = ragloads.filter(
		(ragload: Ragload) => {
			return ragload.sortedDate;
		}
	);
	const isRagloadsEmpty: boolean = !(processedRagloads.length > 0);

	// Need to organize weekRagloads in true historical order.
	const weekRagloadsCollection: WeekRagloads[] =
		formatRagloads(processedRagloads);
	console.log("Formatted Ragloads: ", weekRagloadsCollection);
	const [currentWeekIndex, setCurrentWeekIndex] = useState<number>(
		weekRagloadsCollection.length - 1
	);
	const currentWeek: number = utils.getWeekNumber(new Date().toISOString());
	console.log("currentWeek: ", currentWeek);

	return (
		<div id="sorted-ragloads">
			<WeekNavbar
				currentWeek={currentWeek}
				currentWeekState={{ currentWeekIndex, setCurrentWeekIndex }}
				weekRagloadsCollection={weekRagloadsCollection}
			/>
			{/* Element here to display date range and total weight for week */}

			{isRagloadsEmpty ? (
				<h2>Please add Ragload</h2>
			) : (
				renderDayAccordions(weekRagloadsCollection[currentWeekIndex])
			)}
		</div>
	);
}

export default SortedRagloads;
