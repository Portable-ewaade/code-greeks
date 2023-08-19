// import Image from "next/image";
import 'animate.css';
import { Col, Row } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

const banner = () => {
    return ( 
        <section className="pb-5">
            <div className="home-container">
                <Row className=''>
                <Col md={6} className=" mt-md-5 animate__animated animate__slideInRight m3 m-md-0">
                    <div style={{width: '100%', background: "transparent", paddingLeft:"10px" }}>
                    <h6 className="fw-bold text-white fs-large border rounded-4 w-75 p-3 mb-4 text-center">Welcome to the world of coding skill mastering </h6>
                        <h2 className="text-white fw-bold mb-4">Become The Next Code <br /> Geek In 9ja </h2>
                        <p className="fs-large mb-4 footer-text-color">Access  a variety of effective private trainings and <br className='d-none d-md-block'/> personified learning experiences that are designed <br className='d-none d-md-block'/> just for you.. Master coding through proper mentoring</p>

                        <button className="btnn rounded-2 text-white fs-small mb-5 mt-4"> <BsPencilSquare /> Get Started</button>
                    </div>
                        
                    </Col>

                        <Col md={2}></Col>

                    <Col md={4} className=" mt-md-5 animate__animated animate__slideInRight m-3 m-md-0 ">
                    <div className="card-border text-black rounded-4" style={{width: "23rem", background: "transparent" }}>
                        <div className="p-3 border-0 rounded-top-4 text-center" style={{background: "#E08CF9"}}> 
                        <h6 className="fw-bold ">Full Stack Web Development</h6>
                        <p className="fs-normal">Course start in </p>
                        <h5>A timer here</h5>
                        </div>
                        <div className="card-body text-white">
                            {/* <h5 className="card-title">Card title</h5> */}
                            <p className="card-text fs-small p-3">The development journey will take you through mastering fullstack web application development using HTML, CSS, Javascript, ReactJS, Styling Components, NodeJS + Express, MongoDB from absolute zero to hero</p>

                        <div className="text-center px-5">
                            <Row>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/html.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/css.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/javascript.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/reactjs.png" alt="..." className="mt-1 img-fluid" />
                               </div>
                            </Col>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/node.png" alt="..." className="mt-1 img-fluid" />
                               </div>
                            </Col>
                            <Col md={4} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/mongodb.png" alt="..." className=" mt-1 img-fluid" />
                               </div>
                            </Col>
                            
                            <div className="text-center">
                            <button className="btnn rounded-2 text-white fs-small mb-2 ">Register</button>

                            </div>
                        </Row>
                            </div>
                        </div>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        </section>
     );
}
 
export default banner;
