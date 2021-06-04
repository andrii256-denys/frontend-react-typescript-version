import { CategoryType } from "../../types/CategoryType";
import { goodsFetch } from './simulators/goodsFetch';
import { chartFetch } from './simulators/chartFetch';
import { CheaperType, GoodType } from "../../types/goods";
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
	restrictedShops: Array<string | number>, // array of id
	sortOrder: 'up' | 'down',
	category: CategoryType,
) => {
	const params = new URLSearchParams();

	params.append('price', minPrice + '-' + maxPrice);
	params.append('shops', restrictedShops.join(','));
	params.append('limit', '150');
	params.append('filter', `${(sortOrder === 'up' && 'cheaper') || (sortOrder === 'down' && 'expensive')}`);

	const url = 'https://grocceries.herokuapp.com/' + category + '/?' + params.toString();

	const response = await fetch(url);
	const raw: Array<{
		_id: number | string,
		title: string,
		link: string,
		pictureLink: string,
		shopName: string,
		weight: number,
		pricePerKg: number,
	}> = await response.json();

	const data: GoodType[] = raw.map(rawGood => ({
		id: rawGood._id,
		title: rawGood.title,
		link: rawGood.link,
		pictureLink: rawGood.pictureLink,
		pricePerKg: Math.round(rawGood.pricePerKg),
		shopName: rawGood.shopName,
		weight: rawGood.weight,
	}));

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
