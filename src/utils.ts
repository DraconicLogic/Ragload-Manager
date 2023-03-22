import weekOfYear from "dayjs/plugin/weekOfYear";
import { WeekRagloads } from "./types";
const dayjs = require("dayjs");
dayjs.extend(weekOfYear);

export function parseDate(dateString: string) {
	return dateString.toLocaleString();
}

export function getDay(date: string): string {
	const dateObj = new Date(date);
	const day: number = dateObj.getDay();
	const dayObject: Object = {
		0: "sunday",
		1: "monday",
		2: "tuesday",
		3: "wednesday",
		4: "thursday",
		5: "friday",
		6: "saturday",
	};
	return dayObject[day];
}

export function formatISOString(date: string): string {
	return dayjs(date).format("HH:mm DD/MM/YYYY");
}

export function getWeekNumber(date: string): number {
	return dayjs(date).week();
}

export function sortWeekRagloadsByDate(weekRagloadsCollection: WeekRagloads[]) {
	const newWeekRagloadsCollection: WeekRagloads[] = [...weekRagloadsCollection];
	newWeekRagloadsCollection.sort((a, b): any => {
		const weekRagloadsDateA = Object.values(a.ragloads).find((ragloadDay) => {
			if (ragloadDay) {
				return ragloadDay[0].sortedDate;
			}
		});

		const weekRagloadsDateB = Object.values(b.ragloads).find((ragloadDay) => {
			if (ragloadDay) {
				return ragloadDay[0].sortedDate;
			}
		});

		if (weekRagloadsDateA < weekRagloadsDateB) {
			return +1;
		} else {
			return -1;
		}
	});
	return newWeekRagloadsCollection;
}

export function getProcessedDateRange(weekRagload: WeekRagloads) {
	const { ragloads } = weekRagload;
	const range = {
		from: "",
		to: "",
	};
	if (ragloads.monday && ragloads.friday) {
		range.from = ragloads.monday[0].sortedDate;
		range.to = ragloads.friday[0].sortedDate;
	} else if (ragloads.tuesday) {
		const monday = dayjs(ragloads.tuesday[0].sortedDate)
			.subtract(1, "day")
			.toString();
	}
}
