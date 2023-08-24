import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';

const RegisterBanner = () => {
  return (
    <section className="pt-5">
      <Row className="px-4 py-4 text-light text-center">
        <Col xs={7} md={3} className="position-absolute top-3 end-0 z-0">
          <img src="/assets/icons/register.svg" alt="Code Geeks 9ja" width="100%" />
        </Col>
        <h3 className="fs-large z-4">Get Started By Registring for a Course</h3>
      </Row>
    </section>
  );
};

export default RegisterBanner;
