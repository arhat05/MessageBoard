import React, { useState } from 'react';

const MessageForm = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const timestamp = new Date(); // Add timestamp
      onMessageSubmit({ text: message, timestamp });
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea className='text-area'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={128}
        placeholder="Type your message..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default MessageForm;
