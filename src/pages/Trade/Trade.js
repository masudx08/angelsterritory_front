import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../MainContext";

import {
  getCartsFetch,
  upPoolFetch,
  downPoolFetch,
} from "../../utils/services";
import Carousel from "react-multi-carousel";
import { responsive } from "../../utils/variables";
import MySlider from "../../components/MySlider/MySlider";
import { Form } from "react-bootstrap";

export default function Trade() {
  const { carts, setCarts, user, btcStream, ethStream, bnbStream, socket, setSelectedCoin, selectedCoin,  } = useContext(MyContext);

  useEffect(() => {
    getCartsFetch().then((res) => {
      setCarts(res);
    });
    if (socket.connected) {
      socket.on("updatedCart", (isCartUpdated) => {
        console.log(isCartUpdated, "is");
        if (isCartUpdated) {
          getCartsFetch().then((res) => {
            setCarts(res);
          });
        }
      });
    }
  }, [socket]);

  const upPoolHandler = (id, data) => {
    upPoolFetch(id, data);
  };
  const downPoolHandler = (id, data) => {
    downPoolFetch(id, data);
  };

  return (
    <div>
      {
        selectedCoin == 'BTC' && <h5>BTC/USDT : {btcStream}</h5>
      }
      {
        selectedCoin == 'ETH' && <h5>ETH/USDT : {ethStream}</h5>
      }
      {
        selectedCoin == 'BNB' && <h5>BNB/USDT : {bnbStream}</h5>
      }
      
      <h5>USDT: {user.wallet?.USDT}</h5>
      <Form.Select aria-label="Default select example" onChange={e=>setSelectedCoin(e.target.value)}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="BNB">BNB</option>
      </Form.Select>
      {carts && <MySlider items={carts} />}
    </div>
  );
}
