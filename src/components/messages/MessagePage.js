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
    this.saveMessage = this.saveMessage.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  saveMessage(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.newMessage(this.state.message);
  }

  updateMessageState(event) {
    const field = event.target.name;
    const message = this.state.message;
    message[field] = event.target.value;
    return this.setState({message: message});
  }

  componentWillRecieveProps(nextProps){
    if (this.props.message.id != nextProps.messages.id) {
      this.setState({message: nextProps.message});
    }
    this.setState({saving: false});
  }

  deleteMessage(event) {
    this.props.actions.deleteMessage(this.state.message);
  }

  render() {
  
    return(
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.message.text}</h1>
        <h4>{moment(this.state.message.created_at).format('MMMM Do YYYY, h:mm:ss a')}</h4>
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
  if (messageId && state.messages.length > 0) {
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
