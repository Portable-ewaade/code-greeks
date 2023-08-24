import axios from 'axios';
import { ErrorMessage, Formik } from 'formik';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import * as yup from 'yup';

const RegsiterForm = () => {
  const [passport, setPassport] = useState();

  const user = {
    name: 'Tee',
    email: 'tunde@gmail.com',
    phone: '08143443420',
  };

  const initialValues = {
    name: user.name,
    email: user.email,
    phone: '',
    course: '',
    trainingMedium: '',
    connection: '',
    comment: '',
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .max(30, 'Maximum characters exceeded')
      .min(5, 'Must not be less than 5'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    phone: yup.string().required('Phone number is required'),
    course: yup.string().required('What course are you going for?'),
    connection: yup.string().required('How did you hear about us?'),
  });

  const handleSubmit = (values) => {
    console.log('Values: ', values);
    console.log('Passport: ', passport);
  };

  return (
    <section>
      <div className="h-50 pb-5 px-3 px-md-5">
        <Col
          xs={12}
          md={8}
          lg={7}
          xl={6}
          className="mx-auto mt-3 mb-5 px-4 px-md-5 py-5 form-container rounded rounded-3"
        >
          <div>
            <div className="text-light fs-large mb-3 fw-bold">Fill in the details below</div>
          </div>

          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Row className="mb-md-1">
                  {/* <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Passport Image</div>
                    <input
                      type="file"
                      onChange={(e) => setPassport(e.target.files[0])}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </Col> */}

                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Full name</div>
                    <input
                      type="text"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="name" component="span" className="error" />
                  </Col>

                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Email address</div>
                    <input
                      type="text"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="email" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Phone Number</div>
                    <input
                      type="text"
                      name="phone"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="phone" component="span" className="error" />
                  </Col>

                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Course</div>
                    <select
                      name="course"
                      className="contact-input py-1 py-md-2"
                      value={values.course}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="Fullstack Web" defaultValue>
                        Fullstack Web
                      </option>
                      <option value="Frontend Web">Frontend Web</option>
                      <option value="Backend Web">Backend Web</option>
                      <option value="Fullstack Mobile">Fullstack Mobile</option>
                      <option value="Frontend Mobile">Frontend Mobile</option>
                      <option value="Backend Mobile">Backend Mobile</option>
                    </select>
                    <ErrorMessage name="course" component="span" className="error" />
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Training Medium</div>
                    <select
                      name="trainingMedium"
                      id=""
                      className="contact-input py-1 py-md-2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.trainingMedium}
                    >
                      <option value="Virtual" defaultValue>
                        Virtual
                      </option>
                    </select>
                    <ErrorMessage name="trainingMedium" component="span" className="error" />
                  </Col>
                  <Col xs={12} md={6} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">How did you hear about us?</div>
                    <select
                      name="connection"
                      id=""
                      className="contact-input py-1 py-md-2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.connection}
                    >
                      <option value="Social Media" defaultValue>
                        Social Media
                      </option>
                      <option value="Internet/Google search">Internet/Google search</option>
                      <option value="Through a friend">Through a friend</option>
                      <option value="Recommendation">Recommendation</option>
                    </select>
                    <ErrorMessage name="connection" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mb-md-1">
                  <Col xs={12} className="px-2 mb-3">
                    <div className="text-white fs-small mb-1">Leave a comment (optional)</div>
                    <textarea
                      type="text"
                      name="comment"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.comment}
                      className="contact-input py-1 py-md-2"
                    />
                    <ErrorMessage name="comment" component="span" className="error" />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col md={6} className="mx-auto">
                    <button
                      className="btnn4 rounded-2 fs-normal fw-bold mb-2 dark-shadow-sm "
                      type="submit"
                    >
                      Submit
                    </button>
                  </Col>
                </Row>
              </form>
            )}
          </Formik>
        </Col>
      </div>
    </section>
  );
};

export default RegsiterForm;
