import React from 'react';
import { Bg, MainBlock, MainWrap, GradientBox } from './Header.styles';
import MainBg from '../../images/main-bg.jpg';

type Props = {
	children: React.ReactNode;
};

const Header = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Bg>
				<img src={MainBg} alt="test" />
			</Bg>
			<MainBlock>
				<GradientBox>
					<MainWrap>{children}</MainWrap>
				</GradientBox>
			</MainBlock>
		</>
	);
};

export default React.memo(Header);
