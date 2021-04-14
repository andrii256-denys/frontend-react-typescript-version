export type CategoryType = 'corn' | 'buckwheat' | 'rice' | 'barley' | 'wheat';

export type NominativeCaseType = {
	[key in CategoryType]: string;
}
