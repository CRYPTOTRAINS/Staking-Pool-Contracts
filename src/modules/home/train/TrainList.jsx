/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
// import './TrainList.css';
// import './TrainItem.css';
import Table from 'react-bootstrap/Table';
import common from '../../../assets/images/common.png';
import common_bullet from '../../../assets/images/common_bullet.png';
import rare from '../../../assets/images/rare.png';
import rare_bullet from '../../../assets/images/rare_bullet.png';
import epic from '../../../assets/images/epic.png';
import epic_bullet from '../../../assets/images/epic_bullet.png';
import legendary from '../../../assets/images/legends.png';
import level from '../../../assets/icons/level.png';
import acceleration from '../../../assets/icons/acceleration.png';
import expo from '../../../assets/icons/expo.png';
import speed from '../../../assets/icons/speed.png';
import load from '../../../assets/icons/load.png';
import brake from '../../../assets/icons/brake.png';
import fuel from '../../../assets/icons/fuel.png';
import station from '../../../assets/icons/station.png';
import status from '../../../assets/icons/status.png';
import mechanic from '../../../assets/icons/mechanic.png';
import legendary_bullet from '../../../assets/images/legendary_bullet.png';
import dispatch from '../../../assets/images/dispatch_button.png';
import reward from '../../../assets/images/reward_button.png';
import sell from '../../../assets/images/sell.png';

import styles from './TrainList.module.css';

export const TrainList = () => {
  return (
    <>
      <section className={styles.purchase}>
        <article className={styles.ticket}>
          <div className={styles.ticketImage}></div>
          <button className={styles.purchaseButton}>
            <div className={styles.buyTicketImage}></div>
          </button>
        </article>
        <article className={styles.box}>
          <div className={styles.boxImage}></div>
          <button className={styles.purchaseButton}>
            <div className={styles.unboxImage}></div>
          </button>
        </article>
      </section>
      <h2 className={styles.title}>Your Trains</h2>
      <div className={styles.trainList}>
        {/*=============TRAIN ONE ======================*/}
        <main className={styles.train}>
          <p className={styles.sno}>#1</p>
          <img src={sell} className={styles.sell} alt="sell" />
          <article className={styles.trainImage}>
            <img src={common} alt="common train" />
          </article>
          <article className={styles.bullet}>
            <img src={common_bullet} alt="common train bullet" />
          </article>
          <section className={styles.trainContainer}>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className={styles.value}>0</span>
                  </td>
                  <td width={'60%'} className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className={styles.value}>20</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className={styles.value}>0.00</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className={styles.value}>30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className={styles.value}>2</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className={styles.value}>16</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className={styles.value}>No</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className={styles.value}>Perf</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className={styles.trainButton}>
            <button className={styles.sendButton} onClick={() => console.log('clicked')}>
              <div className={styles.dispatch}></div>
            </button>
            <button className={styles.sendButton}>
            <div className={styles.reward}></div>
            </button>
          </section>
        </main>
        {/*=============TRAIN TWO ======================*/}
        <main className={styles.train}>
          <p className={styles.sno}>#2</p>
          <img src={sell} className={styles.sell} alt="sell" />
          <article className={styles.trainImage}>
            <img src={rare} alt="rare train" />
          </article>
          <article className={styles.bullet}>
            <img src={rare_bullet} alt="rare train bullet" />
          </article>
          <section className={styles.trainContainer}>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className={styles.value}>0</span>
                  </td>
                  <td width={'60%'} className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className={styles.value}>20</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className={styles.value}>0.00</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className={styles.value}>30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className={styles.value}>2</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className={styles.value}>16</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className={styles.value}>No</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className={styles.value}>Perf</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className={styles.trainButton}>
            <button className={styles.sendButton}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className={styles.sendButton}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
        {/*=============TRAIN THREE ======================*/}
        <main className={styles.train}>
          <p className={styles.sno}>#3</p>
          <img src={sell} className={styles.sell} alt="sell" />
          <article className={styles.trainImage}>
            <img src={epic} alt="epic train" />
          </article>
          <article className={styles.bullet}>
            <img src={epic_bullet} alt="epic train bullet" />
          </article>
          <section className={styles.trainContainer}>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className={styles.value}>0</span>
                  </td>
                  <td width={'60%'} className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className={styles.value}>20</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className={styles.value}>0.00</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className={styles.value}>30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className={styles.value}>2</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className={styles.value}>16</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className={styles.value}>No</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className={styles.value}>Perf</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className={styles.trainButton}>
            <button className={styles.sendButton}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className={styles.sendButton}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
        {/*=============TRAIN FOUR ======================*/}
        <main className={styles.train}>
          <p className={styles.sno}>#4</p>
          <img src={sell} className={styles.sell} alt="sell" />
          <article className={styles.trainImage}>
            <img src={legendary} alt="legendary train" />
          </article>
          <article className={styles.bullet}>
            <img src={legendary_bullet} alt="legendary train bullet" />
          </article>
          <section className={styles.trainContainer}>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className={styles.value}>0</span>
                  </td>
                  <td width={'60%'} className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className={styles.value}>20</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className={styles.value}>0.00</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className={styles.value}>30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className={styles.value}>2</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className={styles.value}>16</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className={styles.value}>No</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.tableData}>
                    <span className={styles.icon}>
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className={styles.value}>Perf</span>
                  </td>
                  <td className={styles.tableData}>
                    <span className={styles.imageIcon}>
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className={styles.trainButton}>
            <button className={styles.sendButton}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className={styles.sendButton}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
      </div>
    </>
  );
};
