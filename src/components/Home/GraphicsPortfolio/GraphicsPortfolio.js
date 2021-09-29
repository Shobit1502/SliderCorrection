import {useState} from 'react'

import "./GraphicsPortfolio.css";

import GraphicsImageViewer from "./GraphicsImageViewer";

export default function () {
    const [showGraphicsImageViewer,setGraphicsImageViewer] = useState(false);

    function closeGraphicsImageViewer(){
        setGraphicsImageViewer(false);
    }

    return (
        <>
            <section id={"graphicsportfolio"} className={"graphics-portfolio-section"}>
                <div className={"graphics-portfolio-container fixed-container-size"}>
                    <div>
                        <h1 className={"section-title"}>DIGITAL ART PORTFOLIO</h1>
                        <p className={"section-heading"}>BRANDING SOLUTIONS</p>
                        <p className={"section-description"}>KSS is hiring! We are interested in passionate candidates who can bring their skills, creativity or experience and grow in a problem-solving environment.See the details below.</p>
                    </div>
                    <button onClick={()=>{setGraphicsImageViewer(r=>!r)}}>Show</button>
                </div>
            </section>
            {showGraphicsImageViewer && (<GraphicsImageViewer closeImageViewer={closeGraphicsImageViewer} />)}
        </>
    )
}