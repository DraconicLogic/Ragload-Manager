import React, { useState } from "react";
import { Ragload } from "../../types";
import * as dayjs from "dayjs";
import * as weekOfYear from "dayjs/plugin/weekOfYear";
//@ts-ignore
import * as utils from "../../utils.ts";
// @ts-ignore
import WeekNav from "../WeekNav/WeekNav.tsx";
// @ts-ignore
import DayAccordion from "../DayAccordion/DayAccordion.tsx";
dayjs.extend(weekOfYear);

function SortedRagloads({ ragloadState }) {
	const {
		ragloads,
		// setRagloads
	} = ragloadState;

	// What happens if there are no ragloads that have been sorted?
	const processedRagloads = ragloads.filter((ragload: Ragload) => {
		return ragload.sortedDate;
	});

	// I want to organise the processed ragloads into weeks.
	const weeklyRagloads: Array<[]> = Object.values(
		processedRagloads.reduce((ragloadWeekObj, ragload) => {
			const ragloadWeekNumber = dayjs(ragload.sortedDate).week();
			if (ragloadWeekObj[ragloadWeekNumber]) {
				ragloadWeekObj[ragloadWeekNumber].push(ragload);
			} else {
				ragloadWeekObj[ragloadWeekNumber] = [ragload];
			}
			return ragloadWeekObj;
		}, {})
	);
	console.log("Weekly Ragloads: ", weeklyRagloads);
	// TODO: chnage to Object.values

	const [currentWeekIndex, setCurrentWeekIndex] = useState(
		weeklyRagloads.length - 1
	);

	const weekRagloadObject: Object = weeklyRagloads[currentWeekIndex].reduce(
		(obj: {}, ragload: Ragload) => {
			const day = utils.getDay(ragload.sortedDate);
			if (!obj[day]) {
				obj[day] = [ragload];
			} else {
				obj[day].push(ragload);
			}
			return obj;
		},
		{}
	);
	console.log("Week Ragload organised: ", weekRagloadObject);

	return (
		<div id="sorted-ragloads">
			<WeekNav
				currentWeekState={{ currentWeekIndex, setCurrentWeekIndex }}
				weeklyRagloads={weeklyRagloads}
			/>
			<DayAccordion day={"Monday"} ragloads={weekRagloadObject} />
			<DayAccordion day={"Tuesday"} ragloads={weekRagloadObject} />
			<DayAccordion day={"Wednesday"} ragloads={weekRagloadObject} />
			<DayAccordion day={"Thurday"} ragloads={weekRagloadObject} />
			<DayAccordion day={"Friday"} ragloads={weekRagloadObject} />
			{/* Conditionally render Saturday and Sunday if there are ragloads present */}
		</div>
	);
}

export default SortedRagloads;
