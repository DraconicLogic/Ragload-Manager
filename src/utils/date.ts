import weekOfYear from "dayjs/plugin/weekOfYear";
import dayjs from "dayjs";
dayjs.extend(weekOfYear);

export function isSameDay(date1: Date, date2: Date): boolean {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

export function isSameMonth(date1: Date, date2: Date): boolean {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth()
	);
}

export function isDateInWeek(date: Date, weekStart: Date): boolean {
	const start = new Date(weekStart);
	const end = new Date(weekStart);
	end.setDate(start.getDate() + 6);
	return date >= start && date <= end;
}

export function getWeekStart(date: Date): Date {
	const d = new Date(date);
	d.setDate(d.getDate() - d.getDay());
	d.setHours(0, 0, 0, 0);
	return d;
}

export function getWeekNumber(date: string): number {
	return dayjs(date).week();
}

export function getDay(date: string): string {
	const dateObj = new Date(date);
	const day = dateObj.getDay();
	return [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday",
	][day];
}
