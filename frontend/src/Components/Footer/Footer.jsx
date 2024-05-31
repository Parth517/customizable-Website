import "./App.css"; // Ensure to import your CSS file
import "@fortawesome/fontawesome-free/css/all.css";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-center">
      <div className="container p-4">
        <ScrollToTop />
        <ul className="footer-nav mb-3">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            id="Insta"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaInstagram />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            id="Twitter"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaXTwitter />
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            id="Youtube"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaYoutube />
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#343a40" }}
      >
        © {currentYear} Copyright
      </div>
    </footer>
  );
};

export default Footer;
