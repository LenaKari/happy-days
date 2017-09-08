import React from 'react';
import { render } from 'react-dom';
import './styles/css/main.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


const middleWare = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
	middleWare.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleWare)
);


render(
	<MuiThemeProvider>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</MuiThemeProvider>
	,document.getElementById('root')
);

registerServiceWorker();
