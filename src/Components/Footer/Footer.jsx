import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row footer-row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Nurse Caren.</h3>
                <p className="footer-d">
                  <strong>Phone:</strong> +254 111 201 762
                  <br />
                  <strong>Email:</strong> info@nursecaren.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/"} className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <Link>Causes</Link>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div> */}

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Nurse Caren</span>
          </strong>
          . All Rights Reserved
        </div>
        {/* <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
