/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable no-unused-vars */
import './TrainList.css';
import './TrainItem.css';
import BackArrow from '../../common/BackArrow/BackArrow';
import common from '../../../assets/images/common.png';
import common_bullet from '../../../assets/images/common_bullet.png';
import rare from '../../../assets/images/rare.png';
import rare_bullet from '../../../assets/images/rare_bullet.png';
import epic from '../../../assets/images/epic.png';
import epic_bullet from '../../../assets/images/epic_bullet.png';
import legendary from '../../../assets/images/legends.png';
import legendary_bullet from '../../../assets/images/legendary_bullet.png';
export const TrainList = () => {
  return (
    <>
      <h2 className="title">Your Trains</h2>
      <div className="train-list">
        {/*=============TRAIN ONE ======================*/}
        <main className="train">
          <article className="train-image">
            <img src={common} alt="common train" />
          </article>
          <article className="bullet">
            <img src={common_bullet} alt="common train bullet" />
          </article>
          <section className="item-container">
            <article className="item">
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
            </article>
            <div className="v-separator"></div>
            <article className="item">
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            </article>
          </section>
        </main>
        {/*=============TRAIN TWO ======================*/}
        <main className="train">
          <article className="train-image">
            <img src={rare} alt="rare train" />
          </article>
          <article className="bullet">
            <img src={rare_bullet} alt="rare train bullet" />
          </article>
          <section className="item-container">
            <article className="item">
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
            </article>
            <div className="v-separator"></div>
            <article className="item">
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            </article>
          </section>
        </main>
        {/*=============TRAIN THREE ======================*/}
        <main className="train">
          <article className="train-image">
            <img src={epic} alt="epic train" />
          </article>
          <article className="bullet">
            <img src={epic_bullet} alt="epic train bullet" />
          </article>
          <section className="item-container">
            <article className="item">
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
            </article>
            <div className="v-separator"></div>
            <article className="item">
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            </article>
          </section>
        </main>
        {/*=============TRAIN FOUR ======================*/}
        <main className="train">
          <article className="train-image">
            <img src={legendary} alt="legendary train" />
          </article>
          <article className="bullet">
            <img src={legendary_bullet} alt="legendary train bullet" />
          </article>
          <section className="item-container">
            <article className="item">
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
              <p>level</p>
            </article>
            <div className="v-separator"></div>
            <article className="item">
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            <p>acceleration</p>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};
