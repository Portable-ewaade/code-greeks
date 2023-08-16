import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const review = () => {
    return ( 
        <div className=" review-bg">
            <div className="position-relative py-5">
                <Container className="py-5">
                    <div className=" review-card rounded-4  position-absolute top-0 start-50 translate-middle" >
                        <Row>
                            <Col md={6}>
                                <Row >
                                    <Col>
                                        <Image src="/assets/trainer1.png" alt="..." width="173" height="200"  className="img-fluid"  />
                                    </Col>
                                    <Col>
                                    <Image src="/assets/trainer2.png" alt="..." width="175" height="200"  className="img-fluid"  />
                                    </Col>
                                </Row>                  
                            </Col>
                            <Col md={6} className=" text-white p-sm-5 my-5 mb-5">
                            <button className="btnn2 mt-md-0 mt-5" type="submit">
                            <a className="text-white fs-small fw-bold ">WHY CHOOSE US </a>
                            </button>
                                <h5 className=" mt-3">Best And Experienced Trainers</h5>
                                <p className="fs-small footer-text-color">With us, you get the ultimate coding training and proper mentorship <br className="d-md-block d-none" /> and guidance from some of the best and experienced hands in the business.</p>

                                <a href="/" className="fs-small footer-text-color mt-2 ">Read more</a>                     
                            </Col>
                        </Row>
                    </div>            
                </Container>              
            </div>

               
                <Container className="pt-5 mt-5 pb-5">
                    <Row className="mt-5 mt-md-0 mb-5 ">
                        <div className="text-center mt-md-0 mt-5">
                        <div className="my-4">
                            <div className="pt-5 pt-md-0 text-white">
                            <h6 className="fs-normal fw-bold mt-5 pt-5">STUDENT REVIEWS</h6>
                            <h6 className="fs-normal fw-bold mb-5 mt-4">4.5 out of 5 |  5,281 reviews</h6>
                            </div>
                        </div>

                        </div>
                        <Col md={4} className="mb-3 text-center ">
                            <div className="card border border-4 bg-transparent  p-3 text-white">
                                <div className="card-title">
                                    <img src="/assets/star-icon.png" alt="" />
                                </div>
                                <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Kehinde Adetule - Frontend</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-3 text-center ">
                            <div className="card border border-4 bg-transparent p-3 text-white">
                                <div className="card-title">
                                <img src="/assets/star-icon.png" alt="" />
                                </div>
                                <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Ibrahim Jimoh - Frontend</p>
                            </div>
                        </Col>
                        <Col md={4} className="mb-3 text-center ">
                            <div className="card border border-4 bg-transparent p-3 text-white">
                                <div className="card-title">
                                <img src="/assets/star-icon.png" alt="" />
                                </div>
                                <p className="fs-small footer-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">Ibrahim Jimoh - Frontend</p>
                            </div>
                        </Col>
                        
                        <div className="text-center text-white">
                            <a href="/" className="fs-normal mt-2 ">SEE MORE <BsArrowRight /> </a>
                        </div>
                    
                    </Row>

                </Container>
         </div>

           
     );
}
 
export default review;