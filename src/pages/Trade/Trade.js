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

export default function Trade() {
  const { carts, setCarts } = useContext(MyContext);

  useEffect(() => {
    getCartsFetch().then((res) => {
      setCarts(res);
    });
  }, []);

  const upPoolHandler = (id, data) => {
    upPoolFetch(id, data);
  };
  const downPoolHandler = (id, data) => {
    downPoolFetch(id, data);
  };

  return (
    <div>
    {
      carts &&  <MySlider items={carts} />
    }
    </div>
  );
}
