import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
  MdEmail,
} from "icons/icons";

import "./Footer.css";

export default function () {
  return (
    <footer id="footer">
      <div className="footer-policy">
        <span>Service Terms</span>
        <span>Privacy Policy</span>
      </div>

      <div className="footer-contact-links">
        <div className="footer-social-links">
          <span>Follow Us</span>
          <a target={"_blank"} href="https://www.facebook.com/KoyoSoft/" rel="noopener noreferrer">
            <FaFacebookF className={"footer-icons"} />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/koyo-soft/"
          >
            <FaLinkedinIn className={"footer-icons"} />
          </a>
        </div>

        <div className="footer-contacts-options">
          <span>Contact Us</span>
          <a target={"_blank"} href="tel:+919867910690" rel="noopener noreferrer">
            <FaPhoneAlt className={"footer-icons"} />
          </a>
          <a target={"_blank"} href="https://t.me/MAKE605" rel="noopener noreferrer">
            <FaTelegramPlane className={"footer-icons"} />
          </a>
          <a target={"_blank"} href="https://wa.me/919867910690" rel="noopener noreferrer">
            <FaWhatsapp className={"footer-icons"} />
          </a>
          <a
            target={"_blank"}
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=KoyoSoftwareSolutions@gmail.com#" rel="noopener noreferrer"
          >
            {" "}
            <MdEmail className={"footer-icons"} />
          </a>
        </div>
      </div>

      <div className="footer-credits">
        <span>© Copyright and Designed by </span>
        <a style={{ color: "#ffb03b" }} href="https://bootstrapmade.com/">
          Koyo Software Solutions
        </a>
      </div>
    </footer>
  );
}

// Everything is all set except for the telegram link
