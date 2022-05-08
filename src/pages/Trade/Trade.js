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
  const { carts, setCarts, user, btcStream, ethStream, bnbStream, socket, setSelectedCoin, selectedCoin, selectedTime, setSelectedTime } = useContext(MyContext);
  // const OneMinute = 1000*10
  // const FiveMinute = 1000*20
  // const FifteenMinute = 1000*30


  const OneMinute = 1000*60
  const FiveMinute = 1000*60*5
  const FifteenMinute = 1000*60*15
  const HalfHour = 1000*60*30
  const OneHour = 1000*60*60
  const OneDay = 1000*60*60*24
  
  useEffect(() => {
    getCartsFetch(selectedCoin, selectedTime).then((res) => {
      setCarts(res);
    });
  }, [selectedCoin, selectedTime]);

  
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
      <Form.Select aria-label="Default select example" onChange={e=>setSelectedTime(Number(e.target.value))}>
        <option value={OneMinute}>1 Min</option>
        <option value={FiveMinute}>5 Min</option>
        <option value={FifteenMinute}>15 Min</option>
      </Form.Select>
      {carts && <MySlider items={carts} />}
    </div>
  );
}
