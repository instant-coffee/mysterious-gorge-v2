import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import moment from 'moment';
import MessagePage from './MessagePage';

const MessageListRow = ({message}) => {
	let messageDate = moment(message.created_at); 
  return (
    <tr>
      <td><Link to={'/messages/' + message.id}>{messageDate.format('MMM do')}  -  {message.text}</Link></td>
    </tr>
  );
};

MessageListRow.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageListRow;