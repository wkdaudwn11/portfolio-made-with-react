/* eslint-disable quotes */
import styled from 'styled-components';

export const Bg = styled.div`
	width: 100%;
	height: 32rem;
	position: fixed;
	top: 0;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

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
	max-width: 80rem;
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
