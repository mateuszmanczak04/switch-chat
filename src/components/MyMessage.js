import './MyMessage.css';

const MyMessage = ({ sender, content, time }) => {
  return (
    <div className='myMessage'>
      <div className='left'>
        <div className='content'>
          <p>
            <b>{sender}</b>
          </p>
          <p>{content}</p>
        </div>
        <p className='time'>{time} | edit | delete</p>
      </div>
      <img
        src='https://i.picsum.photos/id/533/1000/1000.jpg?hmac=CUN8rX31w7WYb0ihfBlF-YIShNF10CDzFgr446d3pqQ'
        alt='me'
      />
    </div>
  );
};

export default MyMessage;
