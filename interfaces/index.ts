export interface Lot {
	lotNumber: number;
	title: string;
	value: number;
}

export interface Auction {
	date: string;
	id: string;
	lots: [Lot];
	title: string;
}
