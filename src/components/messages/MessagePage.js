import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  

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

function mapStateToProps(state, ownProps) {
	let message = {text: '', url: '', time: ''};
  const messageId = ownProps.params.id;

  return {message: message};
} 

export default connect(mapStateToProps)(MessagePage); 
