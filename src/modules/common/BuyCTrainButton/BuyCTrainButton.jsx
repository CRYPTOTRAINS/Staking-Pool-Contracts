import './BuyCTrainButton.css';
// import buy_train from '../../../assets/images/button_buy.png'

const BuyCTrainButton = ({ handleOnClick, cTrainValue, ...rest }) => {
  return (
    <button className="buy-cbutton" onClick={handleOnClick} onKeyDown={handleOnClick} {...rest}>
      <div className="buy-train-image">
        <div className="cTrainValue">{cTrainValue}</div>
      </div>
    </button>
  );
};

export default BuyCTrainButton;
