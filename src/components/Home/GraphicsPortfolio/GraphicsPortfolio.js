import { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import "./GraphicsPortfolio.css";
import data from './graphicsportfolio.json';

import GraphicsImageViewer from "./GraphicsImageViewer";
import GraphicsImageCard from './GraphicsImageCard';

export default function ({ refProp }) {

    const [showGraphicsImageViewer, setGraphicsImageViewer] = useState(false);
    const [imageViewDetails, setImageView] = useState({});
    const [activeCategory, secActiveCategory] = useState(0);

    // for resolving search queries to retain the state.
    const { search } = useLocation();

    // Just formatting data => follow .json file for this section
    const graphicsItems = Object.values(data.categories);
    const graphicsCategories = Object.keys(data.categories);
    const graphicsTitles = graphicsItems.map(item => item.graphicsTitle);

    function closeGraphicsImageViewer() {
        setGraphicsImageViewer(false);
    }
    function openGraphicsImageViewer() {
        setGraphicsImageViewer(true);
    }

    function imageViewSetter(cid, id) {

        secActiveCategory(cid);

        const category = graphicsCategories[cid];
        console.log(graphicsCategories);
        let imageName;
        let imagePath;

        if (window.innerWidth <= 600) {
            imageName = data.categories[category].items[id].phoneImg;
            imagePath = `/assets/img/graphics-portfolio/${category}/phone/${imageName}`
        } else {
            imageName = data.categories[category].items[id].desktopImg;
            imagePath = `/assets/img/graphics-portfolio/${category}/desktop/${imageName}`
        }

        const name = data.categories[category].items[id].name;
        const description = data.categories[category].items[id].description;
        const sharingLink = `${window.location.origin}/?cid=${cid}%26id=${id}%26sec=graphicsportfolio%23graphics-${cid}`;

        setImageView({
            imagePath: imagePath,
            name: name,
            description: description,
            sharingLink : sharingLink,
        })
    }

    useState(() => {

        const query = queryString.parse(search);
        let cid = Math.abs(parseInt(query.cid));
        let id = Math.abs(parseInt(query.id));
        let sec = query.sec;

        if (sec === "graphicsportfolio" && !isNaN(cid) && !isNaN(id)) {

            cid = cid % graphicsCategories.length;
            id = id % data.categories[graphicsCategories[cid]].items.length;

            imageViewSetter(cid, id);
            setGraphicsImageViewer(true);

        }

    })

    return (
        <>
            <section ref={refProp} id={"graphicsportfolio"} className={"graphics-portfolio-section"}>
                <div className={"graphics-portfolio-container fixed-container-size"}>
                    <div>
                        <h1 className={"section-title"}>DIGITAL ART PORTFOLIO</h1>
                        <p className={"section-heading"}>BRANDING SOLUTIONS</p>
                        <p className={"section-description"}>KSS is hiring! We are interested in passionate candidates who can bring their skills, creativity or experience and grow in a problem-solving environment.See the details below.</p>
                    </div>
                    <div className={"graphics-categories"}>
                        <div className="graphics-phone-option">
                            <div>
                            {
                                graphicsTitles.map( (title,i) => (
                                    <span className={`${i == activeCategory ? "active" : ""}`} key={title} onClick={()=>secActiveCategory(i)}>● {title}</span>
                                ))
                            }
                            </div>
                            <div>
                            {
                                graphicsTitles.map( (title,i) => (
                                    <span className={`${i == activeCategory ? "active" : ""}`} key={title} onClick={()=>secActiveCategory(i)}>● {title}</span>
                                ))
                            }
                            </div>
                        </div>
                        {graphicsCategories.map((title, i) => <div  key={title} className={`graphics-phone-item ${i===activeCategory? "active" : ""}` }><GraphicsImageCard imageViewSetter={imageViewSetter} openGraphicsImageViewer={openGraphicsImageViewer} cid={i} name={graphicsTitles[i]} category={graphicsCategories[i]} data={graphicsItems[i].items} /></div>)}
                    </div>
                </div>
            </section>
            {showGraphicsImageViewer && (<GraphicsImageViewer imageViewDetails={imageViewDetails} closeImageViewer={closeGraphicsImageViewer} />)}
        </>
    )
}