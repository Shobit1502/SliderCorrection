import { useHistory } from "react-router-dom";
import "./GraphicsImageViewer.css";

export default function ({ closeImageViewer, imageViewDetails }) {
  const history = useHistory();

  // If user closes the image viewer
  function handleClick() {
    closeImageViewer();
    history.push("/");
  }

  return (
    <section className="graphics-image-viewer">
      <div className="graphics-img-viewer-container">
        <div className="graphics-detail-container">
          <div onClick={handleClick} className="close-image-viewer">
            <img
              src="/assets/img/misc/close.png"
              // width="30px"
              // height="30px"
              alt="close"
              className="closee"
            />
          </div>
          <img
            className="graphics-image"
            src={imageViewDetails.imagePath}
            alt="img"
          />
        </div>

        <div className="graphics-image-details">
          <div className="graphics-image-viewer-title">
            <div className="graphics-slider">
              <h3>{imageViewDetails.name}</h3>
            </div>
            <a
              href={"whatsapp://send?text=" + imageViewDetails.sharingLink}
              data-action="share/whatsapp/share"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/misc/share_whatsapp.png"
                alt="whatsapp"
                // height="25px"
                // width="25px"
                className="graphicsocial"
              />
            </a>
            <a
              href={`https://t.me/share/url?url=${imageViewDetails.sharingLink}`}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/misc/share_telegram.png"
                alt="telegram"
                // height="25px"
                // width="25px"
                className="graphicsocial"
              />
            </a>
          </div>

          <p className="graphics-image-description">
            {imageViewDetails.description}
          </p>
        </div>
      </div>
    </section>
  );
}
