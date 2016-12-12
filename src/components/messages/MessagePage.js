import React, {PropTypes} from 'react'; 
import moment from 'moment'; 
import {connect} from 'react-redux';
import * as messageActions from '../../actions/messageActions';

let date, time = new Date().toLocaleString('en-CA').split(', ');  

class MessagePage extends React.Component {  
  render() {
    let messageTS = this.props.message.created_at;
    
    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.message.text}</h1>
        <h4>{moment(messageTS).format('MMMM Do YYYY, h:mm:ss a')}</h4>
      </div>
    );
  }
}

MessagePage.propTypes = {
  message: PropTypes.object.isRequired
};

function getMessageById(messages, id) {
  let message = messages.find(message => message.id == id);
  return Object.assign({}, message);  
}

function mapStateToProps(state, ownProps) {
	let message = {text: '', url: '', time: ''};
  const messageId = ownProps.params.id;
  if (state.messages.length > 0){
    message = getMessageById(state.messages, ownProps.params.id);
  }
  return {message: message};
}

export default connect(mapStateToProps)(MessagePage); 
