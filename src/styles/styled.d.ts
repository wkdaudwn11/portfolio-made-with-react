// 스타일-타입정의 파일
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			black: string;
			grey_1: string;
			grey_2: string;
			grey_3: string;
			grey_4: string;
			grey_5: string;
			grey_6: string;
			grey_7: string;
			grey_8: string;
			grey_9: string;
			grey_10: string;
			blue: string;
			red: string;
		};
		fontWeight: {
			normal: number;
			bold: number;
		};
	}
}
