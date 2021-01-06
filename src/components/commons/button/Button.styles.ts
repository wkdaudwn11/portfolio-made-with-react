import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const buttonStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: center;
	background: transparent;
	border: ${({ theme }) => `1px solid ${theme.color.grey_1}`};
	border-radius: 2px;
	padding: 0.6rem 1rem;
	transition: all 0.2s ease-in;
	color: ${({ theme }) => theme.color.grey_1};

	&:hover {
		background-color: ${({ theme }) => theme.color.grey_1};
		color: ${({ theme }) => theme.color.grey_8};
	}
`;

export const StyledLink = styled(Link)`
	${buttonStyle}
`;

export const StyledButton = styled.button`
	${buttonStyle}
`;
