import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./websiteContainer.css";
import Websitecards from "./websitecards.js";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/pagination/pagination.scss";
import {
  latestWebsites,
  restaurantWebsites,
  realEstateWebsites,
  petCareWebsites,
  professionalWebsites,
  NGOWebsites,
  ecommerceWebsites,
  smeWebsites,
} from "./websitesData";

function WebsiteContainer(props) {
  let activeCategory = props.category;
  const [isMobile, setIsMobile] = useState(false);
  const [slideChanged, setSlideChanged] = useState(false);

  let currentWebsites = [];
  if (activeCategory === "latest-list") {
    currentWebsites = latestWebsites;
  } else if (activeCategory === "restaurant-list") {
    currentWebsites = restaurantWebsites;
  } else if (activeCategory === "realestate-list") {
    currentWebsites = realEstateWebsites;
  } else if (activeCategory === "ngo-list") {
    currentWebsites = NGOWebsites;
  } else if (activeCategory === "ecommerce-list") {
    currentWebsites = ecommerceWebsites;
  } else if (activeCategory === "petcare-list") {
    currentWebsites = petCareWebsites;
  } else if (activeCategory === "professional-list") {
    currentWebsites = professionalWebsites;
  } else if (activeCategory === "sme-list") {
    currentWebsites = smeWebsites;
  }
  const websites = currentWebsites.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  useEffect(() => {
    window.screen.width <= 1110 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);
  useEffect(() => setIsMobile((st) => st), [props.flip]);

  function detectWindowSize() {
    window.innerWidth <= 1110 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;
  const onSlideChangeHandler = (flipHandler) => {
    flipHandler(false);
  };
  SwiperCore.use([Pagination]);
  if (!isMobile) {
    return (
      <>
        <div className="category " id="latest-list-webcards">
          {currentWebsites.map((card, index) => (
            <Websitecards
              key={`portfolio__${index}`}
              isMobile={false}
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              flip={props.flip}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Swiper
            onSlideChange={() => setSlideChanged((st) => !st)}
            pagination={{ clickable: true, dynamicBullets: true }}
            slidesPerView={1}
            spaceBetween={10}
          >
            {websites.map((card, index) => (
              <SwiperSlide
                className="carousel-drag d-flex flex-column"
                key={`${card[0].aboutWebsite.substr(0, 5)}_${index}`}
              >
                <Websitecards
                  isMobile={true}
                  className="carousel-web-card"
                  img={card[0].backgroundImgPath}
                  link={card[0].websiteLink}
                  about={card[0].aboutWebsite}
                  tech={card[0].technologies}
                  host={card[0].hosting}
                  flip={slideChanged}
                  categoryChanged={props.flip}
                />
                {card[1] && (
                  <Websitecards
                    isMobile={true}
                    className="carousel-web-card"
                    img={card[1].backgroundImgPath}
                    link={card[1].websiteLink}
                    about={card[1].aboutWebsite}
                    tech={card[1].technologies}
                    host={card[1].hosting}
                    flip={slideChanged}
                    categoryChanged={props.flip}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
}

export default WebsiteContainer;
