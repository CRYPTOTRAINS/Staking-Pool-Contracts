import './FuelModal.css';
import Modal from '../../common/Modal/Modal';
import user from '../../../assets/images/user.png';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

export default function ProfileModal(props) {
  // eslint-disable-next-line no-unused-vars
  const [transaction, setTransaction] = useState(true);

  return (
    <Modal className="profile-modal">
      <button className="close" onClick={props.close}></button>
      <section>
        <div className="info">
          <img className="user-icon" src={user} alt="user icon" />
          <div className="info-text">INFORMATION</div>
        </div>
        <div className="account-details">
          <div className="account-text">ACCOUNT:</div>
          <button className="logout-button">
            <div className="logout">
              <span>logout</span>
            </div>
          </button>
        </div>
        <div className="address-balance">
          <div className="address">
            Address <span>0xdv...fgg</span>
          </div>
          <hr className="hr" />
          <div className="balance">
            Balance <span>0</span>
          </div>
        </div>
        <div className="deposit-withdraw">
          <button className="deposit-button">
            <div className="deposit">
              <span>deposit</span>
            </div>
          </button>
          <button className="withdraw-button">
            <div className="withdraw">
              <span>withdraw</span>
            </div>
          </button>
        </div>
        <Table hover={true} borderless={true} bordered={false} className="transaction-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Status</th>
              <th>Value</th>
              <th>Note</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transaction ? (
              <tr>
                <td>Deposit</td>
                <td>Paid</td>
                <td>789</td>
                <td>For the train</td>
                <td>22rd/3/22</td>
              </tr>
            ) : (
              <div className="no-transaction">No Transaction</div>
            )}
          </tbody>
        </Table>
      </section>
    </Modal>
  );
}
