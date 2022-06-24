import { useEffect, useRef } from 'react';
import './Chat.css';
import HisMessage from './HisMessage';
import MyMessage from './MyMessage';
import SendForm from './SendForm';

const Chat = ({
  addMessage,
  deleteMessage,
  editMessage,
  activeUser,
  messages,
}) => {
  const scrollRef = useRef();

  const onSendMessage = (content) => {
    addMessage(content);
  };

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  console.log(messages);

  return (
    <div className='chat'>
      <div className='messages'>
        {messages.map((message, index) => {
          if (message.sender === activeUser) {
            return (
              <MyMessage
                key={index}
                sender={message.sender}
                content={message.content}
                time={message.time}
                id={message.id}
                deleteMessage={deleteMessage}
                editMessage={editMessage}
                image={message.image}
              />
            );
          }
          return (
            <HisMessage
              key={index}
              sender={message.sender}
              content={message.content}
              time={message.time}
              image={message.image}
            />
          );
        })}
        <div ref={scrollRef} />
      </div>

      <SendForm onSendMessage={onSendMessage} editMessage={editMessage} />
    </div>
  );
};

export default Chat;
