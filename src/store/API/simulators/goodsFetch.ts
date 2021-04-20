import { GoodType } from "../../../types/goods";

type DataType = GoodType[];

type ResponseType = {
	json: () => Promise<DataType>,
}
type ConclusionPromiseType = Promise<DataType>;

/*
	kinda fetch() return output from wrapDataInPromise()
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
		}, 500);
	});

	return responsePromise;
}

export const goodsFetch = (url: string) => {
	if (!(Date.now() % 50)) {
		throw new Error('shit happens')
	} else {
		const data = [
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
		];

		return wrapDataInPromise(data)
	}
}