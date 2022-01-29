/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
import './MarketPlaceList.css';
import './MarketPlaceItem.css';
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
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';
import search from '../../../assets/images/search.png';
import reload from '../../../assets/images/reload.png';

export const MarketList = () => {
  return (
    <>
      <h2 className="title">Marketplace</h2>
      <section className="search-section">
        <div className="search">
          <input type="text" className="search-term" placeholder="Search" />
          <button type="submit" className="search-button">
            <img src={search} alt="search" />
          </button>
          <button className="reload-button">
            <img src={reload} alt="reload" />
          </button>
        </div>
        <article className="search-select">
          <select name="select-train" id="select-train" className="train-select">
            <option selected value="volvo">
              ALL TRAINS
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <select name="select-price" id="select-price" className="price-select">
            <option selected value="volvo">
              LOWEST PRICE
            </option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </article>
      </section>
      <div className="train-list">
        {/*=============TRAIN ONE ======================*/}
        <main className="train">
          <p className="sno">#1</p>
          <article className="train-image">
            <img src={common} alt="common train" />
          </article>
          <article className="bullet">
            <img src={common_bullet} alt="common train bullet" />
          </article>
          <section className="train-container">
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className="value">0</span>
                  </td>
                  <td width={'60%'} className="table-data">
                    <span className="icon">
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className="value">20</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className="value">0.00</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className="value">30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className="value">2</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className="value">16</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className="value">No</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className="value">Perf</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <BuyCTrainButton cTrainValue={'Buy 540 CTRAIN'} />
        </main>
        {/*=============TRAIN TWO ======================*/}
        <main className="train">
          <p className="sno">#2</p>
          <article className="train-image">
            <img src={rare} alt="rare train" />
          </article>
          <article className="bullet">
            <img src={rare_bullet} alt="rare train bullet" />
          </article>
          <section className="train-container">
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className="value">0</span>
                  </td>
                  <td width={'60%'} className="table-data">
                    <span className="icon">
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className="value">20</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className="value">0.00</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className="value">30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className="value">2</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className="value">16</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className="value">No</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className="value">Perf</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <BuyCTrainButton cTrainValue={'Buy 560 CTRAIN'} />
        </main>
        {/*=============TRAIN THREE ======================*/}
        <main className="train">
          <p className="sno">#3</p>
          <article className="train-image">
            <img src={epic} alt="epic train" />
          </article>
          <article className="bullet">
            <img src={epic_bullet} alt="epic train bullet" />
          </article>
          <section className="train-container">
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className="value">0</span>
                  </td>
                  <td width={'60%'} className="table-data">
                    <span className="icon">
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className="value">20</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className="value">0.00</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className="value">30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className="value">2</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className="value">16</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className="value">No</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className="value">Perf</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <BuyCTrainButton cTrainValue={'Buy 640 CTRAIN'} />
        </main>
        {/*=============TRAIN FOUR ======================*/}
        <main className="train">
          <p className="sno">#4</p>
          <article className="train-image">
            <img src={legendary} alt="legendary train" />
          </article>
          <article className="bullet">
            <img src={legendary_bullet} alt="legendary train bullet" />
          </article>
          <section className="train-container">
            <Table bordered hover>
              <tbody>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={level} alt="level" />
                    </span>
                    <span className="level">Level:&nbsp;</span>
                    <span className="value">0</span>
                  </td>
                  <td width={'60%'} className="table-data">
                    <span className="icon">
                      <img src={acceleration} alt="acceleration" />
                    </span>
                    <span className="acceleration">Acceleration:&nbsp;</span>
                    <span className="value">20</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={expo} alt="exp" />
                    </span>
                    <span className="expo">Exp:&nbsp;</span>
                    <span className="value">0.00</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={speed} alt="speed" />
                    </span>
                    <span className="speed">Speed:&nbsp;</span>
                    <span className="value">30.00</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={load} alt="load" />
                    </span>
                    <span className="load">Loads:&nbsp;</span>
                    <span className="value">2</span>
                  </td>
                  <td className="table-data">
                    <span className="icon">
                      <img src={brake} alt="brake" />
                    </span>
                    <span className="brake">Brakes:&nbsp;</span>
                    <span className="value">16</span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={fuel} alt="fuel" />
                    </span>
                    <span className="fuel">Fuel:&nbsp;</span>
                    <span className="value">No</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={station} alt="station" />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="table-data">
                    <span className="icon">
                      <img src={status} alt="status" />
                    </span>
                    <span className="status">Status:&nbsp;</span>
                    <span className="value">Perf</span>
                  </td>
                  <td className="table-data">
                    <span className="image-icon">
                      <img src={mechanic} alt="mechanic" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <BuyCTrainButton cTrainValue={'Buy 890 CTRAIN'} />
        </main>
      </div>
    </>
  );
};
