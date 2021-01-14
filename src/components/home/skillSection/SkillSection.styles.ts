import styled, { DefaultTheme } from 'styled-components';

type SkillFloatTypes = {
	width: string;
};

type PolygonTypes = {
	compareNumber: number;
	score: number;
	theme: DefaultTheme;
};

export const Wrap = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	padding: 1rem;
`;

export const Title = styled.div`
	width: 100%;
	padding: 20px 0;
	font-size: 30px;
	font-weight: bold;
`;

export const SkillBoxWrap = styled.div`
	width: 100%;
	height: auto;
	overflow: hidden;
`;

export const SkillBox = styled.div`
	width: calc(25% - 12px);
	height: auto;
	float: left;
	padding: 16px;
	border: ${({ theme }) => `1px solid ${theme.color.grey_8}`};

	& + & {
		margin-left: 16px;
	}

	&:nth-child(1),
	&:nth-child(4n + 1) {
		margin-left: 0;
	}

	&:nth-child(n + 5) {
		margin-top: 16px;
	}

	&::after {
		clear: both;
		display: block;
		content: '';
	}
`;

export const SkillFloat = styled.div`
	width: ${({ width }: SkillFloatTypes) => width || '100%'};
	height: 52px;
	float: left;
	&::after {
		clear: both;
		display: block;
		content: '';
	}

	& > div.image-box,
	& > div.contents {
		width: 50%;
		float: left;
		&::after {
			clear: both;
			display: block;
			content: '';
		}
	}

	& > div.image-box {
		width: 35%;
	}

	& > div.contents {
		width: 65%;
		& > p.division {
			color: ${({ theme }) => theme.color.grey_6};
		}
		& > p.name {
			margin-top: 4px;
			font-size: 20px;
			font-weight: 800;
		}
	}

	& > div.score {
		width: 100%;
		height: 100%;
		display: table;
		text-align: right;
	}
`;

export const Polygon = styled.polygon`
	fill: ${({ compareNumber, score, theme }: PolygonTypes) => (score > compareNumber ? '#FFC107' : theme.color.grey_6)};
`;
