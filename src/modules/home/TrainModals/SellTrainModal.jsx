/* eslint-disable  no-unused-vars
 */

import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_train from '../../../assets/images/legends.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';
import { ethers } from "ethers";
import CtrainAddress from "../../../contracts/ctrain-address.json";
import MarketPlaceAddress from "../../../contracts/marketPlace-address.json";
import MarketPlaceArtifact from "../../../contracts/MarketPlace.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";
import { useState } from "react";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function BuyTicketModal(props) {
  const [formNumber, updateFormNumber] = useState({no:0});

  async function sell() {
    
    const no = formNumber;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MarketPlaceAddress.MarketPlace, MarketPlaceArtifact.abi, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);

    const num = no.no;
    const price = (num * 1000000000000000000).toLocaleString("fullwide", { useGrouping: false });
    
    const tokenId = 1;

    try {
      const tx = await token.approve(MarketPlaceAddress.MarketPlace, price);
      await tx.wait();
      const transaction = await contract.sell(CtrainAddress.Ctrain, tokenId, price);
      const receipt = await transaction.wait();
        if (receipt.status === 0) {
          alert("Transaction failed");
          throw new Error("Transaction failed");
        } else {
          alert("Transaction successful");
        }

    } catch(error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        alert(`${error.message}`);
        return;
      }
      alert(`${error.message}`);
    }
  }

  return (
    <Modal className="modal">
      <button className="close" onClick={props.close}></button>
      <img className="buy-train" src={buy_train} alt="buy train" />
      <p className="quantity">Price:  <input placeholder="600" required className="nom"
                  onChange={e => updateFormNumber({...formNumber, no: e.target.value})}  /></p>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close, sell} cTrainValue={'Sell Train'}   />
      </div>
    </Modal>
  );
}
