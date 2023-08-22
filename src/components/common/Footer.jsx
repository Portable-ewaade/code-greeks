import { Col, Row } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
// import  "bootstrap";
const Footer = () => {
  return (
    <section
      className="pt-3"
      style={{
        backgroundImage: "url('/assets/footer-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bx-container mx-auto">
        <Row>
          <Col xs={6} md={3} xl={3}>
            <ul>
              {" "}
              <h5 className="text-white"> Company</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/">
                <ul> About</ul>
              </a>
              <a href="/">
                <ul>Our Services</ul>
              </a>
              <a href="/">
                <ul>Gallery</ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              {" "}
              <h5 className="text-white">Students</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/">
                <ul>Student Reviews</ul>
              </a>
              <a href="/">
                <ul>Get Started</ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              {" "}
              <h5 className="text-white">Explore</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/">
                <ul>Tech News</ul>
              </a>
              <a href="/">
                <ul>Tech Careers</ul>
              </a>
              <a href="/">
                <ul>Courses </ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              {" "}
              <h5 className="text-white">Legal & Help</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/">
                <ul>Privacy Policy</ul>
              </a>
              <a href="/">
                <ul>Terms & Conditions</ul>
              </a>
              <a href="/">
                <ul>Contact Us</ul>
              </a>
            </div>
          </Col>
          <Col md={3} className="ms-md-4">
            <hr />
          </Col>
        </Row>

        <div className=" text-center text-white pb-md-1 pb-3 ">
          <img
            src="/assets/logo.png"
            alt="..."
            className="img-fluid mb-1"
            style={{ width: "8rem", height: "auto" }}
          />
          <h6 className="letter-space mb-2"> CODE GEEKS 9JA</h6>
          <p className="fs-small">
            Copyright &copy; 2023, Code Geeks 9ja. All rights reserverd.{" "}
          </p>

          <div>
            <a href="/" className="mx-3">
              <BsInstagram />
            </a>
            <a href="/">
              <BsTwitter />
            </a>
            <a href="/" className="mx-3">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

{
  /* <a href="#" className="position-absolute position-fixed bottom-0 end-0 top-25 m-4 arrow-up">
<i className="bi bi-arrow-up-circle h2"></i>
</a> */
}
