import React from "react";
import "./nav.css";
import AppLogo from "../../assets/logo.png";

function Nav() {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/#">
          <img src={AppLogo} alt=""></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link  home" href="/#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Faq
              </a>
            </li>
            <li className="nav-item mr-0">
              <a className="nav-link" href="/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
