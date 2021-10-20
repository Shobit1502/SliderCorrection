import React, { useState } from "react";
import { useEffect } from "react";

import "./websiteContainer.css";
import Websitecards from "./websitecards";
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
  console.log(props);

  const [toFlip, setToFlip] = useState(true);

  useEffect(() => {
    console.log("Category changed");
    setToFlip(!toFlip);
  }, [props.activeCategory]);

  if (props.activeCategory === "latest-list") {
    return (
      <>
        <div className="category">
          {latestWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "restaurant-list") {
    return (
      <>
        <div className="category">
          {restaurantWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "realestate-list") {
    return (
      <>
        <div className="category">
          {realEstateWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "ngo-list") {
    return (
      <>
        <div className="category">
          {NGOWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "ecommerce-list") {
    return (
      <>
        <div className="category">
          {ecommerceWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "petcare-list") {
    return (
      <>
        <div className="category">
          {petCareWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "professional-list") {
    return (
      <>
        <div className="category">
          {professionalWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  } else if (props.activeCategory === "sme-list") {
    return (
      <>
        <div className="category">
          {smeWebsites.map((card) => (
            <Websitecards
              className="web-card"
              img={card.backgroundImgPath}
              link={card.websiteLink}
              about={card.aboutWebsite}
              tech={card.technologies}
              host={card.hosting}
              toFlip={toFlip}
            />
          ))}
        </div>
      </>
    );
  }
}

export default WebsiteContainer;
