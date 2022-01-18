import logo01 from "../images/logo1.svg"
import logo02 from "../images/logo2.svg"
import logo03 from "../images/logo3.svg"
import logo04 from "../images/logo4.svg"
import logo05 from "../images/logo5.svg"
import logo06 from "../images/logo6.svg"
import logo07 from "../images/logo7.svg"

const LogoSlider = () => {
    return(
        
      <>
        <section className="logo-section p-50">
          <div className="max-width">
              <div className="logo-section-inner">                
                  <a href="#"><img src={logo01} alt="logo" /></a>
                  <a href="#"><img src={logo02} alt="logo" /></a>
                  <a href="#"><img src={logo03} alt="logo" /></a>
                  <a href="#"><img src={logo04} alt="logo" /></a>
                  <a href="#"><img src={logo05} alt="logo" /></a>
                  <a href="#"><img src={logo06} alt="logo" /></a>
                  <a href="#"><img src={logo07} alt="logo" /></a>
              </div>
          </div>
        </section>
      </>
    )
}

export default LogoSlider;