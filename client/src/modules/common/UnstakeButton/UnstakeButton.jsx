import './UnstakeButton.css';
// We don't have an image for unstake button so temporily using the stake button
import button from '../../../assets/images/botondebanco.png';

const UnstakeButton = ({ handleRemove }) => {
  // This can take a prop just like button to remove a stake from the list of stakes
  return (
    <button className="unstake-button" onClick={handleRemove} onKeyDown={handleRemove}>
      <img src={button} alt="boton de banco" />
    </button>
  );
};

export default UnstakeButton;
