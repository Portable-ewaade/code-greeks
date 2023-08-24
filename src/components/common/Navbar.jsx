import Link from "next/link";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-2 mx-auto bx-container">
      <div className="container-fluid bg-blue-600 mt-2">
        <Link href="/" className="navbar-brand" passHref>
          <img
            src="/assets/logo.png"
            alt="Code Geeks 9ja"
            className="img-fluid my-2 ms-md-4"
            style={{ width: "6rem", height: "3rem" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BiMenu />
        </button>
      </div>

      <div
        className="collapse navbar-collapse mt-4"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto fs-normal ms-4 ms-md-0 fw-medium">
          <li className="nav-item me-4">
            <Link
              href="/"
              className="nav-link text-white active font-weight-600"
              passHref
            >
              HOME
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link href="/about" className="nav-link text-white active" passHref>
              ABOUT
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link
              href="/reviews"
              className="nav-link text-white active"
              passHref
            >
              REVIEW
            </Link>
          </li>
          <li className="nav-item me-4">
            <Link
              href="/contact"
              className="nav-link text-white active"
              passHref
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <button className="btnn btnn1 mt-md-0 mt-2" type="submit">
          <Link href="/register" passHref>
            Get Started
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
