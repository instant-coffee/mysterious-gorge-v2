import * as types from './actionTypes';
import mysteriousGorgeApi from '../api/MysteriousGorgeApi';

export function loadMessagesSuccess(messages) {  
  return {type: types.LOAD_MESSAGES_SUCCESS, messages};
}

export function createMessageSuccess(message) {
  return {type: types.CREATE_MESSAGE_SUCCESS, message};
}

export function deleteMessageSuccess(message) {  
  return {type: types.DELETE_MESSAGE_SUCCESS, message};
}

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

export function createMessage(message) {
  return function (dispatch) {
    return mysteriousGorgeApi.createmessage(message).then(responseMessage => {
      dispatch(createMessageSuccess(responseMessage));
      return responseMessage;
    }).catch(error => {
      throw(error);
    });
  };
}


export function deleteMessage(message) {  
  return function(dispatch) {
    return mysteriousGorgeApi.deleteMessage(message).then(() => {
      console.log(`Deleted ${message.id}`);
      dispatch(deleteMessageSuccess(message));
      return;
    }).catch(error => {
      throw(error);
    });
  };
}