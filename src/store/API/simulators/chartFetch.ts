import { StatisticsItem } from "../../../types/statistics";

type DataType = StatisticsItem[];

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
		}, 1000);
	});

	return responsePromise;
}

export const chartFetch = (url: string) => {
	if (!(Date.now() % 50) || !url.includes('chart')) {
		throw new Error('chart shit happens')
	} else {
		const data:DataType = [
			{
				date: new Date('2020-03-20T12:18:04.877Z'),
				price: 23,
			},
			{
				date: new Date('2020-04-20T12:18:04.877Z'),
				price: 22,
			},
			{
				date: new Date('2020-05-20T12:18:04.877Z'),
				price: 24,
			},
			{
				date: new Date('2020-06-20T12:18:04.877Z'),
				price: 25,
			},
			{
				date: new Date('2020-07-20T12:18:04.877Z'),
				price: 27,
			},
			{
				date: new Date('2020-08-20T12:18:04.877Z'),
				price: 29,
			},
			{
				date: new Date('2020-09-20T12:18:04.877Z'),
				price: 35,
			},
			{
				date: new Date('2020-10-20T12:18:04.877Z'),
				price: 42,
			},
			{
				date: new Date('2020-11-20T12:18:04.877Z'),
				price: 43,
			},
			{
				date: new Date('2020-12-20T12:18:04.877Z'),
				price: 37,
			},
			{
				date: new Date('2021-01-20T12:18:04.877Z'),
				price: 39,
			},
			{
				date: new Date('2021-02-20T12:18:04.877Z'),
				price: 45,
			},
			{
				date: new Date('2021-03-20T12:18:04.877Z'),
				price: 43,
			},
			{
				date: new Date('2021-04-20T12:18:04.877Z'),
				price: 42,
			},
		];

		return wrapDataInPromise(data)
	}
}
