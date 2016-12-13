import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/messageActions';
import MessageForm from './MessageForm';


class NewMessagePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: {text: ''},
      saving: false
    };
    this.saveMessage = this.saveMessage.bind(this);
    this.updateMessageState = this.updateMessageState.bind(this);
  }

  updateMessageState(event) {
    const field = event.target.name;
    const message = this.state.message;
    message[field] = event.target.value;
    return this.setState({message: message});
  }

  saveMessage(event) {
    event.preventDefault();
    this.props.actions.createCat(this.state.message)
  }
  
  render() {
    return (
      <div>
        <h1>new message</h1>
        <messageForm 
          message={this.state.message} 
          onSave={this.saveMessage}
          onChange={this.updateMessageState}/>
      </div>
    );
  }
}

NewMessagePage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapDispatchToProps)(NewMessagePage);


