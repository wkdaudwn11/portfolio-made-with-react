import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.color.grey_2};
	color: ${({ theme }) => theme.color.grey_8};

	& > .contents {
		width: 1280px;
		height: 100%;
		margin: 0 auto;

		@media screen and (max-width: 1280px) {
			& {
				width: 100%;
			}
		}
	}
`;
