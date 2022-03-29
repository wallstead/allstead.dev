import styled from "styled-components";
import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Container = styled.div`
  background-color: #f0ede4;
  border-radius: 20px;
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SlideInnerContainer = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0 60px;
`;

export default function WorkSlider(props) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false}}
        loop={true}
        speed={500}
      >
        {props.children.map((child, index) => {
            return <SwiperSlide key={index}><SlideInnerContainer>{child}</SlideInnerContainer></SwiperSlide>;
        })}
      </Swiper>
    </Container>
  );
}
