import { Col } from "react-bootstrap";

const sectionThree = () => {
  return (
    <>
      <section style={{ background: "#0F0113" }} className="">
        <div
          className="bx-container dark-shadow-lg rounded-5 pb-4 px-3 masterCode-img"
          style={{
            backgroundImage: "url('../../../assets/banner-bg.png')",

            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Col md={12} className=" pt-4 text-center">
            <div
              style={{ width: "18rem", margin: "auto" }}
              className=" fw-bold text-white fs-small text-center card-border rounded-4 p-md-2 p-1 "
            >
              Wondering Our Secret To Making you
              <h6 className="text-color fs-medium fw-bold">Master Coding?</h6>
            </div>
          </Col>

          <div className="text-white px-md-5 mt-3 mt-md-0">
            <p className="p-md-5 p-2 fs-small ">
              Our Affiliation with Jaflah Software Development Company is the
              mother company of Code Geeks 9ja. This affiliation births the
              incredible feature that differentiates Code Geeks 9ja from other
              IT institutes in the country as it allows our trainees to have
              direct access to production applications coding. As an engineer,
              there are issues that you would only face on production apps. As
              well, there is a limit to what you can learn and experience by
              building test apps locally on your computers. Things can become a
              little scarier in live apps. And so you do not get lost when you
              face job interviews or pushed into a heavy code base, outside our
              horizons, we give you the opportunity to equip yourself and
              strengthen your portfolio with proven live applications. This is
              priceless and will only benefit you greatly as you dive into the
              ocean of job opportunities in the software development world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default sectionThree;
