import { Ragload } from "../../types";
import dayjs from "dayjs";

export function createSortedRagloadsObject(ragloads: Ragload[]) {
	const ragloadObject = ragloads.reduce((obj, ragload) => {
		const ragloadDate = ragload.deliveryDate;
		const year = dayjs(ragloadDate).year();
		const month = dayjs(ragloadDate).month();
		const day = dayjs(ragloadDate).date();

		if (!obj[year]) obj[year] = month;
		return obj;
	}, {});
	return ragloadObject;
}
