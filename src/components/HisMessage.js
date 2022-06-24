import './HisMessage.css';

const HisMessage = ({ sender, content, time }) => {
  return (
    <div className='hisMessage'>
      <img
        src='https://i.picsum.photos/id/75/1000/1000.jpg?hmac=6Fovz_9pOLtArpgL1fUXm5kaWOsExkbR2ByImettEkw'
        alt='me'
      />
      <div className='right'>
        <div className='content'>
          <p>
            <b>{sender}</b>
          </p>
          <p>{content}</p>
        </div>
        <p className='time'>{time} | edit | delete</p>
      </div>
    </div>
  );
};

export default HisMessage;
