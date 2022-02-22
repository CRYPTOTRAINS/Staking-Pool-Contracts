/* eslint-disable  no-unused-vars
 */

import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import buy_ticket from '../../../assets/images/buy.png';
import BuyCTrainButton from '../../common/BuyCTrainButton/BuyCTrainButton';
import { ethers } from "ethers";
import CtrainAddress from "../../../contracts/ctrain-address.json";
import CtrainArtifact from "../../../contracts/Ctrain.json";
import MarketPlaceAddress from "../../../contracts/marketPlace-address.json";
import MarketPlaceArtifact from "../../../contracts/MarketPlace.json";
import ENMTAddress from "../../../contracts/ENMT-address.json";
import ENMTArtifact from "../../../contracts/ENMT.json";
import { useState } from "react";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function BuyTicketModal(props) {
  const [status, setStatus] = useState("");
  const [formNumber, updateFormNumber] = useState({no:0});


  async function sell() {
    
    const no = formNumber;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(MarketPlaceAddress.MarketPlace, MarketPlaceArtifact.abi, signer);
    const token = new ethers.Contract(ENMTAddress.ENMT, ENMTArtifact.abi, signer);

    const num = no.no;
    const price = (num * 1000000000000000000).toLocaleString("fullwide", { useGrouping: false });
    
    const tokenId = 0;

    try {
      const tx = await token.approve(MarketPlaceAddress.MarketPlace, price);
      await tx.wait();
      const transaction = await contract.sell(CtrainAddress.Ctrain, tokenId, price);
      const receipt = await transaction.wait();
        if (receipt.status === 0) {
          setStatus("Transaction failed");
          throw new Error("Transaction failed");
        } else {
          setStatus("Transaction successful");
        }

    } catch(error) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        // setStatus(`${error.data.message}`);
        return;
      }
      // setStatus(`${error.data.message}`);
    }
  }

  return (
    <Modal className="modal">
      <button className="close" onClick={props.close}></button>
      {/* <img className="buy-ticket" src={buy_ticket} alt="buy ticket" /> */}
      <p className="quantity">Price:  <input placeholder="600" required className="no"
                  onChange={e => updateFormNumber({...formNumber, no: e.target.value})}  /></p>
      <div className="buy-button">
        <BuyCTrainButton handleOnClick={props.close} cTrainValue={'Buy Train'} onClick={sell} onKeyDown={sell}  />
      </div>
    </Modal>
  );
}
