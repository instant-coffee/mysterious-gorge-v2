import * as types from './actionTypes'
import mysteriousGorgeApi from '../api/mysteriousGorgeApi';

export function loadMessages() {  
  return function(dispatch) {
    return mysteriousGorgeApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMessagesSuccess(messages) {  
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}