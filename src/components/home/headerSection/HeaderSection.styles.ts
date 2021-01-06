import styled from 'styled-components';

export const Desc = styled.p`
	color: ${({ theme }) => theme.color.grey_6};
	font-size: 1.7rem;
	font-weight: 500;
	margin-bottom: 0.75rem;
	@media only screen and (max-width: 480px) {
		font-size: 1.1rem;
	}
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.color.grey_1};
	font-size: 2.5rem;
	font-weight: 900;
	margin: 0;
	@media only screen and (max-width: 480px) {
		font-size: 2rem;
	}
	& > span {
		font-weight: 500;
		font-size: 2.2rem;
		@media only screen and (max-width: 480px) {
			font-size: 1.5rem;
		}
	}
`;
