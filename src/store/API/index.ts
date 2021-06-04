import { CategoryType } from "../../types/CategoryType";
import { goodsFetch } from './simulators/goodsFetch';
import { chartFetch } from './simulators/chartFetch';
import { CheaperType } from "../../types/goods";
import { StatisticsItem } from '../../types/statistics';

const BASE_URL = 'http://plug.com';

export const getCheaper = async (category: CategoryType) => {

	const response = await fetch(`https://grocceries.herokuapp.com/${category}/?filter=cheaper&limit=1`);

	const raw = (await response.json())[0];

	const data: CheaperType = {
		isLoading: false,
		isError: false,
		href: raw.link,
		price: Math.round((raw.pricePerKg && raw.pricePerKg) || NaN),
	}

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
	const response = await fetch(`https://grocceries.herokuapp.com/history/${category}`);
	const raw: Array<{ date: string, price: number }> = await response.json();

	const data: StatisticsItem[] = raw
		.map(item => ({
			date: new Date(item.date),
			price: item.price,
		}))
		.slice(0, 31)
		.reverse()

	return data;
}
