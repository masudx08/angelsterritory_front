import React, { useRef } from "react";
import "./myslider.css";
import Carousel from "react-multi-carousel";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { responsive } from "../../utils/variables";
import { Container, Modal } from "react-bootstrap";
import TradeCart from "../Trade/TradeCart";

export default function MySlider({ items }) {
  console.log(items);
  const MyCarousel = useRef();

  function handleNext() {
    const nextSlide = MyCarousel.current.state.currentSlide + 1;
    MyCarousel.current.next();
    MyCarousel.current.goToSlide(nextSlide);
  }
  function handlePrev() {
    const prevSlide = MyCarousel.current.state.currentSlide - 1;
    MyCarousel.current.previous();
    MyCarousel.current.goToSlide(prevSlide);
  }
  return (
    <Container>
      <div className="MySliderCarousel">
        <div className="prev__btn">
          <IoIosArrowDropleft onClick={handlePrev} />
        </div>
        <Carousel
          autoPlaySpeed={60000}
          ref={MyCarousel}
          responsive={responsive}
        >
          {items.map((item, index) => {
            return <TradeCart item={item} key={index} />
          })}
        </Carousel>
        <div className="next__btn">
          <IoIosArrowDropright onClick={handleNext} />
        </div>
      </div>
    </Container>
  );
}
