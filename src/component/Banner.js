import {FaArrowRight} from "react-icons/fa";
import MainCamera from "../images/mainCamera.png";

const Banner = () => {
    return(
        <>

            <section className="p-50">
                <div className="max-width">
                    <div className="banner-inner">
                        <div className="banner-left">
                            <h1>Start your Journey as 
                                Influencer</h1>
                            <p>An influencer can make a significant impact on their industry peers by sharing their expertise and recommendations regarding industry happenings. By becoming an influencer, you may see professional benefits for your career, network and brand, but achieving influencer status requires you to put in the work of establishing yourself as a known authority or expert within your field.</p>
                            <button className="default-btn">learn More <FaArrowRight /></button>
                        </div>
                        <div className="banner-right">
                            <div className="banner-right-inner">
                                <img src={MainCamera} alt="camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner;