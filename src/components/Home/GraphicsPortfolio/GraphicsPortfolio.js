import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import "./GraphicsPortfolio.css";
import data from "./graphicsportfolio.json";

import GraphicsImageViewer from "./GraphicsImageViewer";
import GraphicsImageCard from "./GraphicsImageCard";

export default function ({ refProp }) {
  // Properties regarding image viewer, show or hide ?, what to show ?
  const [showGraphicsImageViewer, setGraphicsImageViewer] = useState(false);
  const [imageViewDetails, setImageView] = useState({});

  // For small sreen devices to select one category to view in main page
  const [activeCategory, secActiveCategory] = useState(0);

  // for resolving search queries to retain the state.
  const { search } = useLocation();

  // Just formatting data => follow .json file for this section
  const graphicsItems = Object.values(data.categories);
  const graphicsCategories = Object.keys(data.categories);
  const graphicsTitles = graphicsItems.map((item) => item.graphicsTitle);

  // closes the image viewer
  function closeGraphicsImageViewer() {
    setGraphicsImageViewer(false);
  }
  // opens the image viewer
  function openGraphicsImageViewer() {
    setGraphicsImageViewer(true);
  }

  // sets the image infomation to view in Image Viewer
  function imageViewSetter(cid, id) {
    //cid=> categoryId, id => imageId, Equivalent to array index in its JSON File

    secActiveCategory(cid); //small view devices, selects a category

    const category = graphicsCategories[cid];
    let imageName;
    let imagePath;

    // image selection for mobile or desktop
    if (window.innerWidth <= 600) {
      imageName = data.categories[category].items[id].phoneImg;
      imagePath = `/assets/img/graphics-portfolio/${category}/phone/${imageName}`;
    } else {
      imageName = data.categories[category].items[id].desktopImg;
      imagePath = `/assets/img/graphics-portfolio/${category}/desktop/${imageName}`;
    }

    const name = data.categories[category].items[id].name;
    const description = data.categories[category].items[id].description;

    // this link retains the exact state when shared
    const sharingLink = `${window.location.origin}/?cid=${cid}%26id=${id}%26sec=graphicsportfolio%23graphics-${cid}`;

    setImageView({
      imagePath: imagePath,
      name: name,
      description: description,
      sharingLink: sharingLink,
    });
  }

  useEffect(() => {
    // search for any queries eg-> 'https//koyo.com/?id=0&sec=5#home => id and sec,
    const query = queryString.parse(search);
    let cid = Math.abs(parseInt(query.cid));
    let id = Math.abs(parseInt(query.id));
    let sec = query.sec;

    // if section and category id and image id are perfect then view that image in image viewer
    if (sec === "graphicsportfolio" && !isNaN(cid) && !isNaN(id)) {
      cid = cid % graphicsCategories.length;
      id = id % data.categories[graphicsCategories[cid]].items.length;

      imageViewSetter(cid, id); //sets the image property
      setGraphicsImageViewer(true); // show the image
    }
  }, []);

  return (
    <>
      <section
        ref={refProp}
        id={"graphicsportfolio"}
        className={"graphics-portfolio-section"}
      >
        <div className={"graphics-portfolio-container fixed-container-size"}>
          <div>
            <h1 className={"section-title"}>DIGITAL ART PORTFOLIO</h1>
            <p className={"section-heading"}>BRANDING SOLUTIONS</p>
            <p className={"section-description"}>
              KSS is hiring! We are interested in passionate candidates who can
              bring their skills, creativity or experience and grow in a
              problem-solving environment.See the details below.
            </p>
          </div>

          <div className={"graphics-categories"}>
            {/* This will be displayed only on mobiles to select category */}
            <div className="graphics-phone-option">
              <div>
                {graphicsTitles.map((title, i) => (
                  <span
                    className={`${i == activeCategory ? "active" : ""}`}
                    key={title}
                    onClick={() => secActiveCategory(i)}
                  >
                    ● {title}
                  </span>
                ))}
              </div>
              <div>
                {graphicsTitles.map((title, i) => (
                  <span
                    className={`${i == activeCategory ? "active" : ""}`}
                    key={title}
                    onClick={() => secActiveCategory(i)}
                  >
                    ● {title}
                  </span>
                ))}
              </div>
            </div>

            {graphicsCategories.map((title, i) => (
              <div
                key={title}
                className={`graphics-phone-item ${
                  i === activeCategory ? "active" : ""
                }`}
              >
                <GraphicsImageCard
                  imageViewSetter={imageViewSetter}
                  openGraphicsImageViewer={openGraphicsImageViewer}
                  cid={i}
                  name={graphicsTitles[i]}
                  category={graphicsCategories[i]}
                  data={graphicsItems[i].items}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Image Viewer */}
      {showGraphicsImageViewer && (
        <GraphicsImageViewer
          imageViewDetails={imageViewDetails}
          closeImageViewer={closeGraphicsImageViewer}
        />
      )}
    </>
  );
}

/*

Graphics Image Viewer -> component to view the image full screen
Graphics Image Card -> component to display all images as a gallery
Please follow Json file to understand properly

Inside useEffect there is crazy amount of code, Whats happening? 
Well it has all formatting of image paths and links that will be displayed in image viewer
Firstly, This is for a link that is shareable and the link will retain it state.
By retaining the state I mean image Viewer with same image will be displayed when a user clicks it.
And all these without react-router-dom since I need to know the state not the different page.
I have attained the outcome by doing following steps
1) Look for the queries ( /?id=1&sec='portfolio' )
2) Match the queries
3) Generate and set the required properties (Image paths, links etc)
4) Show the image viewer. Done!

PLEASE LOOK INTO JSON FILE FOR THIS SECTION AND IMAGE FOLDER STRUCTURE OF GRAPHICS PORTFOLIO
#naming #data structures etc

*/
