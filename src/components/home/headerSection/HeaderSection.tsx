import React from 'react';
import Header from '../../header';
import { Title, Desc } from './HeaderSection.styles';

const HeaderSection = (): JSX.Element => {
	return (
		<Header bgName="main-bg2.jpg">
			<div>
				<Desc>Front-end developer</Desc>
				<Title>
					장명주 <span>입니다.</span>
				</Title>
			</div>
		</Header>
	);
};

export default HeaderSection;
