class MysteriousGorgeApi {  
  static getAllMessages() {
    return fetch('https://mysterious-gorge-83229.herokuapp.com/messages/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MysteriousGorgeApi;  