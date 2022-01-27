import {useState} from "react";
import {useMap} from "react-dom"
import lightbox1 from "../images/lightbox-1.jpg";
import lightbox2 from "../images/lightbox-2.jpg";
import epaper from "../images/e-paper.jpg";
import { Modal, Button } from "bootstrap";


const ImageMap = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-body">
                            <img className="lightbox-image fist-half active" src={lightbox1} alt="lightbox" />
                            <img className="lightbox-image next-half" src={lightbox2} alt="lightbox" />
                        </div>
                        <div className="modal-footer">
                            <div className="ic-epaper-buttons">
                                <a href="#" className="arrow prev prev-section">
                                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                        preserveAspectRatio="xMidYMid meet">
                
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
                                        -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
                                        1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
                                        177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
                                        c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
                                        -127 119 -175 137 -71 27 -136 27 -202 2z"/>
                                        </g>
                                        </svg>
                
                                    previous</a>
                                <a href="#" className="arrow next next-section">Next
                
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                    preserveAspectRatio="xMidYMid meet">
                
                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                                    -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                                    c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                                    -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                                    1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                                    -1230 1193 -72 26 -136 26 -207 -1z"/>
                                    </g>
                                    </svg>
                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <Modal.Dialog show={show} onHide={handleClose}>

            <Modal.Body>
                <div className="modal-body">
                    <img className="lightbox-image fist-half active" src={lightbox1} alt="lightbox" />
                    <img className="lightbox-image next-half" src={lightbox2} alt="lightbox" />
                </div>
            </Modal.Body>

            <Modal.Footer>
                <div className="ic-epaper-buttons">
                    <a href="#" className="arrow prev prev-section">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">
    
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
                            -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
                            1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
                            177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
                            c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
                            -127 119 -175 137 -71 27 -136 27 -202 2z"/>
                            </g>
                            </svg>
    
                        previous</a>
                    <a href="#" className="arrow next next-section">Next
    
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
    
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                        -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                        c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                        -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                        1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                        -1230 1193 -72 26 -136 26 -207 -1z"/>
                        </g>
                        </svg>
    
                    </a>
                </div>
            </Modal.Footer>
            </Modal.Dialog> */}


            

            <div className="ic-container">
                <div className="ic-epaper-body">
                    <div className="ic-epaper-header">
                        <div className="ic-date">24/01/2022</div>
                        <div className="ic-epaper-buttons">
                            <a href="#" className="arrow prev">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
                                    -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
                                    1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
                                    177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
                                    c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
                                    -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                    </g>
                                </svg>

                                previous</a>
                            <a href="#" className="arrow next">Next

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                                -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                                c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                                -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                                1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                                -1230 1193 -72 26 -136 26 -207 -1z" />
                                    </g>
                                </svg>

                            </a>
                        </div>
                    </div>
                    
                    
                    <div className="ic-e-paper">
                        <img src={epaper} useMap="#image-map" className="map" />

                    
                        <map name="image-map">
                            <area id="star" variant="primary" onClick={handleShow} className="ic-epaper-col" coords="22,32,623,148" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="22,158,320,380" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="325,158,398,380" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="404,156,548,380" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="554,154,625,381" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="22,389,244,748" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="249,390,320,748" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="327,392,624,748" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="22,757,321,953" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="327,754,395,952" shape="rect" />
                            <area variant="primary" onClick={handleShow} className="ic-epaper-col" coords="403,754,624,953" shape="rect" />
                        </map>
                    </div>
                    
                    

                    <div className="ic-epaper-footer">
                        <div className="ic-epaper-buttons w-100">
                            <a href="#" className="arrow prev">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path d="M3515 5100 c-44 -18 -189 -159 -1228 -1197 -952 -951 -1184 -1188
                                    -1203 -1228 -18 -37 -24 -67 -24 -115 0 -132 -74 -50 1223 -1346 1123 -1123
                                    1174 -1173 1230 -1193 73 -27 131 -27 204 1 48 17 77 40 174 137 144 143 163
                                    177 164 286 0 58 -5 91 -19 120 -13 27 -333 355 -995 1018 l-976 977 977 978
                                    c537 537 984 993 994 1012 9 19 19 67 22 106 7 110 -20 160 -166 305 -98 97
                                    -127 119 -175 137 -71 27 -136 27 -202 2z" />
                                    </g>
                                </svg>

                                previous</a>
                            <a href="#" className="arrow next">Next

                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
                                    viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000"
                                        stroke="none">
                                        <path d="M1400 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                                -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                                c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                                -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                                1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                                -1230 1193 -72 26 -136 26 -207 -1z" />
                                    </g>
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ImageMap;