import styled from 'styled-components';

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
`;

export const SkillInnerWrap = styled.div`
	width: 25%;
	height: auto;
	padding: 8px;
`;

export const SkillBox = styled.div`
	width: 100%;
	height: auto;
	border: ${({ theme }) => `1px solid ${theme.color.grey_8}`};
	display: flex;
	justify-content: space-between;
	-webkit-box-pack: justify;
	-webkit-box-align: center;
	padding: 16px;
`;

export const SkillFlex = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	-webkit-box-pack: justify;
	-webkit-box-align: center;

	& > div.contents {
		margin-left: 12px;
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
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
`;
