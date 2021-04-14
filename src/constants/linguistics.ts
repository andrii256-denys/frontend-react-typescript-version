import { CategoryType } from '../types/CategoryType';

type NominativeCaseType = {
	[key in CategoryType]: string;
}

export const NOMINATIVE_CASE: NominativeCaseType = { // this is Називний Відмінок in Ukrainian language
	corn: 'Кукурудза',
	buckwheat: 'Гречка',
	rice: 'Рис',
	barley: 'Ячмінь',
	wheat: 'Пшениця',
}
