import { Col, Row } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Navbar } from '@/components/common';
import ReviewCardPublic from '@/components/reviews/ReviewCardPublic';
import { fetchReviews } from '@/backend/api';
import Head from 'next/head';

const index = () => {
  const { reviews, reviewsLoading, reviewsError, mutateReviews } = fetchReviews();

  return (
    <>
      <Head>
        <title>Student Reviews || Code Geeks 9ja</title>
      </Head>
      <section
        style={{
          backgroundImage: "url('../../../assets/review-bg.jpg')",
          backgroundColor: '#121212',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <Navbar />

        {reviews && (
          <>
            <div className="text-white px-3 px-md-0 mt-5 mt-md-0 mb-5 text-center">
              <h2 className="fw-bold mt-md-5">Student Reviews</h2>
              <h6 className=" fw-bold mt-3">
                Here are reviews gotten from Code Geeks 9ja students
              </h6>
              <h6 className=" fw-bold mb-5 mt-4">4.5 out of 5 | {reviews.length} reviews</h6>
            </div>

              <div>
                <Row>
                <Col md={4} className=" mt-md-5 ps-md-5 home-image ">
            {/* <img
              src="/assets/computer.jpeg"
              alt="Code Geeks 9ja"
              className="rounded-5 shadow-5 shadow-red"
            /> */}
            <div style={{}}>
              <video
                controls
                autoPlay
                muted
                loop
                src="/assets/vids/review-portable.mp4"
                style={{
                  width: '50%',
                  height: '80%',
                  objectFit: 'cover',
                  borderTop: '2px solid #e08cf9',
                  borderBottom: '2px solid #e08cf9',
                }}
                className="rounded-5"
              />
            </div>

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
          <Col md={4} className=" mt-md-5 ps-md-5 home-image ">
            {/* <img
              src="/assets/computer.jpeg"
              alt="Code Geeks 9ja"
              className="rounded-5 shadow-5 shadow-red"
            /> */}
            <div style={{}}>
              <video
                controls
                autoPlay
                muted
                loop
                src="/assets/vids/review-portable.mp4"
                style={{
                  width: '50%',
                  height: '80%',
                  objectFit: 'cover',
                  borderTop: '2px solid #e08cf9',
                  borderBottom: '2px solid #e08cf9',
                }}
                className="rounded-5"
              />
            </div>

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
          <Col md={4} className=" mt-md-5 ps-md-5 home-image ">
            {/* <img
              src="/assets/computer.jpeg"
              alt="Code Geeks 9ja"
              className="rounded-5 shadow-5 shadow-red"
            /> */}
            <div style={{}}>
              <video
                controls
                autoPlay
                muted
                loop
                src="/assets/vids/review-portable.mp4"
                style={{
                  width: '50%',
                  height: '80%',
                  objectFit: 'cover',
                  borderTop: '2px solid #e08cf9',
                  borderBottom: '2px solid #e08cf9',
                }}
                className="rounded-5"
              />
            </div>

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
            <div style={{ background: '#0F0113' }} className="pt-5">
              <div className="text-center bx-container mt-3">
                <Row className="pb-3 px-2 px-md-5 mx-auto">
                  <ReviewCardPublic reviews={reviews} limit={20} />
                </Row>
              </div>
              <div className="text-center text-white pb-5">
                <a href="/" className="fs-normal mt-2 ">
                  LOAD MORE <BsArrowRight />
                </a>
              </div>
            </div>
          </>
        )}
        {reviewsLoading && <div>Loading...</div>}
        {reviewsError && <div>{reviewsError}</div>}
      </section>
    </>
  );
};

export default index;
