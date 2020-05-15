import React from "react";
// import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-lg-5 logo-col-1">
            <img
              src={require("../images/logo/Logo_Full_Inverse.png")}
              className="logo-footer"
              alt="logo-inverse"
            />
          </div>
          <div className="col-lg-4 medsos-col-2">
            <p className="text-sosmed">Social Media</p>
            <div className="navbar-list">
              <ul className="list-unstyled">
                <li className="facebook">
                  <img
                    src={require("../images/icon/ic_fb.png")}
                    widht="20.17px"
                    height="20.17px"
                    alt="icon-footer"
                  />
                </li>
                <li>
                  <img
                    src={require("../images/icon/ic_twitter.png")}
                    widht="20.17px"
                    height="20.17px"
                    alt="icon-footer"
                  />
                </li>
                <li>
                  <img
                    src={require("../images/icon/ic_ig.png")}
                    widht="20.17px"
                    height="20.17px"
                    alt="icon-footer"
                  />
                </li>
                <li>
                  <img
                    src={require("../images/icon/ic_linkedin.png")}
                    widht="20.17px"
                    height="20.17px"
                    alt="icon-footer"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 copyright-col-3">
            <p className="copyright">Copyright © 2020 Rulzaf</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;