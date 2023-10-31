import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
function NavBar({ toggleCartMenu, setToggleCartMenu }) {
  const [clikedd, setClickedd] = useState("");
  const [navbarMobile, setNavbarMobile] = useState(false);
  useEffect(() => {
    const navLinkels = document?.querySelectorAll(".a_nav_link");
    navLinkels.forEach((navLinkEl) => {
      navLinkEl.addEventListener("click", function () {
        document.querySelector(".active")?.classList?.remove("active");
        navLinkEl.classList.add("active");
      });
    });
  }, []);
  const manupilate = (e) => {
    e.preventDefault();
    const navbar = document?.getElementById("navbar");
    if (navbar) {
      navbar.classList.toggle("navbar-mobile");
      setNavbarMobile(true);
    }
  };

  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-color-color"
      >
        <div className="container d-flex align-items-center">
          <a href="/" className="logo me-auto ">
            <img src={logo} alt="" className="img-fluid nav-logoo" />
          </a>
          <nav id="navbar" className="navbar">
            <ul className="wellness">
              <li>
                <Link to={"/"} className="a_nav_link active">
                  Home
                </Link>
              </li>
              <li>
                <Link className="a_nav_link" to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to={"/courses"} className="a_nav_link">
                  Courses
                </Link>
              </li>

              <li>
                <Link className="a_nav_link" to={"/wellness-products"}>
                  <span>Wellnes Products</span>{" "}
                  {/* <i className="bi bi-chevron-down"></i> */}
                </Link>
              </li>
            </ul>
            <div>
              {navbarMobile ? (
                <i
                  className={`bi  bi-x 
                   mobile-nav-toggle tgl`}
                  // onClick={(e) => setClickedd(v4())}
                ></i>
              ) : (
                <i
                  className={`bi bi-list 
                   mobile-nav-toggle tgl`}
                  onClick={(e) => manupilate(e)}
                ></i>
              )}
            </div>
          </nav>
          <Cart
            toggleCartMenu={toggleCartMenu}
            setToggleCartMenu={setToggleCartMenu}
          />
        </div>
      </header>
    </>
  );
}

export default NavBar;
