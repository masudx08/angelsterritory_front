import React from "react";
import { Modal } from "react-bootstrap";
import './mymodal.css'
export default function MyModal(props) {
  return (
    <div>
      <Modal
        {...props}
        // size="sm"
        dialogClassName="mymodal-size"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Body>
          <h4>Setup Position</h4>
          <p>Entry Coin</p>
          <input type="text" value="USDT" />
          <p>USDT Amount</p>
          <input type="text" placeholder="Enter your amount" />
          <div>
            <p>% of your balance</p>
            <p>Available balance: 0.919 USDT</p>
            <p>Remaining balance: 0.919 USDT</p>
          </div>
          <h4>Lock & Enter</h4>
        </Modal.Body>
      </Modal>
    </div>
  );
}
