import Image from "next/image";
import 'animate.css';
import { Col, Container, Row } from "react-bootstrap";

const banner = () => {
    return ( 
        <section className="pb-5">
            <Container>
                <Row>
                    <Col md={6} className=" animate__animated animate__zoomIn ">
                        <Image src="/assets/banner-1.png" width="470" height="450" className="img-fluid" alt="..."/>                      
                    </Col>

                    <Col md={6} className=" mt-md-5 animate__animated animate__slideInRight m-3 m-md-0">
                        <h4 className="fw-bold text-white fs-xlarge">Master Coding Through <br />
                            Proper Mentoring:
                        </h4>
                        <p className="fs-normal mb-4 footer-text-color">Access  a variety of effective private trainings <br />
                        and personified learning experiences <br />
                        that are designed just for you.</p>

                        <div className="border card-border rounded-5 px-3 pt-3 fs-small mt-md-5 text-start footer-text-color" style={{width: "20rem", height: "auto"}}>
                            <p>Developing fullstack web and mobile application using industry required modern tools, libraries and languages such as ReactJS, VueJS, NodeJS, React native, Flutter, MongoDB from absolute beginners to industry required advanced </p>
                        </div>
                        <button className="btn text-white fs-small px-4 py-2 ms-md-5 mb-5 m-3 mt-4" style={{background: "#B700EE"}}>Get Started</button>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
export default banner;
