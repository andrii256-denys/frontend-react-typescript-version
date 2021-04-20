import { CategoryType } from "../../types/CategoryType";
import { cheaperFetch } from "./simulators/cheaperFetch";
import { goodsFetch } from './simulators/goodsFetch';
import { chartFetch } from './simulators/chartFetch';

const BASE_URL = 'http://plug.com';

export const getCheaper = async (category: CategoryType) => {
	const response = await cheaperFetch(`${BASE_URL}/${category}/cheaper`);
	const data = await response.json()

	return data;
}

export const getGoods = async (
	minPrice: number,
	maxPrice: number,
	allowedShops: Array<string | number>, // array of id
	sortOrder: 'up' | 'down',
) => {
	const response = await goodsFetch(`${BASE_URL}/goods?minprice=${minPrice}&maxprice=${maxPrice}${allowedShops}${sortOrder}etsetra, I'm lazy to write next`);
	const data = await response.json();

	return data;
}

export const getChartData = async (category: CategoryType) => {
	const response = await chartFetch(`${BASE_URL}/chart?cat=${category}`);
	const data = await response.json();

	return data;
}
