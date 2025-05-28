import dayjs from "dayjs";

export function parseDate(dateString: string): string {
	return new Date(dateString).toLocaleString(); // optional if using elsewhere
}

export function formatISOString(date: string): string {
	return dayjs(date).format("HH:mm DD/MM/YYYY");
}
