import React, { useState } from "react";

import "./websitesPortfolio.css";
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

function WebsitesPortfolio({ refProp }) {
  const [activeCategory, setActiveCategory] = useState("latest-list");

  const handleListItemClick = (e) => {
    console.log(e.target.id);
    let preActive = activeCategory;
    let preActiveWebcards = `${preActive}-webcards`;
    let currActive = e.target.id;
    let currActiveWebcards = `${currActive}-webcards`;
    if (preActive != currActive) {
      document.getElementById(preActive).classList.remove("filter-active");
      document.getElementById(preActiveWebcards).style.display = "none";
      document.getElementById(currActive).classList.add("filter-active");
      document.getElementById(currActiveWebcards).style.display = "flex";
      setActiveCategory(currActive);
    }
  };

  return (
    <>
      <section
        ref={refProp}
        id={"ourwebsites"}
        className={"our-websites-section"}
      >
        <div className={"our-websites-container fixed-container-size"}>
          <div>
            <h1 className={"section-title"}>CHECK OUR PORTFOLIO</h1>
            <p className={"section-heading"}>WEBSITES</p>
            <p className={"section-description"}>
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="adj col-lg-12 d-flex justify-content-center">
              <ul id="website-filters">
                <li
                  data-filter=".filter-latest"
                  className="filter-active"
                  id="latest-list"
                  onClick={handleListItemClick}
                >
                  Latest
                </li>
                <li
                  data-filter=".filter-restaurant"
                  title="Bakery, Cafe, Catering, Food Trucks, Restaurant"
                  id="restaurant-list"
                  onClick={handleListItemClick}
                >
                  Restaurant
                </li>
                <li
                  data-filter=".filter-realestate"
                  title="Construction, Modular housing, Turnkey Projects"
                  id="realestate-list"
                  onClick={handleListItemClick}
                >
                  Real Estate
                </li>
                <li
                  data-filter=".filter-ngo"
                  title="Animal Care, Environment, Poverty Alleviation, Human Rights"
                  id="ngo-list"
                  onClick={handleListItemClick}
                >
                  NGO
                </li>
                <li
                  data-filter=".filter-ecommerce"
                  title="Clothing, Dried Fruits, NGO, Restaurant"
                  id="ecommerce-list"
                  onClick={handleListItemClick}
                >
                  eCommerce
                </li>
                <li
                  data-filter=".filter-petcare"
                  id="petcare-list"
                  onClick={handleListItemClick}
                >
                  Pet Care
                </li>
                <li
                  data-filter=".filter-professional"
                  title="Accountant, Lawyer, Educator"
                  id="professional-list"
                  onClick={handleListItemClick}
                >
                  Professional
                </li>
                <li
                  data-filter=".filter-sme"
                  title="Blog, CV, Advertisement, Artist, Printing"
                  id="sme-list"
                  onClick={handleListItemClick}
                >
                  SME
                </li>
              </ul>
            </div>
          </div>
          <div id="website-cards">
            <div className="container">
              <div className="category " id="latest-list-webcards">
                {latestWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div
                className="category "
                id="restaurant-list-webcards"
                style={{ display: "none" }}
              >
                {restaurantWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div
                className="category "
                id="realestate-list-webcards"
                style={{ display: "none" }}
              >
                {realEstateWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div
                className="category "
                id="ngo-list-webcards"
                style={{ display: "none" }}
              >
                {NGOWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div
                className="category "
                id="ecommerce-list-webcards"
                style={{ display: "none" }}
              >
                {ecommerceWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div className="container">
              <div
                className="category "
                id="petcare-list-webcards"
                style={{ display: "none" }}
              >
                {petCareWebsites.map((card) => (
                  <Websitecards
                    className="web-card"
                    img={card.backgroundImgPath}
                    link={card.websiteLink}
                    about={card.aboutWebsite}
                    tech={card.technologies}
                    host={card.hosting}
                  />
                ))}
              </div>
            </div>
            <div
              className="category "
              id="professional-list-webcards"
              style={{ display: "none" }}
            >
              {professionalWebsites.map((card) => (
                <Websitecards
                  className="web-card"
                  img={card.backgroundImgPath}
                  link={card.websiteLink}
                  about={card.aboutWebsite}
                  tech={card.technologies}
                  host={card.hosting}
                />
              ))}
            </div>
          </div>
          <div
            className="category "
            id="sme-list-webcards"
            style={{ display: "none" }}
          >
            {smeWebsites.map((card) => (
              <Websitecards
                className="web-card"
                img={card.backgroundImgPath}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
                host={card.hosting}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsitesPortfolio;
