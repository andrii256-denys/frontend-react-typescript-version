import { GoodType } from "../../types/goods";

interface CheaperOutputType {
	href: string,
	price: number,
}

/* Denys, start ignore code from here */
type DataType = CheaperOutputType;

type ResponseType = {
	json: () => Promise<DataType>,
}
type ConclusionPromiseType = Promise<DataType>;

/*
	pepeFetch() return output from wrapDataInPromise()
	wrapDataInPromise() returns Promise responsePromise.
	resolve() of Promise responsePromise return object response.
	object response contains method .json()
	call of method .json() returns Promise conclusionPromise
	resolve() of conclusionPromise returns real data.
	* type of `data` should be specified to further stuff can read it.
	*/
const wrapDataInPromise = (data: DataType): Promise<ResponseType> => {
	const responsePromise: Promise<ResponseType> = new Promise(resolve => {
		const jsonMethod = (): ConclusionPromiseType => {
			const conclusionPromise: ConclusionPromiseType = new Promise(resolve => {
				resolve(data);
			})

			return conclusionPromise;
		}

		setTimeout(() => {  // timeout for emulating server response delay
			resolve({
				json: jsonMethod,
			});
		}, 350);
	});

	return responsePromise;
}

/* Denys, stop ignore code here */

export const cheaperFetch = (url: string) => {
	let data: CheaperOutputType | GoodType[];

	switch (url) {
		case 'http://plug.com/corn/cheaper':
			data = {
				href: 'https://www.google.com/search?q=corn',
				price: 10,
			}
			break;
		case 'http://plug.com/buckwheat/cheaper':
			data = {
				href: 'https://www.google.com/search?q=buckwheat',
				price: 20,
			}
			break;
		case 'http://plug.com/rice/cheaper':
			data = {
				href: 'https://www.google.com/search?q=rice',
				price: 30,
			}
			break;
		case 'http://plug.com/barley/cheaper':
			data = {
				href: 'https://www.google.com/search?q=barley',
				price: 40,
			}
			break;
		case 'http://plug.com/wheat/cheaper':
			data = {
				href: 'https://www.google.com/search?q=wheat',
				price: 50,
			}
			break;

		default: throw new Error('INCORRECT URL (server redirects you to the ass)')
	}

	return wrapDataInPromise(data);
}

export const goodsFetch = (url: string) => {
	type DataType = GoodType[];

	type ResponseType = {
		json: () => Promise<DataType>,
	}
	type ConclusionPromiseType = Promise<DataType>;

	const wrapDataInPromise = (data: DataType): Promise<ResponseType> => {
		const responsePromise: Promise<ResponseType> = new Promise(resolve => {
			const jsonMethod = (): ConclusionPromiseType => {
				const conclusionPromise: ConclusionPromiseType = new Promise(resolve => {
					resolve(data);
				})

				return conclusionPromise;
			}

			setTimeout(() => {  // timeout for emulating server response delay
				resolve({
					json: jsonMethod,
				});
			}, 500);
		});

		return responsePromise;
	}

	if (url === 'want.error' || !(Date.now() % 5)) {
		throw new Error('shit happens')
	} else {
		return wrapDataInPromise([
			{
				id: 1,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 50,
				shopName: 'Таврія В',
				weight: 800,
				link: 'https://www.google.com/',
				title: 'Колосок'
			},
			{
				id: 2,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 25,
				shopName: 'Таврія В',
				weight: 800,
				link: 'https://www.google.com/',
				title: 'Сопілка'
			},
			{
				id: 3,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 20,
				shopName: 'Сільпо',
				weight: 800,
				link: 'https://www.google.com/',
				title: 'Бджолина'
			},
			{
				id: 4,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 100,
				shopName: 'Таврія В',
				weight: 800,
				link: 'https://www.google.com/',
				title: 'Весняна'
			},
			{
				id: 5,
				pictureLink: 'http://images.huffingtonpost.com/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg',
				pricePerKg: 46,
				shopName: 'АТБ',
				weight: 800,
				link: 'https://www.google.com/',
				title: 'Маруся'
			},
		])
	}
}