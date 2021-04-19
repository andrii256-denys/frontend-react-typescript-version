import { CategoryType } from '../types/CategoryType';

type LinguisticType = {
	[key in CategoryType]: string;
}

export const CASUS_NOMINATIVUS: LinguisticType = { // this is Називний Відмінок in Ukrainian language
	corn: 'Мамалига',
	buckwheat: 'Гречка',
	rice: 'Рис',
	barley: 'Ячмінь',
	wheat: 'Пшениця',
}

export const CHEAPER_CASUS_GENETIVUS: LinguisticType = { // this is найдешевш.. Родовий відмінок in Ukrainian language
	corn: 'найдешевшої мамалиги',
	buckwheat: 'найдешевшої гречки',
	rice: 'найдешевшого рису',
	barley: 'найдешевшого ячменю',
	wheat: 'найдешевшої пшениці',
}
