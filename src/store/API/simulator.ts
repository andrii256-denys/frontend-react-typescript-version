interface CheaperOutputType {
	href: string,
	price: number,
}

/* Denys, start ignore code from here */
type DataType = CheaperOutputType | CheaperOutputType;

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

export const pepeFetch = (url: string) => {
	// console.clear()
	// console.log(url)

	let data: CheaperOutputType;

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