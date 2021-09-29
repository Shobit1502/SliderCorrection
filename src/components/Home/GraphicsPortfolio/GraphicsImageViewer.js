import './GraphicsImageViewer.css';

export default function ({closeImageViewer}) {
    return (
        <section className="graphics-image-viewer">
            <div className="graphics-img-viewer-container">
                <div className="graphics-detail-container">
                    <a onClick={closeImageViewer} className="close-image-viewer"><img src="https://i.ibb.co/rbKbzzn/close.png" width="30px" height="30px" alt="close" /></a>
                    <img className="graphics-image" src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg" alt="img" />
                </div>
                <div className="graphics-image-details">
                    <div className="graphics-image-viewer-title">
                        <h3>Amongst Us </h3>
                        <img src="https://i.ibb.co/JcW8B7M/whatsapp.png" alt="whatsapp" height="25px" width="25px" />
                        <img src="https://i.ibb.co/Th2Yc6M/telegram.png" alt="telegram" height="25px" width="25px" />
                    </div>
                    <p className="graphics-image-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>

            </div>

        </section>
    )
}