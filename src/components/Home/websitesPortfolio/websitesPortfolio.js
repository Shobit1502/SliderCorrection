import React, { useState } from "react";

import "./websitesPortfolio.css";
import WebsiteContainer from "./websiteContainer";

function WebsitesPortfolio({ refProp }) {
  const [activeCategory, setActiveCategory] = useState("latest-list");
  const [toFlip, setToFlip] = useState(false);

  const handleListItemClick = (e) => {
    // console.log(e);
    let preActive = activeCategory;
    let currActive = e.target.id;
    console.log(currActive);
    if (preActive != currActive) {
      document.getElementById(preActive).classList.remove("filter-active");
      document.getElementById(currActive).classList.add("filter-active");
      setToFlip(!toFlip);
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
          <div className="row me-0" data-aos="fade-up" data-aos-delay="100">
            <div className="adj col-lg-12 d-flex justify-content-center">
              <ul id="website-filters">
                <li
                  id="latest-list"
                  data-filter=".filter-latest"
                  className="filter-active"
                  onClick={handleListItemClick}
                >
                  Latest
                </li>
                <li
                  id="restaurant-list"
                  data-filter=".filter-restaurant"
                  title="Bakery, Cafe, Catering, Food Trucks, Restaurant"
                  onClick={handleListItemClick}
                >
                  Restaurant
                </li>
                <li
                  id="realestate-list"
                  data-filter=".filter-realestate"
                  title="Construction, Modular housing, Turnkey Projects"
                  onClick={handleListItemClick}
                >
                  Real Estate
                </li>
                <li
                  id="ngo-list"
                  data-filter=".filter-ngo"
                  title="Animal Care, Environment, Poverty Alleviation, Human Rights"
                  onClick={handleListItemClick}
                >
                  NGO
                </li>
                <li
                  id="ecommerce-list"
                  data-filter=".filter-ecommerce"
                  title="Clothing, Dried Fruits, NGO, Restaurant"
                  onClick={handleListItemClick}
                >
                  eCommerce
                </li>
                <li
                  data-filter=".filter-petcare"
                  onClick={handleListItemClick}
                  id="petcare-list"
                >
                  Pet Care
                </li>
                <li
                  id="professional-list"
                  data-filter=".filter-professional"
                  title="Accountant, Lawyer, Educator"
                  onClick={handleListItemClick}
                >
                  Professional
                </li>
                <li
                  id="sme-list"
                  data-filter=".filter-professional"
                  title="Accountant, Lawyer, Educator"
                  onClick={handleListItemClick}
                >
                  SME
                </li>
              </ul>
            </div>
          </div>

          <WebsiteContainer category={activeCategory} flip={toFlip} />
        </div>
      </section>
    </>
  );
}

export default WebsitesPortfolio;
