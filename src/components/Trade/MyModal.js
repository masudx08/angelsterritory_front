import React, { useContext, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { MyContext } from "../../MainContext";
import { downPoolFetch, upPoolFetch } from "../../utils/services";
import "./mymodal.css";
export default function MyModal(props) {
  const [amount, setAmount]  = useState(1)
  const {user} = useContext(MyContext)

 
  function handleEnter(){
    if(props.type == 'up'){
      upPoolFetch(props.item.id, amount)
      .then(res=>{
        console.log(res, 'up')
      })
    }
    if(props.type == 'down'){
      downPoolFetch(props.item.id, amount)
      .then(res=>{
        console.log(res, 'down')
      })
    }
  }
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
            </Form.Select>
            <div>
              <p className="small-text mt-4 mb-1">USDT Amount</p>
              <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" max='100' placeholder="Enter your amount" />
              <div className='amount_btn mt-2'>
                <p onClick={()=>setAmount(1)}>Min</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 0.25 * 0.01)}>0.25%</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 0.5 * 0.01)}>0.5%</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 1 * 0.01)}>1%</p>
              </div>
              <div className='amount_btn'>
                <p onClick={()=>setAmount(user.wallet.USDT * 2.5 * 0.01)}>2.5%</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 5 * 0.01)}>5%</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 10 * 0.01)}>10%</p>
                <p onClick={()=>setAmount(user.wallet.USDT * 25 * 0.01)}>25%</p>
              </div>
            </div>
            <div className="mt-4">
              <p>Available balance: {user.wallet?.USDT} USDT</p>
              <p>Remaining balance: {user.wallet?.USDT - amount}</p>
            </div>
            <h4 className="primary-color  text-end cursor" onClick={handleEnter}>Lock & Enter</h4>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
