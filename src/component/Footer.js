import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return(
        
      <>
        <footer class="p-50">
          <div class="footer-inner">
              <h4>Influencer products</h4>
              <p class="copyright">Copyright &#169; 2020  influencer products<br />
              All rights reserved</p>

              <ul class="social-icon">
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