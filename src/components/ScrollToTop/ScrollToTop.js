import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import "./ScrollToTop.css";

function ScrollToTop(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > 300) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    }
  }, []);

  return (
    <div
      className={
        "scroll-top scroll-top" + (scrolled ? "--vissible " : "--hidden")
      }
    >
      <a href="#hero-section" className="scroll-top__arrow">
        <FontAwesomeIcon icon={faLongArrowAltUp} />
        TOP
      </a>
    </div>
  );
}

export default ScrollToTop;
