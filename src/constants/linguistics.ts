import { CategoryType } from '../types/CategoryType';

type LinguisticType = {
	[key in CategoryType]: string;
}

export const CASUS_NOMINATIVUS: LinguisticType = { // this is Називний Відмінок in Ukrainian language
	corn: 'Кукурузка',
	buckwheat: 'Гречка',
	rice: 'Рис',
	barley: 'Ячмінь',
	wheat: 'Пшениця',
}

export const CHEAPER_CASUS_GENETIVUS: LinguisticType = { // this is найдешевш.. Родовий відмінок in Ukrainian language
	corn: 'найдешевшої кукурузки',
	buckwheat: 'найдешевшої гречки',
	rice: 'найдешевшого рису',
	barley: 'найдешевшого ячменю',
	wheat: 'найдешевшої пшениці',
}

export const MONTHS_NAMES = {
	casusNominativus: [
		'Січень',
		'Лютий',
		'Березень',
		'Квітень',
		'Травень',
		'Червень',
		'Липень',
		'Серпень',
		'Вересень',
		'Жовтень',
		'Листопад',
		'Грудень',
	],
	casusGenetivus: [
		'Січня',
		'Лютого',
		'Березня',
		'Квітня',
		'Травня',
		'Червня',
		'Липня',
		'Серпня',
		'Вересня',
		'Жовтня',
		'Листопада',
		'Грудня',
	]
}
