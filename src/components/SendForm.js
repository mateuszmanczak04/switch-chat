import { useState } from 'react';
import './SendForm.css';

const SendForm = ({ onSendMessage }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(content);
    setContent('');
  };

  return (
    <form className='send' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='send message...'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button>{'>'}</button>
    </form>
  );
};

export default SendForm;
