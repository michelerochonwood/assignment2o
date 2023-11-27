import React from "react";
const michele3 = 'https://raw.githubusercontent.com/michelerochonwood/imagesReact/main/michele3.png';

    function Header(User) {
        return (
          <nav className="navbar navbar-expand-lg custom-navbar" data-bs-theme="dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
          <img
            src={michele3}
            alt="Michele Logo"
            width="45"
            height="auto"
            className="logo"
          />
          <div className="brand-info">
            <h4>CAREER PROFILE</h4>
            <h6>Michele Rochon-Wood</h6>
          </div>
        </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/" id="home">
                      Home
                    </a>
                    </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services" id="services">
                      Skillset
                    </a>

                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blog" id="blog">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/references" id="references">
                      References
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/addreference" id="references">
                      Add a reference
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact" id="contact">
                      Contact Michele
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#" id="profile">
                      <i className="bi bi-person-circle"></i> {User.username}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }


export default Header;