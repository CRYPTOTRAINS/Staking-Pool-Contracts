/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable no-unused-vars */
import './TrainList.css';
import './TrainItem.css';
import BackArrow from '../../common/BackArrow/BackArrow';
import common from '../../../assets/images/common_train.png'
import rare from '../../../assets/images/rare_train.png'
import epic from '../../../assets/images/epic_train.png'
import legendary from '../../../assets/images/legendary_train.png'
export const TrainList = () => {

  return (
    <>
      <h2 className="title">Your Trains</h2>
      <div className="train-list">
        {/*=============TRAIN ONE ======================*/}
        <main className="train"> 
          <img src={common} alt='common train' />
        </main>
        {/*=============TRAIN TWO ======================*/}
        <main className="train"> 
          <img src={rare} alt='rare train' />
        </main>
        {/*=============TRAIN THREE ======================*/}
        <main className="train"> 
          <img src={epic} alt='epic train' />
        </main>
        {/*=============TRAIN FOUR ======================*/}
        <main className="train"> 
          <img src={legendary} alt='legendary train' />
        </main>
      </div>
    </>
  );
};
