import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	height: auto;
	min-height: calc(100% - 500px);
	background-color: ${({ theme }) => theme.color.black};
	color: ${({ theme }) => theme.color.grey_1};

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
