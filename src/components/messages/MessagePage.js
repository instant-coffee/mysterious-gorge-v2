import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import * as messageActions from '../../actions/messageActions';  

class MessagePage extends React.Component {  
  render() {
    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.message.time}</h1>
        <p>{this.props.message.text}</p>
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
