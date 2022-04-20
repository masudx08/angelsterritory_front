import React from "react";
import { Form, Modal } from "react-bootstrap";
import "./mymodal.css";
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
          <div className="mymodalCont">
            <h3 className="white-color text-center mb-3">Setup Position</h3>
            <p className="small-text mb-1">Entry Coin</p>
            <Form.Select aria-label="Default select example">
              <option value="USDT">USDT</option>
              <option value="BNB">BNB</option>
            </Form.Select>
            <div>
              <p className="small-text mt-4 mb-1">USDT Amount</p>
              <input type="text" placeholder="Enter your amount" />
              <div className='amount_btn mt-2'>
                <p>Min</p>
                <p>0.25%</p>
                <p>0.5%</p>
                <p>1%</p>
              </div>
              <div className='amount_btn'>
                <p>2.5%</p>
                <p>5%</p>
                <p>10%</p>
                <p>25%</p>
              </div>
            </div>
            <div className="mt-4">
              <p>% of your balance</p>
              <p>Available balance: 0.919 USDT</p>
              <p>Remaining balance: 0.919 USDT</p>
            </div>
            <h4 className="primary-color  text-end cursor">Lock & Enter</h4>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
