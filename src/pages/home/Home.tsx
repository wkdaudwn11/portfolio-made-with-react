import React from 'react';
import styled from 'styled-components';
import HeaderSection from '../../components/home/headerSection';

export const Wrap = styled.div`
	width: 100%;
	height: 100%;
`;

const Home = (): JSX.Element => {
	return (
		<Wrap>
			<HeaderSection />
		</Wrap>
	);
};

export default Home;
