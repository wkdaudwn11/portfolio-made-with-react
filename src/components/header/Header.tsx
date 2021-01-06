import React from 'react';
// import MainBg from '../../images/main-bg.jpg';
import { Bg, MainBlock, MainWrap, GradientBox } from './Header.styles';

type Props = {
	children: React.ReactNode;
	bgName: string;
};

const Header = ({ children, bgName }: Props): JSX.Element => {
	return (
		<>
			{/* <Bg bgName={bgName} /> */}
			<Bg bgName={bgName} />
			<MainBlock>
				<GradientBox>
					<MainWrap>{children}</MainWrap>
				</GradientBox>
			</MainBlock>
		</>
	);
};

export default React.memo(Header);
