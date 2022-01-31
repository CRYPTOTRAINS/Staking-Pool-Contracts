import './BuyCTrainButton.css';
// import buy_train from '../../../assets/images/button_buy.png'

const BuyCTrainButton = ({ handleOnClick, cTrainValue }) => {
  return (
    <button className="buy-button" onClick={handleOnClick} onKeyDown={handleOnClick}>
      <div className='buy-train-image'>
        <div className="cTrainValue">{cTrainValue}</div>
      </div>
    </button>
  );
};

export default BuyCTrainButton;
