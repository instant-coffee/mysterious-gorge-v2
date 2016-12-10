import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import MessagePage from './MessagePage';

const MessageListRow = ({message}) => {
  return (
    <tr>
      <td><Link to={'/messages/' + message.id}>{message.text}</Link></td>
    </tr>
  );
};

MessageListRow.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageListRow;