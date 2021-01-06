/* eslint-disable quotes */
import styled from 'styled-components';

type BgProps = {
	bgName: string;
};

export const Bg = styled.div`
	width: 100%;
	height: 32rem;
	position: fixed;
	background: ${({ bgName }: BgProps) => `url("src/images/${bgName}")`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	top: 0;

	@media only screen and (max-width: 600px) {
		height: 23rem;
	}
`;

export const MainBlock = styled.section`
	width: 100%;
	height: 32rem;
	position: relative;
	@media only screen and (max-width: 600px) {
		height: 23rem;
	}
`;

export const MainWrap = styled.div`
	width: 100%;
	max-width: 70rem;
	margin: 0 auto;
	height: 100%;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const GradientBox = styled.div`
	width: 100%;
	display: flex;
	position: absolute;
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0;
	height: 15rem;
	align-items: center;
	background: linear-gradient(360deg, rgba(0, 0, 0, 1) 8.98%, rgba(0, 0, 0, 0) 100%);
	@media only screen and (max-width: 600px) {
		height: 7.5rem;
	}
`;
