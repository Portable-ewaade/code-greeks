import "animate.css";
import { Col, Row } from "react-bootstrap";

const banner = () => {
  return (
    <section className="pb-md-5 pb-0 bx-container position-relative">
      <Row className="align-items-center py-3 mt-3">
        <div className="text-center my-md-4 my-2 ">
          <h3 className="text-white fw-bold">About Code Geeks 9ja</h3>
        </div>

        <Col md={6} className="animate__animated animate__zoomIn p-0 mt-4 mb-5 mb-md-0 about-banner">
          <div className=" mt-3 mb-5 mb-md-0">
            <img
              src="/assets/laptop-setup-2.png"
              alt="Code Geeks 9ja"
              className="img-fluid p-3 p-md-0 "
              style={{ width: "32rem", height: "auto" }}
            />
          </div>
        </Col>

        <Col md={6} className=" animate__animated animate__zoomIn mt-5 mt-md-0 pt-md-0 pt-5 px-md-2 mb-5 mb-md-0">
          <div className="dark-shadow-lg border text-white rounded-4 p-md-4 mt-4 p-3 mb-3">
            <p className="fs-small">
              Code Geeks 9ja is a tech training institute that offers training
              services to individuals to master the act of coding the right way.
              It provides effective private trainings and personified learning
              experiences that are designed to make individuals master software
              development skills rather than becoming just another average
              developers, and beyond just being a good coder, a top
              professional at it.
            </p>

            <p className="fs-small ">
              Software development is a very high paying job. However, it is not
              as easy to learn. With statistics showing that over 60% trainees
              end up abandoning the career pursuit due to the complexity of
              software development and the level of commitment required. There
              are various training centres in the country already but we have
              verified that most of these training institutes treat it as a
              business rather than mentorship for career growth. Students are
              often left confused about the next line of action following the
              completion of training programs which in most cases lasts for 6
              months. What is more, training institutes are more concerned about
              getting the next batch of trainees rather than establishing that
              the courses were successfully learnt, skills were confidently
              acquired, and also provide the needed guidance following the
              completion of the program.
            </p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default banner;
