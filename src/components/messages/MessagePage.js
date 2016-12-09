import React, {PropTypes} from 'react';  
import {connect} from 'react-redux';  
import * as messageActions from '../../actions/messageActions';
import CatList from './CatList';

class MessagePage extends React.Component {  
  render() {
    return(
    	<div className="col-md-12">
    		<h1>messages</h1>
    		<div className="col-md-4">
					<MessageList messages={this.props.messages} />
    		</div>
    	</div>	
    );
  }
}

MessagePage.propTypes = {

};

function mapStateToProps(state, ownProps) {

} 

export default connect(mapStateToProps)(MessagePage); 
