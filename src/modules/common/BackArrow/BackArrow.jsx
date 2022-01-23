import './BackArrow.css';
import backArrow from '../../../assets/images/backgroundarrow.png';

const BackArrow = () => {
  return (
    <button className="back-arrow">
      <img src={backArrow} alt="back arrow" />
    </button>
  );
};

export default BackArrow;