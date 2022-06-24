import './Switch.css';

const Switch = ({ toggleUser }) => {
  return (
    <label className='switch'>
      <input type='checkbox' onChange={toggleUser} />
      <span className='slider' />
    </label>
  );
};

export default Switch;
