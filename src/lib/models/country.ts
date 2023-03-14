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

export interface Country extends apiCountryBrief {
	alpha2Code: string;
	altSpellings: [string];
	area: number | null;
	borders: [];
	callingCodes: [string]
	capital: string;
	currencies: Currencies;
	demonym: Demonyms;
	fifa: string | null;
	flags: Flags;
	gini: number;
	iconFlag: string | null;
	latlng: [number, number];
	nativeName: string;
	numericCode: string;
	population: number;
	region: string;
	regionalBlocs: []
	subregion: string;
	timezones: [string];
	topLevelDomain: [string];

}

export interface Flags {
  svg: string;
  png: string;
}

export interface Currencies {
  currency: Currency;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: string;
  fra: string;
}
