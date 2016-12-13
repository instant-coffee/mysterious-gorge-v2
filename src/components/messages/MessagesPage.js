import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';  
import * as actions from '../../actions/messageActions';
import MessageList from './MessageList';
import NewMessagePage from './NewMessagePage';

class MessagesPage extends React.Component {
  componentWillMount() {
    if (this.props.messages[0].id == ''){
      this.props.actions.loadMessages();
    }
  }  
  render() {
    const messages = this.props.messages;
    return (
      <div className="col-md-12">
        <h1>Messages <Link to={'/messages/new'} className="btn btn-primary">+ message</Link></h1>
        <div className="col-md-4">
          <MessageList messages={messages} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MessagesPage.propTypes = {
	messsages: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  if (state.messages.length > 0) {
    return {
      messages: state.messages    
    };
	} else {
    return {
      messages: [{id: '', text: '', created_at: ''}]
    }
  }
} 

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage); 
