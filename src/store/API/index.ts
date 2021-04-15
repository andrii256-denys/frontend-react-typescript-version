import { CategoryType } from "../../types/CategoryType";
import { pepeFetch } from "./simulator";

const BASE_URL = 'http://plug.com';

export const getCheaper = async (category: CategoryType) => {
	const response = await pepeFetch(`${BASE_URL}/${category}/cheaper`);
	const data = await response.json()

	const result = {
		href: data.href,
		price: data.price,
	}

	return result;
}