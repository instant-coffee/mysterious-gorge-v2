import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './components/App';  
import HomePage from './components/home/HomePage';  
import MessagesPage from './components/messages/MessagesPage';  
import MessagePage from './components/messages/MessagePage';

export default (  
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/messages" component={MessagesPage}>
    	<Route path="/messages/:id" component={MessagePage}/>
    </Route>	
  </Route>
);