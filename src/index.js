import 'babel-polyfill';  
import React from 'react';  
import { render } from 'react-dom';  
import { Router, browserHistory } from 'react-router';  
import routes from './routes';
import configureStore from './store/configureStore';  
import {loadMessages} from './actions/messageActions';  

const store = configureStore();

// load Messages on instantiation
store.dispatch(loadMessages());

render(  
 	<Provider store={store}>
 		<Router history={browserHistory} routes={routes} />
 	</Provider>,
  document.getElementById('app')
);