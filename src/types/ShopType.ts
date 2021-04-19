export type Shop = {
	id: string,
	humanName: string,
}

export type ShopExtended = Shop & {
	id: string,
	humanName: string,
	allowed: boolean,
}
