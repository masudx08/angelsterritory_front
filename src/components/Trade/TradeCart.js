import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { MyContext } from "../../MainContext";
import MyModal from "./MyModal";
import "./tradecart.css";
export default function TradeCart({ item }) {
  const { btcStream, ethStream, bnbStream, selectedCoin } =
    useContext(MyContext);
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
          {/* <p>{((new Date().getTime() - new Date(item.startTime).getTime())/1000).toFixed(0)}</p> */}
          <p>
            {/* {
              moment(( new Date(item.startTime).getTime()) - (new Date().getTime())).format('ss')
            } */}
            {
              moment(((new Date().getTime() - new Date(item.startTime).getTime()))).format('mm:ss')
            }
          </p>
          <p className="pool">Pool: {item.totalPool}</p>

          <div className="up">
            <p>{item.upPool?.toFixed(2)}$</p>
            <p>{item.upPayout?.toFixed(2)}x Payout</p>
          </div>
          <div className="mid">
            <p>Locked Price: {item.lockedPrice?.toFixed(2)}</p>

            {
              selectedCoin == 'BTC' && !item.closedPrice && btcStream > item.lockedPrice && (
                <p className="green-color" style={{ fontWeight: "bold" }}>
                  Up by: ${(btcStream - item.lockedPrice).toFixed(4)}{" "}
                </p>
              )
            }
            {
              selectedCoin == 'BTC' && !item.closedPrice && btcStream < item.lockedPrice && (
                <p className="red-color" style={{ fontWeight: "bold" }}>
                  Down by: ${(item.lockedPrice - btcStream).toFixed(4)}{" "}
                </p>
              )
            }
            {
              selectedCoin == 'ETH' && !item.closedPrice && ethStream > item.lockedPrice && (
                <p className="green-color" style={{ fontWeight: "bold" }}>
                  Up by: ${(ethStream - item.lockedPrice).toFixed(4)}{" "}
                </p>
              )
            }
            {
              selectedCoin == 'ETH' && !item.closedPrice && ethStream < item.lockedPrice && (
                <p className="red-color" style={{ fontWeight: "bold" }}>
                  Down by: ${(item.lockedPrice - ethStream).toFixed(4)}{" "}
                </p>
              )
            }
            {
              selectedCoin == 'BNB' && !item.closedPrice && bnbStream > item.lockedPrice && (
                <p className="green-color" style={{ fontWeight: "bold" }}>
                  Up by: ${(bnbStream - item.lockedPrice).toFixed(4)}{" "}
                </p>
              )
            }
            {
              selectedCoin == 'BNB' && !item.closedPrice && bnbStream < item.lockedPrice && (
                <p className="red-color" style={{ fontWeight: "bold" }}>
                  Down by: ${(item.lockedPrice - bnbStream).toFixed(4)}{" "}
                </p>
              )
            }
            



            {item.closedPrice && item.lockedPrice < item.closedPrice && (
              <p className="green-color" style={{ fontWeight: "bold" }}>
                Up by: ${(item.closedPrice - item.lockedPrice).toFixed(4)}{" "}
              </p>
            )}
            {item.closedPrice && item.lockedPrice > item.closedPrice && (
              <p className="red-color" style={{ fontWeight: "bold" }}>
                Down by: ${(item.lockedPrice - item.closedPrice).toFixed(4)}{" "}
              </p>
            )}

            {item.closedPrice && (
              <p>Closed Price: {item.closedPrice?.toFixed(2)}</p>
            )}
            {!item.closedPrice && (
              <p>
                Current price:  {' '}
                {
                  selectedCoin == 'BTC' &&
                  Number(btcStream).toFixed(2)
                }
                {
                  selectedCoin == 'ETH' &&
                  Number(ethStream).toFixed(2)
                }
                {
                  selectedCoin == 'BNB' &&
                  Number(bnbStream).toFixed(2)
                }
              </p>
            )}
          </div>
          <div className="down">
            <p>{item.downPool?.toFixed(2)}$</p>
            <p>{item.downPayout?.toFixed(2)}x Payout</p>
          </div>
          {!item.closedPrice ? (
            <>
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
            </>
          ) : (
            <>
              <button className="gray-bg" style={{ cursor: "context-menu" }}>
                ...
              </button>
              <button className="gray-bg" style={{ cursor: "context-menu" }}>
                ...
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
