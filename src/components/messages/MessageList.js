import React, {PropTypes} from 'react';
import MessageListRow from './MessageListRow';
import MessageListDate from './MessageListDate';


const MessageList = ({messages}) => { 
  return (
      <table className="table">
        <thead>
          <tr>
            <th>Mystrious Gorge messages list</th>
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
