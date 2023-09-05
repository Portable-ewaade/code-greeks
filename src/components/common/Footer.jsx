import { Col, Row } from 'react-bootstrap';
import { BsArrowUpCircle, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const Footer = () => {
  return (
    <section
      className="pt-5"
      style={{
        backgroundImage: "url('/assets/footer-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bx-container mx-auto">
        <Row>
          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white"> Company</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/about">
                <ul> About</ul>
              </a>
              <a href="/about">
                <ul>Our Services</ul>
              </a>
              <a href="/about">
                <ul>Gallery</ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Students</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/reviews">
                <ul>Student Reviews</ul>
              </a>
              <a href="/register">
                <ul>Get Started</ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Explore</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/blog">
                <ul>Tech News</ul>
              </a>
              <a href="/blog">
                <ul>Tech Careers</ul>
              </a>
              <a href="/">
                <ul>Courses </ul>
              </a>
            </div>
          </Col>

          <Col xs={6} md={3} xl={3}>
            <ul>
              <h5 className="text-white">Legal & Help</h5>
            </ul>
            <div className="footer-text-color fs-small">
              <a href="/">
                <ul>Privacy Policy</ul>
              </a>
              <a href="/">
                <ul>Terms & Conditions</ul>
              </a>
              <a href="/contact">
                <ul>Contact Us</ul>
              </a>
            </div>
          </Col>
          <Col md={3} className="ms-md-4">
            <hr />
          </Col>
        </Row>

        <div className=" text-center text-white">
          <img
            src="/assets/logo.png"
            alt="Code Geeks 9ja"
            className="img-fluid mb-1"
            style={{ width: '8rem', height: 'auto' }}
          />
          <h6 className="letter-space mb-2"> CODE GEEKS 9JA</h6>
          <p className="fs-small">Copyright &copy; 2023, Code Geeks 9ja. All rights reserverd. </p>

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
      {/* <div className="totop text-white text-end px-3" >
       <a href='#' className='fs-xxlarge'> <BsArrowUpCircle href='#' /></a>
      </div> */}
      <FloatingWhatsApp
        phoneNumber="2349046832081"
        accountName="Code Geeks 9ja"
        notification={true}
        avatar="/assets/logo.png"
        statusMessage="Replies instantly"
        buttonStyle={{marginBottom: "7rem"}}
      />
     
    </section>
  );
};

export default Footer;
