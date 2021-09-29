
import "./Header.css";

import data from './Header.json'



import HeaderElement from "./HeaderElement";

export default function(){
    return( 
        <section id="home" style={{backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url("assets/img/header/hero-bg.webp")`}} className="header-section">
            <div className="fixed-container-size header-container">
                <div className="header-title-container">
                    <h1 className="header-title-main">{data.title}</h1>
                    <h2 className="header-subtitle-main">{data.subtitle}</h2>
                </div>
                <div className="header-options-main">
                   {
                       data.options.map( item => <HeaderElement key={item.name} data={item}/>)
                   }
                </div>
            </div>
        </section>
    )
}

/*

    <section
      id="hero"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="col-xl-8 col-lg-8">
            <h1>{WebText.home.header.heading}</h1>
            <h2>{WebText.home.header.headerText}</h2>
          </div>
        </div>

        <div
          className="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {WebText.home.header.headerCardsData.map((element, index) => (
            <HeaderElement
              key={element.name}
              data={element}
              image={images[i++]}
            />
          ))}
        </div>
      </div>
    </section>

*/