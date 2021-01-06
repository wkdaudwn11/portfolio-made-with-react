import React from 'react';
import { Wrap, Gradient } from './Header.styles';
import mainBg from '../../images/main-bg.jpg';

const Header = (): JSX.Element => {
	return (
		<Wrap>
			<img src={mainBg} alt="Header 배경화면" />
			<Gradient />
		</Wrap>
	);
};

export default Header;
