import "./Contact.css";

export default function ({refProp}) {
    return (
        <section ref={refProp} id={"contact"} className="contact-section">
            <div className={"contact-container fixed-container-size"}>
                <h1 className={"section-title"}>Contacts</h1>
            </div>
            <div className="address-map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8841435256463!2d72.86934941490306!3d19.200261987016756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b73e308faa87%3A0x762c8fa53c6ea895!2sWhispering%20Palms%20Shopping%20Complex%2C%20Akurli%20Rd%2C%20Mira%20Road%20East%2C%20Alika%20Nagar%2C%20Lokhandwala%20Twp%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1624316535089!5m2!1sen!2sin"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen=""
                    title="map address"
                    style={{ border: '0px', height: '350px', width: '100%', }}>
                </iframe>
            </div>


        </section>
    )
}