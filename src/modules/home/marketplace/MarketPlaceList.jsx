/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions
 */
/* eslint-disable  no-unused-vars
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
import { ethers } from 'ethers';
import { useEffect, useState} from "react";
import Web3Modal from "web3modal";
import MarketPlaceAddress from "../../../contracts/marketPlace-address.json";
import MarketPlaceArtifact from "../../../contracts/MarketPlace.json";
import CtrainAddress from "../../../contracts/ctrain-address.json";
import CtrainArtifact from "../../../contracts/Ctrain.json";

export const MarketList = () => {

  const [trains, setTrains] = useState([]);
  const [loadingState, setLoadingState] = useState('not-loaded');

  useEffect(() => {
    loadCtrains();
  }, []);

  async function loadCtrains() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection);
    const contract = new ethers.Contract(CtrainAddress.Ctrain, CtrainArtifact.abi, provider);
    const data = await contract.getOwnerTrains(MarketPlaceAddress.MarketPlace);
    const trains = await Promise.all(data.map(async i => {
      let train = {
        trainID: i.id.toString(),
        trainLevel: i.level.toString(),
        trainRarity: i.rarity.toString(),
        trainFuel: i.fuel,
        trainAcceleration: i.acceleration,
        trainSpeed: i.speed,
        trainBrakes: i.brakes,
        trainLoads: i.loads,
      }

      return train;
  }));

    setTrains(trains);
    setLoadingState('loaded');
  }


  async function buyCtrain() { //ctrain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MarketPlaceAddress.MarketPlace, MarketPlaceArtifact.abi, signer);
    
    const transaction = await contract.buy(CtrainAddress.Ctrain, 0); // ctrain.itemId
    console.log("called")
    await transaction.wait();
    loadCtrains();
  }

  
if (loadingState === 'loaded' && !trains.length) return (<h2>There are currently no Ctrains in the marketplace</h2>);
  
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
            <option selected value="Common">
              ALL TRAINS
            </option>
            <option value="Rare">Saab</option>
            <option value="Epic">Mercedes</option>
            <option value="Legendary">Audi</option>
          </select>
          <select name="select-price" id="select-price" className="price-select">
            <option selected value="Common">
              LOWEST PRICE
            </option>
            <option value="Rare">Saab</option>
            <option value="Epic">Mercedes</option>
            <option value="Legendary">Audi</option>
          </select>
        </article>
      </section>
      
        <main className="train-list">
         
          {
            trains.map((train, i) => (
              <div className="train" key={train.trainID}>
               <p className="sno">{train.trainID}</p>
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
                            <span className="value">{train.trainLevel}</span>
                         </td>
                         <td width={'60%'} className="table-data">
                            <span className="icon">
                              <img src={acceleration} alt="acceleration" />
                            </span>
                           <span className="acceleration">Acceleration:&nbsp;</span>
                            <span className="value">{train.trainAcceleration}</span>
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
                            <span className="value">{train.trainSpeed}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="table-data">
                           <span className="icon">
                              <img src={load} alt="load" />
                
                            </span>
                            <span className="load">Loads:&nbsp;</span>
                            <span className="value">{train. trainLoads}</span>
                          </td>
                          <td className="table-data">
                            <span className="icon">
                              <img src={brake} alt="brake" />
                            </span>
                            <span className="brake">Brakes:&nbsp;</span>
                            <span className="value">{train.trainBrakes}</span>
                          </td>
                       </tr>
                        <tr>
                          <td className="table-data">
                            <span className="icon">
                              <img src={fuel} alt="fuel" />
                            </span>
                            <span className="fuel">Fuel:&nbsp;</span>
                            <span className="value">{train.trainFuel}</span>
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
                 <BuyCTrainButton cTrainValue={'Buy 540 CTRAIN'} onClick={() => buyCtrain()} />
              </div>
            ))
          }
        </main>     
    </>
  );
};
