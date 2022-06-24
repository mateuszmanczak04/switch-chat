import { useState } from 'react';
import Chat from './components/Chat';
import SendForm from './components/SendForm';
import Switch from './components/Switch';

const initialMessages = [
  {
    sender: 'John',
    content: 'Hello, how are you?',
    time: '6:35',
    id: 1,
  },
  {
    sender: 'Krystian',
    content: "I'm good, thanks! How about you?",
    time: '6:35',
    id: 2,
  },
  {
    sender: 'John',
    content: 'Pretty good! What would you like to learn today',
    time: '6:35',
    id: 3,
  },
  {
    sender: 'Krystian',
    content: 'Well, maybe business English? What do you think?',
    time: '6:35',
    id: 4,
  },
];

function App() {
  const [activeUser, setActiveUser] = useState('Krystian');

  const [messages, setAllMessages] = useState(initialMessages);

  const addMessage = (content) => {
    setAllMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: activeUser,
        content: content,
        time: '6:35',
        id: Date.now(),
      },
    ]);
  };

  const deleteMessage = (sender, id) => {
    if (sender === activeUser) {
      setAllMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );
    }
  };

  const editMessage = (sender, id, content, time) => {
    if (sender === activeUser) {
      setAllMessages((prevMessages) =>
        prevMessages.map((message) => {
          if (message.id === id) {
            return {
              sender: sender,
              id: id,
              content: content,
              time: time,
            };
          }
          return message;
        })
      );
    }
  };

  const toggleUser = () => {
    if (activeUser === 'Krystian') {
      setActiveUser('John');
    } else {
      setActiveUser('Krystian');
    }
  };

  return (
    <div className='App'>
      <div className='top-bar'>
        <h1>Chat application</h1>
        <p>Switch user</p>
        <Switch toggleUser={toggleUser} />
      </div>
      <Chat
        addMessage={addMessage}
        activeUser={activeUser}
        messages={messages}
        deleteMessage={deleteMessage}
        editMessage={editMessage}
      />
    </div>
  );
}

export default App;
