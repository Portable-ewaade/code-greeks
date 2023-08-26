import { Navbar } from "@/components/common";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { newsContent } from "../../../src/data/mockData";

const blog = () => {
  return (
    <section className="review-bg pt-4">
      <Navbar />
      <div className="bx-container">
        <div className="">
          <h3 className=" text-center px-3 py-2 mt-5 text-white fw-bold ">
            Some news for ya!
          </h3>
        </div>

        <Row className="pb-5 mt-5 px-0">
          <Col md={4} className="p-0 p-md-3 mb-3">
            <div
              className="card bg-transparent px-md-3 px-3 border card-border rounded-3 news-card"
              style={{ width: "100%" }}
            >
              {newsContent
                .filter((news) => news.id === 1)
                .map((news, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`/assets/${news.img}`}
                        width="100%"
                        height="250"
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
                        <p className="fs-normal fw-bold text-white mt-3">
                          {news.title.substr(0, 35)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col md={4} className="p-0 p-md-3 mb-3">
            <div
              className="card bg-transparent px-md-3 px-3 border card-border rounded-3 news-card"
              style={{ width: "100%" }}
            >
              {newsContent
                .filter((news) => news.id === 2)
                .map((news, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`/assets/${news.img}`}
                        width="100%"
                        height="250"
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
                        <p className="fs-normal fw-bold text-white mt-3">
                          {news.title.substr(0, 35)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col md={4} className="p-0 p-md-3 mb-3">
            <div
              className="card bg-transparent px-md-3 px-3 border card-border rounded-3 news-card"
              style={{ width: "100%" }}
            >
              {newsContent
                .filter((news) => news.id === 3)
                .map((news, index) => {
                  return (
                    <div key={index}>
                      <img
                        src={`/assets/${news.img}`}
                        width="100%"
                        height="250"
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
                        <p className="fs-normal fw-bold text-white mt-3">
                          {news.title.substr(0, 35)}...
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Col>
          {/* <Col md={4} className="mt-4 mt-md-0 mb-3 p-0 p-md-3">
            <div
              className="card bg-transparent px-md-2 px-3 border card-border rounded-3 news-card"
              style={{ width: '100%' }}
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
                            height="250"
                            alt="Code Geeks 9ja"
                            className="mt-3"
                          />
                          <div className="card-body">
                            <button className="btnn2 mt-md-0 mt-3 px-3 py-2" type="submit">
                              <a className="text-white fs-small fw-bold ">Devops </a>
                            </button>
                            <Link href={`/blog/${news.slug}`}>
                              <p className="fs-normal fw-bold text-white mt-3">
                                {news.title.substr(0, 30)}...
                              </p>
                            </Link>
                          </div>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Col> */}
          <div className="text-center text-white mt-3">
            <a href="/blog" className="fs-normal mt-4 ">
              SEE MORE <BsArrowRight />
            </a>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default blog;
