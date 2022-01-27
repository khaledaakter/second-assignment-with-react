import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        
      <>
        <footer className="p-50">
          <div className="footer-inner">
              <h4>Influencer products</h4>
              <p className="copyright">Copyright &#169; 2020  influencer products<br />
              All rights reserved</p>

              <ul className="social-icon">
                  <li><a href="#"><FaFacebookF /></a></li>
                  <li><a href="#"><FaTwitter /></a></li>
                  <li><a href="#"><FaInstagram /></a></li>
                  <li><a href="#"><FaLinkedinIn /></a></li>
              </ul>
          </div>
        </footer>
      </>
    )
}

export default Footer;