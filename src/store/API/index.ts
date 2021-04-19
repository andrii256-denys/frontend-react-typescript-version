import { CategoryType } from "../../types/CategoryType";
import { cheaperFetch, goodsFetch } from "./simulator";

const BASE_URL = 'http://plug.com';

export const getCheaper = async (category: CategoryType) => {
	const response = await cheaperFetch(`${BASE_URL}/${category}/cheaper`);
	const data = await response.json()

	const result = {
		href: data.href,
		price: data.price,
	}

	return result;
}

export const getGoods = async (
	minPrice: number,
	maxPrice: number,
	allowedShops: Array<string | number>, // array of id
	sortOrder: 'up' | 'down',
) => {
	const response = await goodsFetch(`${BASE_URL}/goods?minprice=${minPrice}&maxprice=${maxPrice}etsetra, I'm lazy to write next`);
	const data = await response.json();

	return data;
}
