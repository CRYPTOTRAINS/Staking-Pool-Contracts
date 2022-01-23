import './Button.css';
import button from '../../../assets/images/botondebanco.png';

const Button = ({ handleOnClick }) => {
  return (
    <button className="button" onClick={handleOnClick} onKeyDown={handleOnClick}>
      <img src={button} alt="boton de banco" />
    </button>
  );
};

export default Button;
