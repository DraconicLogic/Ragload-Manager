import React, { useState } from "react";
import { Ragload, WeekRagloads } from "../../types";
import * as dayjs from "dayjs";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
//@ts-ignore
import * as utils from "../../utils.ts";
// @ts-ignore
import WeekNavbar from "../WeekNavbar/WeekNavbar.tsx";
// @ts-ignore
import DayAccordion from "../DayAccordion/DayAccordion.tsx";
dayjs.extend(weekOfYear);

function formatRagloads(processedRagloads) {
	const weekRagloadObj = processedRagloads.reduce((ragloadWeekObj, ragload) => {
		const ragloadWeekNumber = dayjs(ragload.sortedDate).week();
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

	const formattedWeekRagloads = weekRagloadTuple.reduce(
		(weeks: any, ragloads: any) => {
			const newWeek: WeekRagloads = {
				weekNumber: Number(ragloads[0]),
				ragloads: {
					monday: null,
					tuesday: null,
					wednesday: null,
					thursday: null,
					friday: null,
					satuday: null,
					sunday: null,
				},
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
	console.log("Formatted Ragloads: ", formattedWeekRagloads);
	return formattedWeekRagloads;
}

function renderDayAccordions(weekRagloads) {
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
	const {
		ragloads,
		// setRagloads
	} = ragloadState;

	// What happens if there are no ragloads that have been sorted?
	const processedRagloads: Array<Ragload> = ragloads.filter(
		(ragload: Ragload) => {
			return ragload.sortedDate;
		}
	);
	const weekRagloadsCollection = formatRagloads(processedRagloads);
	const [currentWeekIndex, setCurrentWeekIndex] = useState(
		weekRagloadsCollection.length - 1
	);

	return (
		<div id="sorted-ragloads">
			<WeekNavbar
				currentWeekState={{ currentWeekIndex, setCurrentWeekIndex }}
				weekRagloadsCollection={weekRagloadsCollection}
			/>
			{renderDayAccordions(weekRagloadsCollection[currentWeekIndex])}
		</div>
	);
}

export default SortedRagloads;
