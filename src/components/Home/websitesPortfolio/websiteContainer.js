import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    document.getElementById(activeCategoryId).style.display = "none";
    setTimeout(function () {
      document.getElementById(activeCategoryId).style.display = "flex";
    }, 50);
  }, [props.flip]);

  if (activeCategory == "latest-list") {
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
