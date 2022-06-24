import { useEffect, useRef, useState } from 'react';
import './MyMessage.css';

const MyMessage = ({
  sender,
  content,
  time,
  id,
  deleteMessage,
  editMessage,
}) => {
  const handleDelete = () => {
    deleteMessage(sender, id);
  };

  const handleEdit = () => {
    const text = document.getElementById('send-input').value;
    editMessage(sender, id, text, time);
    document.getElementById('send-input').value = '';
  };

  return (
    <div className='myMessage'>
      <div className='left'>
        <div className='content'>
          <p>
            <b>{sender}</b>
          </p>
          <p>{content}</p>
        </div>
        <div className='time'>
          <p>{time}</p>
          <p onClick={handleEdit}>edit</p>
          <p onClick={handleDelete}>delete</p>
        </div>
      </div>
      <img
        src='https://i.picsum.photos/id/533/1000/1000.jpg?hmac=CUN8rX31w7WYb0ihfBlF-YIShNF10CDzFgr446d3pqQ'
        alt='me'
      />
    </div>
  );
};

export default MyMessage;
