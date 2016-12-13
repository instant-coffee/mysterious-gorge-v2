import React, {PropTypes} from 'react'; 
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment'; 
import * as messageActions from '../../actions/messageActions';
import {browserHistory} from 'react-router';


class MessagePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      message: Object.assign({}, this.props.message),
      saving: false
    };
    // this.saveMessage = this.saveMessage.bind(this);
    // this.updateMessageState = this.updateMessageState.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }


  deleteMessage(event) {
    this.props.actions.deleteMessage(this.state.message);
  }
  
  render() {
    
    let messageTS = this.state.message.created_at;

    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.message.text}</h1>
        <h4>{moment(messageTS).format('MMMM Do YYYY, h:mm:ss a')}</h4>
        <button 
           onClick={this.deleteMessage} 
           className="btn btn-sm btn-danger">
           delete
        </button>
      </div>
    );
  }
}

MessagePage.propTypes = {
  message: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getMessageById(messages, id) {
  let message = messages.find(message => message.id == id);
  return Object.assign({}, message);  
}

function mapStateToProps(state, ownProps) {
	let message = {text: '', url: '', created_at: '', id: ''};
  const messageId = ownProps.params.id;
  if (message.id && state.messages.length > 0) {
    message = getMessageById(state.messages, ownProps.params.id);
  }
  return {message: message};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePage); 
