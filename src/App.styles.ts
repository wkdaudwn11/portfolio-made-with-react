import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	height: 300px;
	background-color: ${({ theme }) => theme.color.grey_2};
	color: ${({ theme }) => theme.color.blue};
	margin: 0 auto;
`;

export const Container = styled.div<{ bgColor: string; color?: string }>`
	width: 100%;
	height: 300px;
	margin: 0 auto;
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => color || 'red'};
`;
