import React from "react";

import "./websitesPortfolio.css";
import Websitecards from "./websitecards.js";
import WebsiteContainer from "./websiteContainer";
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
  const [activeCategory, setActiveCategory] = useState("latest-list");

  const handleListItemClick = (e) => {
    let preActive = activeCategory;
    let currActive = e.target.id;
    // let preId = `${preActive}-webcards`;
    // let currId = `${currActive}-webcards`;
    if (preActive != currActive) {
      document.getElementById(preActive).classList.remove("filter-active");
      // document.getElementById(preId).style.display = "none";
      document.getElementById(currActive).classList.add("filter-active");
      // document.getElementById(currId).style.display = "flex";
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

          <WebsiteContainer activeCategory={activeCategory} />

          {/* <div id="website-cards">
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
                    toFlip={true}
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
                    toFlip={true}
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
                background={card.backgroundImg}
                link={card.websiteLink}
                about={card.aboutWebsite}
                tech={card.technologies}
              />
            ))}
          </div>*/}
        </div>
      </section>
    </>
  );
}

export default WebsitesPortfolio;
