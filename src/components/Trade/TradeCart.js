import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import MyModal from "./MyModal";
import "./tradecart.css";
export default function TradeCart({ item }) {
  const [modalShow, setModalShow] = useState(false);
  const [poolType, setPoolType] = useState('');
 
  return (
    <>
      <MyModal type={poolType} item={item} show={modalShow} onHide={() => setModalShow(false)} />
      <div className="tradecartCont">
        <div className="myslider">
          <p className="headLine">{item.currency}/USDT</p>
          <p className="pool">Pool: {item.totalPool}</p>

          <div className="up">
            <p>{item.upPool?.toFixed(2)}$</p>
            <p>{item.upPayout?.toFixed(2)}x Payout</p>
          </div>
          <div className="mid">
            <p>Locked Price: {item.lockedPrice?.toFixed(2)}</p>
            <p className='green-color' style={{fontWeight:'bold'}}>Up by: $8.76</p>
            <p>Closed Price: {item.closedPrice?.toFixed(2)}</p>
          </div>
          <div className="down">
            <p>{item.downPool?.toFixed(2)}$</p>
            <p>{item.downPayout?.toFixed(2)}x Payout</p>
          </div>

          <button className="green-bg" onClick={() => {setModalShow(true); setPoolType('up')}}>
            Enter Up
          </button>
          <button className="red-bg" onClick={() => {setModalShow(true); setPoolType('down')}}>
            Enter Down
          </button>
        </div>
      </div>
    </>
  );
}
