import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { newsContent } from "../../../src/data/mockData";

const news = () => {
  return (
    <section className="review-bg pt-4">
      <div className="bx-container">
        <div className="text-center">
          <button className="btnn btnn1 px-3 py-2" type="submit">
            <a className="text-white fs-small fw-bold ">NEWS FOR YOU</a>
          </button>
        </div>

        <Row className="pb-5 mt-5">
          <Col md={5} className="p-0 p-md-3">
            <div
              className="card bg-transparent px-md-5 px-4 border card-border rounded-3 news-card"
              style={{ width: "27rem" }}
            >
              {newsContent
                .filter((news) => news.id === 1)
                .map((news, index) => {
                  return (
                    <div key={index}>
                      <Image
                        src={`/assets/${news.img}`}
                        width="320"
                        height="298"
                        alt="Code Geeks 9ja"
                        className="mt-3"
                      />
                      {/* <div>
                        {news.map(rate => (
                          <BsStar />
                        ))}
                      </div> */}
                      <div className="card-body">
                        <button
                          className="btnn2 mt-md-0 mt-3 px-3 py-2"
                          type="submit"
                        >
                          <a className="text-white fs-small fw-bold ">
                            Devops{" "}
                          </a>
                        </button>
                        <p className="fs-small text-white mt-3">
                          {news.title.substr(0, 35)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col md={7} className="mt-4 mt-md-0 mb-3 p-0 p-md-3">
            <div
              className="card bg-transparent px-md-2 px-4 border card-border rounded-3 news-card"
              style={{ width: "100%" }}
            >
              <Row>
                {newsContent
                  .filter((news) => news.id !== 1)
                  .map((news, index) => {
                    return (
                      <Col md={6} key={index}>
                        <div>
                          <img
                            src={`/assets/${news.img}`}
                            width="100%"
                            height="298"
                            alt="Code Geeks 9ja"
                            className="mt-3"
                          />
                          <div className="card-body">
                            <button
                              className="btnn2 mt-md-0 mt-3 px-3 py-2"
                              type="submit"
                            >
                              <a className="text-white fs-small fw-bold ">
                                Devops{" "}
                              </a>
                            </button>
                            <p className="fs-small text-white mt-3">
                              {news.title.substr(0, 35)}...
                            </p>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col>
          <div className="text-center text-white mt-3">
            <a href="/" className="fs-normal mt-4 ">
              SEE MORE <BsArrowRight />
            </a>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default news;
