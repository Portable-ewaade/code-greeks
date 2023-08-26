import { Col, Row } from "react-bootstrap";
import { GoMail } from "react-icons/go";

const SectionTwo = () => {
  return (
    <section className="review-b pt-4">
      <div className="text-center my-5 py-md-5">
        <h2 className="text-white fw-bold ">Contact</h2>
      </div>

      <div className="review-bg">
        <div className="bx-container">
          <div className=" text-center text-white my-5">
            <h6 className="my-3">We are here to train you </h6>
            <img
              src="/assets/contact.png"
              alt="Code Geek 9ja"
              className="img-fluid"
              width="800"
            />
          </div>

          <Row className="py-5 mt-5 text-white">
            <Col md={6} className="p-0 p-md-3">
              <div>
                <h4>Get In Touch With Us Today</h4>
                <p className="fs-small">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  pretium nascetur vitae accumsan himenaeos faucibus habitasse.
                </p>
              </div>
            </Col>

            <Col md={3} sm={6} className="mb-4">
              {/* <Row> */}

              <div
                className="d-flex justify-content-center border rounded-3 px-4 py-2 mb-3"
                style={{ width: "max-content" }}
              >
                <h5>
                  <GoMail className="me-3" />
                </h5>
                <div>
                  <h6 className="m-0 fs-small fs-bold"> For Consultation</h6>
                  <span className="fs-small m-0 ">
                    <a href="mailto:code@email.com ">code@email.com</a>
                  </span>
                </div>
              </div>

              <div
                className="d-flex justify-content-center border rounded-3 px-4 py-2 "
                style={{ width: "max-content" }}
              >
                <h5>
                  <GoMail className="me-3" />
                </h5>
                <div>
                  <h6 className="m-0 fs-small fs-bold"> Our Service</h6>
                  <span className="fs-small m-0 ">
                    <a href="mailto:code@email.com ">code@email.com</a>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Row>
                <Col>
                  <div
                    className="d-flex justify-content-center border rounded-3 px-4 py-2 mb-3"
                    style={{ width: "max-content" }}
                  >
                    <h5>
                      <GoMail className="me-3" />
                    </h5>
                    <div>
                      <h6 className="m-0 fs-small fs-bold"> For Call</h6>
                      <span className="fs-small m-0 ">
                        <a href="tel: +234 000 0000 00">+234000000000</a>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>

              <div
                className="d-flex justify-content-center border rounded-3 px-4 py-2 "
                style={{ width: "max-content" }}
              >
                <h5>
                  <GoMail className="me-3" />
                </h5>
                <div>
                  <h6 className="m-0 fs-small fs-bold"> Work Hour</h6>
                  <span className="fs-small m-0 ">
                    <a href="mailto:code@email.com ">code@email.com</a>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
