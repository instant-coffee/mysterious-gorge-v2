import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function messageReducer(state = initialState.messages, action) {  
  switch(action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
    // return new message collection
      return action.messages;

    case types.CREATE_MESSAGE_SUCCESS:
      browserHistory.push(`/message/${action.message.id}`)
      return [
        ...state.filter(message => message.id !== action.message.id),
        Object.assign({}, action.message)
      ]
        
    case types.DELETE_MESSAGE_SUCCESS: {
      const newState = Object.assign([], state);
      const indexOfMessageToDelete = state.findIndex(message => {
        return message.id == action.message.id
      })
      newState.splice(indexOfMessageToDelete, 1);
      browserHistory.push('/messages');
      return newState;
    }
    default: 
      return state;
  }
}