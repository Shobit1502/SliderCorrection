import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Navigation, Pagination, EffectCards } from "swiper";
import ServiceSummaryData from "./ServiceSummaryData";
import ReactMarkdown from "react-markdown";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/navigation/navigation.scss";
import "./ServiceSummary.css";
SwiperCore.use([Pagination, Navigation, EffectCards]);
export default function ServiceSummary() {
  return (
    <div className="slider">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        navigation={true}
        className="box swiper-container aos"
        cardsEffect={true}
        longSwipes={true}
        id="main"
      >
        {ServiceSummaryData.map((data) => (
          <SwiperSlide>
            <div className="sliderheading">{data.title}</div>
            <div className="wrapper">
              <div id="column1">
                <img
                  src={data.desktopImage}
                  alt={data.title}
                  className="responsive img-fluid"
                />
                <img
                  src={data.mobileImage}
                  alt={data.title}
                  className="responsive_mob img-fluid"
                />
              </div>
              <div id="column2" style={{ userSelect: "text" }}>
                <ReactMarkdown children={data.content} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
