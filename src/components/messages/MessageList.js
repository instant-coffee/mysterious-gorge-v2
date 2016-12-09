import React, {PropTypes} from 'react';

const MessageList = ({messages}) => {  
  return (
      <ul className="list-group">
        {messages.map(message => 
          <li className="list-group-item" key={message.id}>
            {message.text}
          </li>
        )}
      </ul>
  );
};

MessageList.propTypes = {  
  messages: PropTypes.array.isRequired
};

export default MessageList;  
