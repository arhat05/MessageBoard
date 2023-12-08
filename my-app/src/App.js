import React, { useState} from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/Messages';
import './styles/App.css';

const App = () => {
  const [messages, setMessages] = useState([]);



  const handleAddMessage = (message) => {
  setMessages([message, ...messages]);
  
    //window.location.reload();
    // refresh messages component so that it will fetch the new message from the server

    

  };


  return (
    <div>
      <div className="message-form">
        <h1>Message Board</h1>
        <MessageForm 
        onMessageSubmit={(newMessage) => {
          handleAddMessage(newMessage);
        }} />
      </div>
      <div className="container">
        <MessageList messages={setMessages} />
      </div>
    </div>
  );
};

export default App;
