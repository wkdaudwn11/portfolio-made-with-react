import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Router from './components/router';

const App = (): JSX.Element => {
	console.log('process.env.NODE_ENV >', process.env.NODE_ENV);
	return (
		<BrowserRouter basename="portfolio-made-with-react">
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
