import {combineReducers} from 'redux';  
import messages from './messageReducer';

const rootReducer = combineReducers({  
  // short hand property names instead of messages: messages
  messages
});

export default rootReducer;  