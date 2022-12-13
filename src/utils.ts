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
