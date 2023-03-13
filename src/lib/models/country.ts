export interface apiCountryBrief {
	alpha3Code: string;
	flag: string;
	name: string;
	independent: boolean;
}

export interface CountryBrief {
	id: string;
	image: string;
	name: string;
}

export interface Country extends CountryBrief {
	capital: string;
	area: number | null;
	fifa: string | null;
	population: string;
	iconFlag: string | null;
	independent: boolean;
}
