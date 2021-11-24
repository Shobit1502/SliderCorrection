import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import AboutData from "./AboutData";
import PersonCardWrapper from "./PersonCardWrapper";

export default function AboutMobile() {
  return (
    <Swiper>
      {AboutData.map((person) => (
        <SwiperSlide>
          <PersonCardWrapper person={person} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
