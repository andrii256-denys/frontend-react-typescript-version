import { FiltersState } from "../../types/filters";
import { SAVING_MOMENT_NAME, FILTERS } from '../../constants/localStorage';

export const saveState = (state: object, name: string) => {
	localStorage.setItem(name, JSON.stringify(state));
	localStorage.setItem(SAVING_MOMENT_NAME, `${Date.now()}`);
}

export const checkIsDataActual = (name: string) => {
	let pastSavingMoment: string | null | number;

	pastSavingMoment = localStorage.getItem(SAVING_MOMENT_NAME);
	pastSavingMoment = typeof pastSavingMoment === 'string' ? +pastSavingMoment : 0;


	let releaseMoment: number | string | undefined = process.env.REACT_APP_REALEASE_MOMENT;
	releaseMoment = releaseMoment ? +releaseMoment : Date.now();

	return pastSavingMoment > releaseMoment;
}

export const getFiltersState = (): FiltersState | false => {
	if (!checkIsDataActual(FILTERS)) {
		return false;
	}

	const string = localStorage.getItem(FILTERS);
	if (!string) {
		return false;
	}

	try {
		const state: FiltersState = JSON.parse(string);

		return state;
	} catch {
		return false;
	}
}