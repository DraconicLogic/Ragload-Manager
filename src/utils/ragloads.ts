import { WeekRagloads, RagloadDays, Ragload } from "../types";
import dayjs from "dayjs";

// --- Sort ragloads by earliest available date ---
export function sortWeekRagloadsByDate(weekRagloadsCollection: WeekRagloads[]) {
	const newWeekRagloadsCollection: WeekRagloads[] = [...weekRagloadsCollection];
	newWeekRagloadsCollection.sort((a, b): number => {
		const weekRagloadsDateA = Object.values(a.ragloads).find((ragloadDay) => {
			return ragloadDay && ragloadDay[0]?.sortedDate;
		});

		const weekRagloadsDateB = Object.values(b.ragloads).find((ragloadDay) => {
			return ragloadDay && ragloadDay[0]?.sortedDate;
		});

		return (
			new Date(weekRagloadsDateA?.[0]?.sortedDate || 0).getTime() -
			new Date(weekRagloadsDateB?.[0]?.sortedDate || 0).getTime()
		);
	});
	return newWeekRagloadsCollection;
}

// --- Group ragloads by year > month > day ---
export function groupRagloadsByDate(
	ragloads: Ragload[]
): Record<number, Record<string, Record<number, Ragload[]>>> {
	return ragloads.reduce((acc, ragload) => {
		const date = new Date(ragload.deliveryDate);
		const year = date.getFullYear();
		const month = date.toLocaleString("en-US", { month: "long" });
		const day = date.getDate();

		if (!acc[year]) acc[year] = {};
		if (!acc[year][month]) acc[year][month] = {};
		if (!acc[year][month][day]) acc[year][month][day] = [];

		acc[year][month][day].push(ragload);

		return acc;
	}, {} as Record<number, Record<string, Record<number, Ragload[]>>>);
}

// --- Compute week date range based on ragload days ---
export function getProcessedDateRange(ragloadDays: RagloadDays) {
	const range = { from: "", to: "" };

	const dayOffsets = {
		monday: 0,
		tuesday: 1,
		wednesday: 2,
		thursday: 3,
		friday: 4,
		saturday: 5,
		sunday: 6,
	};

	for (const [day, offset] of Object.entries(dayOffsets)) {
		const ragloads = ragloadDays[day as keyof RagloadDays];
		if (ragloads && ragloads.length > 0) {
			const monday = dayjs(ragloads[0].sortedDate).subtract(offset, "day");
			const sunday = monday.add(6, "day");
			range.from = monday.format("DD/MM");
			range.to = sunday.format("DD/MM");
			break;
		}
	}

	return range;
}
