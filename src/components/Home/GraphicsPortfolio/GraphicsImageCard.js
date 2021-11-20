import { useHistory } from "react-router-dom";

import "./GraphicsImageCard.css";

export default function ({
  name,
  data,
  cid,
  imageViewSetter,
  openGraphicsImageViewer,
  category,
}) {
  const history = useHistory();

  function handleClick(id) {
    // generate the link for clicked image and update to url bar
    const link = `/?cid=${cid}&id=${id}&sec=graphicsportfolio#graphics-${cid}`;
    history.push(link);

    // now set the property and launch the image viewer
    imageViewSetter(cid, id);
    openGraphicsImageViewer();
  }

  return (
    <div id={"graphics-" + cid} className="graphics-imgae-card-container">
      <div className="digital-art-portfolio">
        <h1>{name}</h1>

        <div className="digital-arts">
          {data.map((item, i) => (
            <div
              onClick={() => handleClick(i)}
              key={item.name}
              className="digital-art"
              style={{
                backgroundImage: `url('/assets/img/graphics-portfolio/${category}/thumbnail/${item.thumbnail}`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

/*
KNOW ABOUT THE PROPS
name => Title for the card
data => all info about image
cid => id of the category that image belongs to, ( index of category in json file)
imageViewSetter => this sets the properties for image viewer
openGraphicsImageViewer => launches the image viewer
category => category name (used here to create image path for thumbnail)

*/
