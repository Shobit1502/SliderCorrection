import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./websiteContainer.css";
import Websitecards from "./websitecards.js";
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

  let activeCategoryId = `${activeCategory}-webcards`;

  // useEffect(() => {
  //   document.getElementById(activeCategoryId).style.display = "none";
  //   setTimeout(function () {
  //     document.getElementById(activeCategoryId).style.display = "flex";
  //   }, 50);
  // }, [props.flip]);

  const [isMobile, setIsMobile] = useState(false);
  // const evenWebsites = [];
  // const oddWebsites = [];
  // for (let i = 0; i < latestWebsites.length; i += 2) {
  //   evenWebsites.push(latestWebsites[i]);
  // }
  // for(let i = 1; i < latestWebsites.length; i += 2) {
  //   oddWebsites.push(latestWebsites[i])
  // }
  const websites = latestWebsites.reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);
  console.log(websites);

  useEffect(() => {
    window.screen.width <= 1110 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 1110 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  if (activeCategory == "latest-list") {
    if (!isMobile) {
      return (
        <>
          <div className="category " id="latest-list-webcards">
            {latestWebsites.map((card) => (
              <Websitecards
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
            <Carousel swipeable={true} showArrows={false}>
              {websites.map((card) => (
                <div className="carousel-drag d-flex flex-column">
                  <Websitecards
                    className="carousel-web-card"
                    img={card[0].backgroundImgPath}
                    link={card[0].websiteLink}
                    about={card[0].aboutWebsite}
                    tech={card[0].technologies}
                    host={card[0].hosting}
                    flip={props.flip}
                  />
                  <Websitecards
                    className="carousel-web-card"
                    img={card[1].backgroundImgPath}
                    link={card[1].websiteLink}
                    about={card[1].aboutWebsite}
                    tech={card[1].technologies}
                    host={card[1].hosting}
                    flip={props.flip}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      );
    }
  } else if (activeCategory == "restaurant-list") {
    return (
      <>
        <div className="category " id="restaurant-list-webcards">
          {restaurantWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "realestate-list") {
    return (
      <>
        <div className="category " id="realestate-list-webcards">
          {realEstateWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "ngo-list") {
    return (
      <>
        <div className="category " id="ngo-list-webcards">
          {NGOWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "ecommerce-list") {
    return (
      <>
        <div className="category " id="ecommerce-list-webcards">
          {ecommerceWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "petcare-list") {
    return (
      <>
        <div className="category " id="petcare-list-webcards">
          {petCareWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "professional-list") {
    return (
      <>
        <div className="category " id="professional-list-webcards">
          {professionalWebsites.map((card) => (
            <Websitecards
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
  } else if (activeCategory == "sme-list") {
    return (
      <>
        <div className="category " id="sme-list-webcards">
          {smeWebsites.map((card) => (
            <Websitecards
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
  }
}

export default WebsiteContainer;
