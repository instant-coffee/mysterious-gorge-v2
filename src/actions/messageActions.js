import * as types from './actionTypes';
import mysteriousGorgeApi from '../api/MysteriousGorgeApi';

export function loadMessages() {
	// make async call to api, handle promise, dispatch action when promise is resolved  
  return function(dispatch) {
    return mysteriousGorgeApi.getAllMessages().then(messages => {
      dispatch(loadMessagesSuccess(messages.results));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadMessagesSuccess(messages) {  
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}