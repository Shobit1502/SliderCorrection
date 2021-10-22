import React from "react";

import "./websitesPortfolio.css";
import WebsiteContainer from "./websiteContainer";

function WebsitesPortfolio({ refProp }) {
  const [activeCategory, setActiveCategory] = useState("latest-list");
  const [toFlip, setToFlip] = useState(false);

  const handleListItemClick = (e) => {
    let preActive = activeCategory;
    let currActive = e.target.id;
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

          <WebsiteContainer category={activeCategory} flip={toFlip} />
        </div>
      </section>
    </>
  );
}

export default WebsitesPortfolio;
