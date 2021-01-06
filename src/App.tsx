import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Wrap, Container } from './App.styles';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<Wrap>Hello!</Wrap>
			<Container bgColor="skyblue">portfolio-made-with-react</Container>
		</ThemeProvider>
	);
};

export default App;
