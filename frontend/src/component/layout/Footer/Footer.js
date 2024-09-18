import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; AQ_Khan</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://instagram.com/aq_khan_556?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">Instagram</a>
        <a href="https://www.facebook.com/abdulqadeer.buriro.52?mibextid=ZbWKwL">Facebook</a>
        <a href="https://www.linkedin.com/in/aq-khan-4ab19426b">Linkdin</a>
      </div>
    </footer>
  );
};

export default Footer;
