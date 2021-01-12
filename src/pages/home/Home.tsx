import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../../components/home/headerSection';
import SkillSection from '../../components/home/skillSection';

export const Wrap = styled.div`
	width: 100%;
	height: 100%;
`;

const Home = (): JSX.Element => {
	return (
		<Wrap>
			<HeaderSection />
			<SkillSection />
		</Wrap>
	);
};

export default Home;
