export interface Ragload {
	vendor: string;
	ticketNumber: string;
	weight: number;
	deliveryDate: string;
	sortedDate?: string | null;
	sortingStartDate?: string | null;
}
