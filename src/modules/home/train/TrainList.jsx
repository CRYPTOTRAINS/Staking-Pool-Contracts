/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
import './TrainList.css';
import './TrainItem.css';
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

import ModalRoot from '../../common/Modal/ModalRoot';
import ModalService from '../../../services/ModalService';
import DispatchModal from '../TrainModals/DispatchModal';
import FuelModal from '../TrainModals/FuelModal';
import BuyTicketModal from '../TrainModals/BuyTicketModal';
import RepairModal from '../TrainModals/RepairModal';
import UnboxModal from '../TrainModals/UnboxModal';
import WinnerModal from '../TrainModals/WinnerModal';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export const TrainList = () => {
  const addModal = () => {
    ModalService.open(DispatchModal);
  };

  const addFuelModal = () => {
    ModalService.open(FuelModal);
  };

  const addBuyTicketModal = () => {
    ModalService.open(BuyTicketModal);
  };

  const addRepairModal = () => {
    ModalService.open(RepairModal);
  };

  const addUnboxModal = () => {
    ModalService.open(UnboxModal);
  };

  const addWinnerModal = () => {
    ModalService.open(WinnerModal);
  };

  return (
    <>
      <ModalRoot />
      <section className="purchase">
        <article className="ticket">
          <div className="ticket-image"></div>
          <button className="purchase-button" onClick={addBuyTicketModal}>
            <div className="buy-ticket-image"></div>
          </button>
        </article>
        <article className="box">
          <div className="box-image"></div>
          <button className="purchase-button" onClick={addUnboxModal}>
            <div className="unbox-image"></div>
          </button>
        </article>
      </section>
      <h2 className="title">Your Trains</h2>
      <div className="train-list">
        {/*=============TRAIN ONE ======================*/}
        <main className="train">
          <p className="sno">#1</p>
          <img src={sell} className="sell" alt="sell" />
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to Buy more Fuel</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addFuelModal}>
                          <img src={station} alt="station" />
                        </button>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to repair train</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addRepairModal}>
                          <img src={mechanic} alt="mechanic" />
                        </button>
                      </OverlayTrigger>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className="train-button">
            <button className="dispatch" onClick={addModal}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className="dispatch" onClick={() => console.log('clicked')}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
        {/*=============TRAIN TWO ======================*/}
        <main className="train">
          <p className="sno">#2</p>
          <img src={sell} className="sell" alt="sell" />
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to Buy more Fuel</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addFuelModal}>
                          <img src={station} alt="station" />
                        </button>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to repair train</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addRepairModal}>
                          <img src={mechanic} alt="mechanic" />
                        </button>
                      </OverlayTrigger>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className="train-button">
            <button className="dispatch" onClick={addModal}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className="dispatch" onClick={() => console.log('clicked')}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
        {/*=============TRAIN THREE ======================*/}
        <main className="train">
          <p className="sno">#3</p>
          <img src={sell} className="sell" alt="sell" />
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to Buy more Fuel</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addFuelModal}>
                          <img src={station} alt="station" />
                        </button>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to repair train</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addRepairModal}>
                          <img src={mechanic} alt="mechanic" />
                        </button>
                      </OverlayTrigger>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className="train-button">
            <button className="dispatch" onClick={addModal}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className="dispatch" onClick={() => console.log('clicked')}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
        {/*=============TRAIN FOUR ======================*/}
        <main className="train">
          <p className="sno">#4</p>
          <img src={sell} className="sell" alt="sell" />
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to Buy more Fuel</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addFuelModal}>
                          <img src={station} alt="station" />
                        </button>
                      </OverlayTrigger>
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
                      <OverlayTrigger
                        delay={{ hide: 450, show: 300 }}
                        overlay={(props) => <Tooltip {...props}>Click to repair train</Tooltip>}
                        placement="bottom"
                      >
                        <button className="station-button" onClick={addWinnerModal}>
                          <img src={mechanic} alt="mechanic" />
                        </button>
                      </OverlayTrigger>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </section>
          <section className="train-button">
            <button className="dispatch" onClick={addModal}>
              <img src={dispatch} alt="dispatch button" />
            </button>
            <button className="dispatch" onClick={() => console.log('clicked')}>
              <img src={reward} alt="reward button" />
            </button>
          </section>
        </main>
      </div>
    </>
  );
};
