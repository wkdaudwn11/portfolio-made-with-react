/* eslint-disable quotes */
import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	height: 500px;
	position: relative;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const Gradient = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	position: absolute;
	bottom: 0px;
	-webkit-box-align: center;
	align-items: center;
	background: linear-gradient(360deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
`;
