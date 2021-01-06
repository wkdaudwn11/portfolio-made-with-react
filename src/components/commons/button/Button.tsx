import React from 'react';
import { StyledLink, StyledButton } from './Button.styles';

type Props = {
	children: React.ReactNode;
	to?: string;
	isBlank?: boolean;
};

const Button = ({ children, to, isBlank }: Props): JSX.Element => {
	if (to) {
		return (
			<StyledLink to={to} target={isBlank ? '_blank' : undefined}>
				{children}
			</StyledLink>
		);
	}

	return <StyledButton>{children}</StyledButton>;
};

Button.defaultProps = {
	to: null,
	isBlank: false,
};

export default React.memo(Button);
