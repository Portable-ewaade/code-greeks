import { Navbar } from "@/components/common";
import Link from "next/link";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"


const index = () => {
  const route = useRouter();
  const { id } = route.query;
  console.log("Params is: ", id);
  return (
    <section className="review-bg text-white pb-4">
      <div>
        <Navbar />
        <div className="bx-container d-flex pt-3 pb-5 ps-md-5">
          <p>
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> /{" "}
            <Link href="/tick">Tips & Tricks</Link> / All the Core Features You
            Need, Check a number
          </p>
          <hr className="text-primary" />
        </div>
      </div>

      <div className="slug-container">
        {/* section one */}
        <div className="pt-3 pt-md-5 pb-4">
          <h6> In Tips & Tricks, vitae</h6>
          <h3>All the Core Features You Need, Check a number</h3>
        </div>

        <div
          className="d-flex justify-content-center px-4 py-2 mb-3"
          style={{ width: "max-content" }}
        >
          <h5>
            <img
              src="../../../../assets/icons/user.png"
              alt="Code Geeks 9ja"
              width="50px"
              className="me-3"
            />
          </h5>
          <div>
            <h6 className="mt-1 fs-small fs-bold"> McMarthy</h6>
            <span className="fs-small m-0 ">October 1, 2020 - 5 min read</span>
          </div>
        </div>

        {/* section 2 */}

        <div>
          <img
            src="../../../../assets/computer.jpeg"
            alt="Code Geeks 9ja"
            width="750px"
            className="mb-5 img-fluid"
          />
          <p>
            Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta
            justo. Velna vitae auctor congue magna nihil impedit ligula risus.
            Mauris donec ociis et magnis sapien sagittis sapien sem congue
            tempor gravida donec enim ipsum porta justo integer odio velna a
            purus efficitur ipsum primis in cubilia laoreet augue egestas luctus
            donec purus and blandit sodales
          </p>
          <p>
            Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor.
            Quisque laoreet turpis urna augue, viverra a augue eget, dictum
            tempor diam. Sed pulvinar consectetur and placerat imperdiet dui
            varius viverra. Pellentesque ac massa lorem fusce cursus aliquet
            elementum
          </p>

          <ol className="mt-4">
            <li>Donec color suscipit magna vehicula</li>
            <li>Placerat imperdiet dui varius</li>
            <li>Cubilia laoreet augue egestas cursusr</li>
            <li>Mullam blandit tempor sapien and placerat</li>
            <li>Praesent aliquet blandit posuere tempo</li>
          </ol>
        </div>

        {/* section 3 */}

        <div className="mt-5">
          <h3>Praesent aliquet tempus (tempor gravida ipsum as an example)</h3>

          <ul>
            <li className="my-3">
              Donec dolor magna, suscipit in magna dignissim, porttitor
              hendrerit diam. Nunc gravida ultrices felis eget faucibus.
              Praesent aliquet tempus, blandit posuere ligula varius
            </li>
            <li className="mb-3">
              Fringilla risus nec, luctus mauris orci auctor euismod purus
              pretium purus pretium ligula rutrum tempor mullam blandit tempor
              sapien and gravida donec ipsum at justo
            </li>
            <li className="mb-3">
              Quaerat sodales sapien undo euismod purus blandit velna vitae
              auctor a congue magna tempor sapien eget gravida laoreet turpis
              urna augue, viverra a augue eget, dictum tempor diam pulvinar
              consectetur purus efficitur ipsum primis in cubilia laoreet augue
              donec
            </li>
          </ul>

          <h3 className="mt-5 mb-3">Lorem egestas a dolor posuere</h3>
          <p>
            Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi
            tristique senectus et netus and malesuada famesa augue suscipit,
            luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas
            volute turpis dolores ut aliquam quaerat sodales sapien congue augue
          </p>
        </div>

        {/* section 4 */}

        <div className="mt-5 pt-3">
          <Row>
            <Col md={10} className="p-2">
              <Link href="/" className=" border fs-small py-2 px-4 me-1">
                Advice
              </Link>

              <Link href="/" className=" border fs-small py-2 px-3 mx-2">
                Tips & Tricks
              </Link>

              <Link href="/" className=" border fs-small py-2 px-3 mx-2">
                Trending Ideas
              </Link>
            </Col>

            <Col md={2} className="d-flex mt-3">
            <h5 className="mx-2"><FaFacebookF/></h5>
            <h5 className="mx-2"><FaTwitter /></h5>
           <h5 className="mx-2"> <FaLinkedinIn /></h5>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default index;
