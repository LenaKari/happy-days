import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';

// components/containers
import App from './containers/App';

// Styling
import './styles/css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const middleWare = [ thunk ];
const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}


if (process.env.NODE_ENV !== 'production') {
	middleWare.push(createLogger());
}

const store = createStore(
	reducer,
	persistedState,
	applyMiddleware(...middleWare)
);

store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

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
