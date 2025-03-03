import weekOfYear from "dayjs/plugin/weekOfYear";
import { WeekRagloads, RagloadDays } from "./types";
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
			// Do I need to check for ragloadDay?
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

// Refactor this ugly shit ASAP
export function getProcessedDateRange(ragloadDays: RagloadDays) {
	const range = {
		from: "",
		to: "",
	};
	if (ragloadDays.monday && ragloadDays.sunday) {
		range.from = ragloadDays.monday[0].sortedDate;
		range.to = ragloadDays.sunday[0].sortedDate;
	} else if (ragloadDays.tuesday) {
		const monday = dayjs(ragloadDays.tuesday[0].sortedDate)
			.subtract(1, "day")
			.toString();
		const sunday = dayjs(monday).add(6, "day").toString();
		range.from = monday;
		range.to = sunday;
	} else if (ragloadDays.wednesday) {
		const monday = dayjs(ragloadDays.wednesday[0].sortedDate)
			.subtract(2, "day")
			.toString();
		const sunday = dayjs(monday).add(6, "day").toString();
		range.from = monday;
		range.to = sunday;
	} else if (ragloadDays.thursday) {
		const monday = dayjs(ragloadDays.thursday[0].sortedDate)
			.subtract(3, "day")
			.toString();
		const sunday = dayjs(monday).add(6, "day").toString();
		range.from = monday;
		range.to = sunday;
	} else if (ragloadDays.friday) {
		const monday = dayjs(ragloadDays.friday[0].sortedDate)
			.subtract(4, "day")
			.toString();
		const sunday = dayjs(monday).add(6, "day").toString();
		range.from = monday;
		range.to = sunday;
	} else if (ragloadDays.saturday) {
		const monday = dayjs(ragloadDays.saturday[0].sortedDate)
			.subtract(5, "day")
			.toString();
		const sunday = dayjs(monday).add(6, "day").toString();
		range.from = monday;
		range.to = sunday;
	} else if (ragloadDays.sunday) {
		const monday = dayjs(ragloadDays.sunday[0].sortedDate)
			.subtract(6, "day")
			.toString();

		range.from = monday;
		range.to = ragloadDays.sunday[0].sortedDate;
	} else if (ragloadDays.monday) {
		const sunday = dayjs(ragloadDays.monday[0].sortedDate)
			.add(6, "day")
			.toString();
		range.from = ragloadDays.monday[0].sortedDate;
		range.to = sunday;
	}

	range.from = dayjs(range.from).format("DD/MM");
	range.to = dayjs(range.to).format("DD/MM");
	return range;
}

// export function getProcessedWeekRagloadYear(ragloadDays: RagloadDays):string {

// 	const yearsObject = Object.values(ragloadDays)
// 		.filter((ragloads) => ragloads)
// 		.reduce((years, ragloads) => {
// 			const ragloadYear = dayjs(ragloads.sortedDate).year()
// 			if(!years[ragloadYear]) {
// 				years[ragloadYear] = ragloadYear
// 			}
// 			return years
// 		}, {})
// 	const yearString =
// 	return dayjs(date).year();
// }
