import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as messageActions from '../../actions/messageActions';
import MessageList from './MessageList';

class MessagesPage extends React.Component {  
  render() {
    const messages = this.props.messages;
    return (
      <div className="col-md-12">
        <h1>Messages</h1>
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
	messsages: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		messages: state.messages
	};
} 

export default connect(mapStateToProps)(MessagesPage); 
