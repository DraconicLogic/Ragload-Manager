export interface Ragload {
	vendor: string;
	ticketNumber: string;
	weight: number;
	deliveryDate: string;
	sortedDate?: string | null;
	sortingStartDate?: string | null;
}

export interface WeekRagloads {
	weekNumber: number;
	ragloads: {
		monday: Array<Ragload> | null;
		tuesday: Array<Ragload> | null;
		wednesday: Array<Ragload> | null;
		thursday: Array<Ragload> | null;
		friday: Array<Ragload> | null;
		satuday: Array<Ragload> | null;
		sunday: Array<Ragload> | null;
	};
}
