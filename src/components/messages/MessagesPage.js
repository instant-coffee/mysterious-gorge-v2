import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as messageActions from '../../actions/messageActions';

class MessagesPage extends React.Component {  
  render() {
    return()
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
