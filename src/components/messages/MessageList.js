import React, {PropTypes} from 'react';
import MessageListRow from './MessageListRow';


const MessageList = ({messages}) => { 
  return (
      <table className="table">
        <thead>
          <tr>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(message => 
            <MessageListRow key={message.id} message={message} />
          )}
        </tbody>
    </table>
  );
};

MessageList.propTypes = {  
  messages: PropTypes.array.isRequired
};

export default MessageList;  
