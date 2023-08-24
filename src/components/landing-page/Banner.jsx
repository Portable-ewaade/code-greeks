// import Image from "next/image";
import "animate.css";
import { Col, Row } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

const banner = () => {
  return (
    <section className="pb-5 bx-container p-0">
      <Row className="p-0 align-items-center py-3 py-md-5">
        <Col
          md={8}
          className=" mt-5 animate__animated animate__slideInRight m3 m-md-0"
        >
          <div
            className="mt-0 mt-md-5"
            style={{ width: "100%", background: "transparent" }}
          >
            <span className="fw-bold text-white fs-normal text-center border rounded-4 p-2 mb-4 text-center w-fluid">
              Welcome to the world of coding skill mastery
            </span>
            <h2 className="text-white fw-bold mb-4 mt-3">
              Become The Next Code Geek In 9ja!
            </h2>
            <p className="text-lg mb-4 text-white footer-text-color">
              Access a variety of effective private trainings and
              <br className="d-none d-md-block" /> personified learning
              experiences that are designed <br className="d-none d-md-block" />{" "}
              just for you. Master coding through proper mentoring
            </p>

            <button className="btnn btnn1 rounded-2 text-white fs-small mb-5 mt-4">
              <BsPencilSquare /> Get Started
            </button>
          </div>
        </Col>

        <Col
          md={4}
          className=" mt-md-5 animate__animated animate__slideInRight m-md-0 px-3 px-md-2"
        >
          <div className="dark-shadow-lg card-border text-black rounded-4 w-100 p-0">
            <div
              className="p-3 border-0 rounded-top-4 text-center"
              style={{ background: "#E08CF9" }}
            >
              <h6 className="fw-bold ">Full Stack Web Development</h6>
              <p className="fs-normal">Course start in </p>
              <h5>A timer here</h5>
            </div>
            <div className="card-body text-white">
              <p className="card-text text-white fs-small p-3">
                The development journey will take you through mastering
                fullstack web application development using HTML, CSS,
                Javascript, ReactJS, Styling Components, NodeJS + Express,
                MongoDB from absolute zero to hero
              </p>

              <div className="text-center px-5">
                <Row>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/html.png"
                        alt="Code Geeks 9ja"
                        className="p-3 img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/css.png"
                        alt="Code Geeks 9ja"
                        className="p-3 img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/javascript.png"
                        alt="Code Geeks 9ja"
                        className="p-3 img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/reactjs.png"
                        alt="Code Geeks 9ja"
                        className="mt-1 img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/node.png"
                        alt="Code Geeks 9ja"
                        className="mt-1 img-fluid"
                      />
                    </div>
                  </Col>
                  <Col md={4} xs={4} className="mb-3">
                    <div className="round-bg">
                      <img
                        src="/assets/mongodb.png"
                        alt="Code Geeks 9ja"
                        className=" mt-1 img-fluid"
                      />
                    </div>
                  </Col>

                  <div className="text-center">
                    <button className="btnn btnn1 rounded-2 text-white fs-small mb-2 ">
                      Register
                    </button>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default banner;
