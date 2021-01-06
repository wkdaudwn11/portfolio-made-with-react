import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Header from './components/header';
import Router from './components/router';

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Header />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
