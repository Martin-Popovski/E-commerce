import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";
const classNames = require("classnames");

const Navigation = (props) => {
  const [openNav, setNav] = useState(false);

  const toggleChecked = () => setNav((value) => !value);

  const navigationClass = classNames({
    "navigation": true,
    "navigation--black": openNav,
  });

  const navFlyoutClass = classNames({
    "nav-flyout": true,
    "nav-flyout--open": openNav,
    "nav-flyout--closed": !openNav,
  });

  return (
    <header>
      <nav className={navigationClass}>
        <div
          className={`${
            openNav
              ? "navigation__logo navigation__logo--black"
              : "navigation__logo navigation__logo--white"
          }`}
        >
          <span>LOGO</span>
        </div>
        <div className="navigation__menu">
          <div
            onClick={toggleChecked}
            className={`${openNav ? "nav-icon nav-icon--open" : "nav-icon"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={navFlyoutClass}>
        <div className="nav-flyout__links">
          {props.navigationLinks.map((link) => {
            return (
              <a className="nav-flyout__link" key={link.text} href={link.link}>
                <span>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="nav-flyout__icon"
                  />
                  {link.text}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
