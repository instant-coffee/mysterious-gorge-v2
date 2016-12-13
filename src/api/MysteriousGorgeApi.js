class MysteriousGorgeApi {  
  static getAllMessages() {
    
    return fetch('https://mysterious-gorge-83229.herokuapp.com/messages/').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteMessage(message) {
    const request = new Request(`https://mysterious-gorge-83229.herokuapp.com/messages/${message.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createMessage(message) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`https://mysterious-gorge-83229.herokuapp.com/messages/`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({message: message})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MysteriousGorgeApi;  