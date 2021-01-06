import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Header from '../../header';
import Button from '../../commons/button';
import { Title, Desc } from './HeaderSection.styles';

const HeaderSection = (): JSX.Element => {
	return (
		<Header>
			<div>
				<Desc>Front-end developer</Desc>
				<Title>
					장명주 <span>입니다.</span>
				</Title>
			</div>
			<Button to="/about">
				About More&nbsp;&nbsp;
				<FiArrowRight />
			</Button>
		</Header>
	);
};

export default HeaderSection;
