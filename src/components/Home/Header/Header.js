
import "./Header.css";

// Data for header
import data from './Header.json'

import HeaderElement from "./HeaderElement";

export default function ({ refProp }) {
  return (
    <section
      ref={refProp}
      id="home"
      style={
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
                            rgba(0, 0, 0, 0.6)),
                            url("assets/img/header/hero-bg.webp")`
        }
      } className="header-section">

      <div className="fixed-container-size header-container">

        <div className="header-title-container">
          <h1 className="header-title-main">{data.title}</h1>
          <h2 className="header-subtitle-main">{data.subtitle}</h2>
        </div>

        <div className="header-options-main">
          {
            data.options.map(item => <HeaderElement key={item.name} data={item} />)
          }
        </div>

      </div>

    </section>
  )
}


