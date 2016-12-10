class MysteriousGorgeApi {  
  static getAllMessages() {
    return fetch('https://mysterious-gorge-83229.herokuapp.com/messages/?page=1').then(response => {
      console.log(response.json());
      // return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default MysteriousGorgeApi;  