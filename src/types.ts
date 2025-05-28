export interface Ragload {
	vendor: string;
	ticketNumber: string;
	weight: number;
	deliveryDate: string;
	sortedDate?: string | null;
	sortingStartDate?: string | null;
	rating?: number | null;
}

export interface WeekRagloads {
	weekNumber: number;
	ragloads: RagloadDays;
	range?: {
		from: string;
		to: string;
	} | null;
	year?: string;
}

export interface RagloadDays {
	monday: Array<Ragload> | null;
	tuesday: Array<Ragload> | null;
	wednesday: Array<Ragload> | null;
	thursday: Array<Ragload> | null;
	friday: Array<Ragload> | null;
	saturday: Array<Ragload> | null;
	sunday: Array<Ragload> | null;
}
