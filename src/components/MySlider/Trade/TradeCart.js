import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import MyModal from "./MyModal";

export default function TradeCart({ item }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div>
        <div className="myslider">
          <p>{item.currency}/ usdt</p>
          <p>pool: {item.totalPool}</p>
          <p>Locked Price: {item.lockedPrice}</p>
          <p>Closed Price: {item.closedPrice}</p>
          <p>Up Payout: {item.upPayout}</p>
          <p>Down Payout: {item.downPayout}</p>
          <button onClick={() => setModalShow(true)}>Enter Up</button>
          <button onClick={() => setModalShow(true)}>Enter Down</button>
        </div>
      </div>
    </>
  );
}
