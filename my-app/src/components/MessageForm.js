import React, { useState} from 'react';
import { useNavigate } from 'react-router';

const MessageForm = ({ onMessageSubmit, updateMessages }) => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (message.trim() !== '') {
      const timestamp = new Date();
      onMessageSubmit({ text: message, timestamp });
      setMessage('');

      const data = { text: message, timestamp };
      const response = await fetch('http://localhost:5000/msgs/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        updateMessages(); // Fetch and update messages after posting
      } else {
        console.error('Failed to post message:', response.statusText);
      }

      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="text-area"
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
