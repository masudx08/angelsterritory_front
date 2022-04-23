import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { MyContext } from "../../MainContext";
import MyModal from "./MyModal";
import "./tradecart.css";
export default function TradeCart({ item }) {
  const { btcStream } = useContext(MyContext);
  const [modalShow, setModalShow] = useState(false);
  const [poolType, setPoolType] = useState("");

  return (
    <>
      <MyModal
        type={poolType}
        item={item}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
            {!item.closedPrice && btcStream > item.lockedPrice && (
              <p className="green-color" style={{ fontWeight: "bold" }}>
                Up by: ${(btcStream - item.lockedPrice).toFixed(2)}{" "}
              </p>
            )}
            {!item.closedPrice && btcStream < item.lockedPrice && (
              <p className="red-color" style={{ fontWeight: "bold" }}>
                Down by: ${(item.lockedPrice - btcStream).toFixed(2)}{" "}
              </p>
            )}

            {
              item.closedPrice && item.lockedPrice < item.closedPrice && 
              (
                <p className="green-color" style={{ fontWeight: "bold" }}>
                  Up by: ${(item.closedPrice - item.lockedPrice).toFixed(2)}{" "}
                </p>
              )
            }
            {
              item.closedPrice && item.lockedPrice > item.closedPrice && 
              (
                <p className="red-color" style={{ fontWeight: "bold" }}>
                  Down by: ${(item.lockedPrice - item.closedPrice).toFixed(2)}{" "}
                </p>
              )
            }
            

            <p>Closed Price: {item.closedPrice?.toFixed(2)}</p>
            {/* <p>current price : {btcStream}</p> */}
          </div>
          <div className="down">
            <p>{item.downPool?.toFixed(2)}$</p>
            <p>{item.downPayout?.toFixed(2)}x Payout</p>
          </div>

          <button
            className="green-bg"
            onClick={() => {
              setModalShow(true);
              setPoolType("up");
            }}
          >
            Enter Up
          </button>
          <button
            className="red-bg"
            onClick={() => {
              setModalShow(true);
              setPoolType("down");
            }}
          >
            Enter Down
          </button>
        </div>
      </div>
    </>
  );
}
