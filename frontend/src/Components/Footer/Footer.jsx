import "./App.css"; // Ensure to import your CSS file
import "@fortawesome/fontawesome-free/css/all.css";
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer text-center">
      <div className="container p-4">
        <ul className="footer-nav mb-3">
        <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
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
