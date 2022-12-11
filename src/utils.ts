export function parseDate(dateString: string) {
	return dateString.toLocaleString();
}

export function getDay(date: string): string {
	const dateObj = new Date(date);
	const day: number = dateObj.getDay();
	const dayObject: Object = {
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	};
	return dayObject[day];
}
