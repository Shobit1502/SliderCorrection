import React from "react";

import "./websitesPortfolio.css";
import Websitecards from "./websitecards.js";
import {
  latestWebsites,
  restaurantWebsites,
  realEstateWebsites,
  petCareWebsites,
  portfolioWebsites,
  professionalWebsites,
  NGOWebsites,
  ecommerceWebsites,
} from "./websitesInfo";

function WebsitesPortfolio({ refProp }) {
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
                <li data-filter=".filter-latest" className="filter-active">
                  Latest
                </li>
                <li
                  data-filter=".filter-restaurant"
                  title="Bakery, Cafe, Catering, Food Trucks, Restaurant"
                >
                  Restaurant
                </li>
                <li
                  data-filter=".filter-realestate"
                  title="Construction, Modular housing, Turnkey Projects"
                >
                  Real Estate
                </li>
                <li
                  data-filter=".filter-ngo"
                  title="Animal Care, Environment, Poverty Alleviation, Human Rights"
                >
                  NGO
                </li>
                <li
                  data-filter=".filter-portfolio"
                  title="Blog, CV, Advertisement, Artist, Printing"
                >
                  Portfolio
                </li>
                <li
                  data-filter=".filter-ecommerce"
                  title="Clothing, Dried Fruits, NGO, Restaurant"
                >
                  eCommerce
                </li>
                <li data-filter=".filter-petcare">Pet Care</li>
                <li
                  data-filter=".filter-professional"
                  title="Accountant, Lawyer, Educator"
                >
                  Professional
                </li>
              </ul>
            </div>
          </div>
          <div id="website-cards">
            {latestWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {restaurantWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {realEstateWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {NGOWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {portfolioWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {ecommerceWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {petCareWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
            {professionalWebsites.map((card) => (
              <Websitecards
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsitesPortfolio;
