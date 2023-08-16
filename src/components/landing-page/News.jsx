import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const news= () => {
    return ( 
        <section className="review-bg">
            <Container >
                <div className="text-center">
                <button className="btnn2 px-3 py-2" type="submit">
                    <a className="text-white fs-small fw-bold ">NEWS FOR YOU</a>
                 </button>
                </div>

                <Row className="pb-5 mt-5 ps-md-5">
                    <Col md={6}>
                        <div className="card bg-transparent px-md-5 px-4 border card-border rounded-3 news-card" style={{width: "27rem"}}>
                        <Image src="/assets/trainer4.png" width="320" height="298" alt="..." className="mt-3"/>
                        <div className="card-body">
                            <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                                <a className="text-white fs-small fw-bold ">Devops </a>
                            </button>
                            <p className="fs-small text-white mt-3">GitOps vs DevOps – What’s the difference?</p>
                            </div>
                        </div>    
                    </Col>
                    <Col md={6} className="mt-4 mt-md-0 mb-3">
                        <div className="card bg-transparent px-md-5 px-4 border card-border rounded-3 news-card" style={{width: "27rem"}}>
                        <Image src="/assets/trainer3.png" width="320" height="298" alt="..." className="mt-3"/>
                        <div className="card-body">
                            <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                                <a className="text-white fs-small fw-bold ">Devops </a>
                            </button>
                            <p className="fs-small text-white mt-3">GitOps vs DevOps – What’s the difference?</p>
                            </div>
                        </div>    
                    </Col>
                    <div className="text-center text-white mt-3">
                        <a href="/" className="fs-normal mt-4 ">SEE MORE <BsArrowRight /> </a>
                    </div>
                </Row>
            </Container>
        </section>
     );
}
 
export default news;  