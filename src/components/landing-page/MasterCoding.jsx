// import { BsLaptop } from "react-icons/bs";
import 'animate.css';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
// import TrackVisibility from "react-on-screen";

const masterCoding = () => {
  return (
    <section className=" position-relative pb-5 " style={{ background: '#0F0113' }}>
      <div className="pb-5 bx-container p-0 home-container">
        <Row className="pb-5 text-white pe-md-0 align-items-center">
          <Col md={6} className=" mt-5 mb-5 mb-md-0">
            <div
              className=" card-border rounded-3 ps-3 pt-3 fs-small mt-md-5 text-start"
              style={{ width: '15rem', height: 'auto' }}
            >
              <h6 className="fs-small lh-base">In order to truly</h6>
              <h4 className="text-color fw-bold">Master Coding?</h4>
            </div>
            <div className="mt-4">
              <h6 className="fs-large lh-base fw-bold my-4">
                We Put You into Production Apps Development
              </h6>
            </div>
            <div className="mt-md-3" style={{ height: 'auto' }}>
              <p className="fs-normal footer-text-color">
                Our Affiliation with Jaflah Software Development Company is the mother company of
                Code Geeks 9ja. This affiliation births the incredible feature that differentiates
                Code Geeks 9ja from other IT institutes in the country as it allows our trainees to
                have direct access to production applications coding. As an engineer, there are
                issues that you would only face on production apps. As well, there is a limit to
                what you can learn and experience by building test apps locally on your computers.
                Things can become a little scarier in live apps. And so you do not get lost when you
                face job interviews or pushed into a heavy code base, outside our horizons, we give
                you the opportunity to equip yourself and strengthen your portfolio with proven live
                applications. This is priceless and will only benefit you greatly as you dive into
                the ocean of job opportunities in the software development world.
              </p>

              <Link href="/about" className="fs-normal text-color fw-bold mt-2">
                Read more...
              </Link>
            </div>
          </Col>

          <Col md={6} className=" mt-md-5 ps-md-5 home-image ">
            <img
              src="/assets/computer.jpeg"
              alt="Code Geeks 9ja"
              className="rounded-5 shadow-5 shadow-red"
            />
            {/* <Row className="container">
              <Col md={6} xs={6} className="pt-5 text-center ">
                <div className="border rounded-3 bg-color p-3 position-absolute ms-1">
                  <BsLaptop style={{ width: '3rem', height: 'auto' }} />
                  <p className="fs-small mt-2">Break Something</p>
                </div>
                <Col md={6} xs={6} className=" mt-5">
                  <Image src="/assets/card-bg1.png" width="132" height="100" alt="Code Geeks 9ja" />
                </Col>
              </Col>

              <Col md={6} xs={6} className=" pt-5 text-center">
                <div className="border rounded-3 bg-color p-3 position-absolute ms-1">
                  <BsLaptop style={{ width: '3rem', height: 'auto' }} />
                  <p className="fs-small mt-2">Fixed Something</p>
                </div>
                <Col md={6} xs={6} className="mt-5">
                  <Image src="/assets/card-bg2.png" width="131" height="100" alt="Code Geeks 9ja" />
                </Col>
              </Col>

              <Col md={6} xs={6} className="text-center mt-5">
                <div className="border rounded-3 bg-color p-3 position-absolute ms-1">
                  <BsLaptop style={{ width: '3rem', height: 'auto' }} />
                  <p className="fs-small mt-2">Just Do Whatever</p>
                </div>
                <Col md={6} xs={6} className=" mt-5">
                  <Image
                    src="/assets/card-bg3.png"
                    width="134"
                    height="91"
                    alt="Code Geeks 9ja"
                    className="mt-2"
                  />
                </Col>
              </Col>
              <Col md={6} xs={6} className="text-center mt-5">
                <div className="border rounded-3 bg-color px-3 py-2 position-absolute ms-1">
                  <BsLaptop style={{ width: '3rem', height: 'auto' }} />
                  <p className="fs-small mt-2">
                    Practice And Code <br /> Everyday
                  </p>
                </div>
                <Col md={6} xs={6} className="mt-5">
                  <Image
                    src="/assets/card-bg4.png"
                    width="139"
                    height="94"
                    alt="Code Geeks 9ja"
                    className="mt-2"
                  />
                </Col>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </div>
      <Container className=" animate__bounceIn pb-5 ps-md-4">
        {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
                  <div className="row my-5 ms-1">
                    <div className="col-md-6 pt-5">
                        <div className="row container">
                            <div className="col-6  text-center ">
                                <div className="border rounded-3 bg-color p-3 position-absolute top-0 ms-1">
                                <BsLaptop style={{width: "3rem", height:"auto"}}/>
                                <p className="fs-small mt-2">Break Something</p>
                                </div>
                                <div className="col-6 mt-2">
                                <Image src="/assets/card-bg1.png" width="143" height="90" alt="Code Geeks 9ja"
                                </div>
                             </div>
                                                     
                            <div className="col-6 text-center">
                                <div className="border rounded-3 bg-color p-3 position-absolute top-0 ms-1">
                                <BsLaptop style={{width: "3rem", height:"auto"}}/>
                                <p className="fs-small mt-2">Fixed Something</p>
                                </div>
                                <div className="col-6 mt-2">
                                <Image src="/assets/card-bg2.png" width="140" height="90" alt="Code Geeks 9ja"
                                </div>
                            </div>  

                            <div className="col-6 text-center mt-5">
                                <div className="border rounded-3 bg-color p-3 position-absolute ms-1">
                                <BsLaptop style={{width: "3rem", height:"auto"}}/>
                                <p className="fs-small mt-2">Just Do Whatever</p>
                                </div>
                                <div className="col-6 mt-5">
                                <Image src="/assets/card-bg3.png" width="147" height="94" alt="Code Geeks 9ja" className="mt-2"/>
                                </div>
                            </div>                            
                            <div className="col-6 text-center mt-5">
                                <div className="border rounded-3 bg-color px-3 py-2 position-absolute ms-1">
                                <BsLaptop style={{width: "3rem", height:"auto"}}/>
                                <p className="fs-small mt-2">Practice And Code <br /> Everyday</p>
                                </div>
                                <div className="col-6 mt-5">
                                <Image src="/assets/card-bg4.png" width="153" height="94" alt="Code Geeks 9ja" className="mt-2"/>
                                </div>
                            </div>                            
                        </div>
                    </div>

                    <div className="col-md-6 mt-5">
                      <div className="border card-border rounded-3 ps-3 pt-3 fs-small mt-md-5 text-start" style={{width: "15rem", height: "auto"}}>
                            <h6 className="fs-small lh-base">Wondering Our Secret <br /> To Making you</h6>
                            <h4 className="text-color fw-bold">Master Coding?</h4>
                        </div>
                        <div className= "mt-4">
                            <h6 className="fs-small lh-base fw-bold ">We Guide You To Make The <br /> Following A Habit</h6>
                        </div>
                        <div className="mt-md-5" style={{width: "22rem", height: "auto"}}>
                            <p className="fs-small footer-text-color">We do not leave your side. And we do not leave you to go through the dark learning times alone. We share the burden; practically stay with you as we push you loads of carefully crafted exercises to ensure that daily coding naturally becomes a habit for you, and at ease. A very good habit! Indeed, to master coding, you do not need to be intelligent or smart. You only need to keep practicing under proper mentoring and guidance; build a strong attitude and resilience and they all come together in the end.</p>

                            <a href="/" className="fs-small footer-text-color mt-2">Read more</a>
                        </div>
                    </div>
                </div>
                </div>}
                 </TrackVisibility> */}
      </Container>
    </section>
  );
};

export default masterCoding;
