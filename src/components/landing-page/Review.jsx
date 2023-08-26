import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const review = () => {
  return (
    <>
      <section style={{ height: '20rem' }} className=" review-bg position-relative">
        <div className="bx-container">
          <div className="review-card rounded-4 position-absolute top-0 start-50 translate-middle">
            <Row className="card-border rounded-3">
              <Col md={6}>
                <Row>
                  <Col>
                    <Image
                      src="/assets/trainer1.png"
                      alt="Code Geeks 9ja"
                      width="173"
                      height="200"
                      className="img-fluid"
                    />
                  </Col>
                  <Col>
                    <Image
                      src="/assets/trainer2.png"
                      alt="Code Geeks 9ja"
                      width="175"
                      height="200"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="text-white p-sm-5 my-5">
                <div
                  className="card-border rounded-3 p-2 mx-auto mx-md-0 text-center"
                  style={{ width: '12rem', height: 'auto' }}
                >
                  <h4 className="text-white fw-bold fs-small ">WHY CHOOSE US</h4>
                </div>

                <h5 className=" mt-5 mt-md-5">Best And Experienced Trainers</h5>
                <p className="fs-small footer-text-color">
                  With us, you get the ultimate coding training and proper mentorship and guidance
                  from some of the best and experienced hands in the business.
                </p>

                <Link href="/about" className="fs-normal text-color fw-bold mt-2">
                  Read more...
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section className=" review-bg py-5 ">
        <div className="bx-container mt-5 ">
          <Row className=" mb-5 px-md-4 ">
            <div className="text-center mt-md-0 mt-5">
              <div className="my-4"></div>
            </div>
            <div className="pt-5 pt-md-0 text-white text-center">
              <h5 className="fs-normal fw-bold mt-5">STUDENT REVIEWS</h5>
              <h6 className="fs-normal fw-bold mb-5 mt-4">4.5 out of 5 | 5,281 reviews</h6>
            </div>
            <Col md={4} className="mb-3 text-center px-md-2">
              <div className="card border border-2 bg-transparent h-100 p-3 text-white">
                <div className="card-title">
                  <img src="/assets/star-icon.png" alt="Code Geeks 9ja" />
                </div>
                <p className="fs-small footer-text-color">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae vitae
                  inventore voluptates ipsum, odio optio natus, maiores cupiditate ducimus error,
                  accusantium ipsa at assumenda laboriosam incidunt omnis ullam numquam debitis
                  quos.
                </p>
                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">
                  Kehinde Adetule - Frontend
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-3 text-center  px-md-2">
              <div className="card border border-2 bg-transparent h-100 p-3 text-white py-auto">
                <div className="card-title">
                  <img src="/assets/star-icon.png" alt="Code Geeks 9ja" />
                </div>
                <p className="fs-small footer-text-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">
                  Ibrahim Jimoh - Frontend
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-3 text-center  px-md-2">
              <div className="card border border-2 bg-transparent h-100 p-3 text-white">
                <div className="card-title">
                  <img src="/assets/star-icon.png" alt="Code Geeks 9ja" />
                </div>
                <p className="fs-small footer-text-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="btnn3 mx-auto mt-3 p-3 text-white fs-small fw-bold ">
                  Ibrahim Jimoh - Frontend
                </p>
              </div>
            </Col>

            <div className="text-center text-white">
              <a href="/reviews" className="fs-normal mt-2 ">
                SEE MORE <BsArrowRight />
              </a>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default review;
