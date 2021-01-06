/* eslint-disable camelcase */
// 스타일-테마 모음 파일
import { DefaultTheme } from 'styled-components';

const black: string = '#111111';
const grey_1: string = '#f8f9fa';
const grey_2: string = '#f1f3f5';
const grey_3: string = '#e9ecef';
const grey_4: string = '#dee2e6';
const grey_5: string = '#ced4da';
const grey_6: string = '#adb5bd';
const grey_7: string = '#868e96';
const grey_8: string = '#495057';
const grey_9: string = '#343a40';
const grey_10: string = '#212529';

const theme: DefaultTheme = {
	color: {
		black,
		grey_1,
		grey_2,
		grey_3,
		grey_4,
		grey_5,
		grey_6,
		grey_7,
		grey_8,
		grey_9,
		grey_10,
		blue: '#3d87cb',
		red: '#df4661',
	},
	fontWeight: {
		normal: 500,
		bold: 800,
	},
};

export { theme };
