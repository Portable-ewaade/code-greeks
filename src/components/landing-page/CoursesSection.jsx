import { Col, Container, Row } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";

const courses = () => {
    return ( 
        <section className=" py-5" style={{
            backgroundImage: "url('../../../assets/banner-bg.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}>
            
            <div className="position-relative">
            <Container className="p-5">
                <div className="card fullstack-card text-center p-4 position-absolute  top-0 start-50 translate-middle" >
                    <div className="">
                    <button className="btnn2 mt-md-0 mt-2" type="submit">
                      <a className="text-color fs-small fw-bold ">STARTING SOON</a>
                     </button>
                        <h6 className="fs-small fw-bolder mt-3">Fullstack Web Development <br /> Using MERN Stack</h6>
                        <p className="fs-small">The development journey will take you through mastering fullstack web application development using HTML, CSS, Javascript, ReactJS, Styling Components, NodeJS + Express, MongoDB from absolute zero to hero</p>

                        <Row>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/html.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/css.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/javascript.png" alt="..." className="p-3 img-fluid" />
                               </div>
                            </Col>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/reactjs.png" alt="..." className="mt-2 img-fluid" />
                               </div>
                            </Col>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/node.png" alt="..." className="mt-2 img-fluid" />
                               </div>
                            </Col>
                            <Col md={2} xs={4} className="mb-3">
                               <div className="round-bg">
                               <img src="/assets/mongodb.png" alt="..." className=" mt-2 img-fluid" />
                               </div>
                            </Col>
                            
                        </Row>
                    </div>
                </div>            
            </Container>
            </div>
           
           <Container className=" pt-5 mt-5 pb-5">
                <Row className="mt-md-0 mt-5 mb-5 pb-5">
                <div className="text-center mt-md-0 mt-5">
                <button className="btnn3 mt-md-0 mb-5 mt-3" type="submit">
                      <a className="text-white fs-small fw-bold ">OTHER AVAILABLE COURSES</a>
                     </button>
                </div>
                <Col md={3} xs={6} className="mb-3 text-center ">
                    <div className="card border bg-color px-4 py-3 py-md-4 text-white">
                        <h3><BsPersonFill /></h3>
                        <div className="card-title">
                            <h6 className="fs-small">FRONTEND DEVELOPMENT</h6>
                        </div>
                        <p className="fs-small footer-text-color">HTML, CSS, Javascript, Bootstrap, ReactJS, NextJS</p>
                    </div>
                </Col>
                <Col md={3} xs={6} className="mb-3 text-center ">
                    <div className="card border bg-color p-4 text-white">
                        <h3><BsPersonFill /></h3>
                        <div className="card-title">
                            <h6 className="fs-small">BACKEND DEVELOPMENT</h6>
                        </div>
                        <p className="fs-small footer-text-color">NodeJS, ExpressJS, NestJS, MongoDB, PostgreSQL, MySQL</p>
                    </div>
                </Col>
                <Col md={3} xs={6} className="mb-3 text-center ">
                    <div className="card border bg-color p-4 text-white">
                        <h3><BsPersonFill /></h3>
                        <div className="card-title">
                            <h6 className="fs-small">MOBILE APP DEVELOPMENT</h6>
                        </div>
                        <p className="fs-small footer-text-color">React Native, NodeJS+Express, MongoDB</p>
                    </div>
                </Col>
                <Col md={3} xs={6} className="mb-3 text-center ">
                    <div className="card border bg-color p-4 text-white">
                        <h3><BsPersonFill /></h3>
                        <div className="card-title">
                            <h6 className="fs-small">MOBILE APP DEVELOPMENT</h6>
                        </div>
                        <p className="fs-small footer-text-color"> Flutter (Dart), NodeJS+Express, MongoDB </p>
                    </div>
                </Col>
                
                </Row>

           </Container>
        </section>
     );
}
 
export default courses;