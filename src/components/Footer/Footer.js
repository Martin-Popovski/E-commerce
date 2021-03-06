import "./Footer.css";
import { footerLinks } from "../../data/footerLinks";

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container__top">
          <div className="footer-container__logo">
            <span>LOGO</span>
          </div>
          <div className="footer-container__links">
            <ul>
              {footerLinks.map((footerLink) => {
                return (
                  <li key={footerLink.title}>
                    <a href={footerLink.link}>{footerLink.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer-container__social">
            <a href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="50"
                viewBox="0 0 23 50"
              >
                <path d="M5 9.684v6.883H0V25h5v25h10V25h7.037s.652-4.051.963-8.463h-8v-5.756c0-.861 1.335-2.018 2.436-2.018H23V0h-7.564C4.719 0 5 8.426 5 9.684z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M49.998 9.35a20.256 20.256 0 0 1-5.891 1.631 10.378 10.378 0 0 0 4.51-5.725 20.57 20.57 0 0 1-6.518 2.516A10.186 10.186 0 0 0 34.613 4.5c-5.666 0-10.257 4.637-10.257 10.352 0 .812.09 1.604.266 2.359-8.523-.432-16.082-4.553-21.14-10.818a10.354 10.354 0 0 0-1.387 5.203c0 3.596 1.812 6.766 4.562 8.619a10.163 10.163 0 0 1-4.646-1.301v.129c0 5.016 3.537 9.201 8.227 10.154a10.36 10.36 0 0 1-2.703.361 9.69 9.69 0 0 1-1.931-.191c1.306 4.117 5.093 7.109 9.58 7.191a20.461 20.461 0 0 1-12.738 4.426c-.828 0-1.644-.053-2.446-.143A28.805 28.805 0 0 0 15.722 45.5c18.868 0 29.182-15.777 29.182-29.461l-.035-1.34a20.616 20.616 0 0 0 5.129-5.349z"></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 14 14"
              >
                <path
                  d="M13.958 9.885c-.034.746-.153 1.255-.326 1.7-.179.46-.418.851-.807 1.24-.39.389-.78.628-1.24.807-.446.173-.955.291-1.7.325-.747.035-.985.042-2.886.042-1.902 0-2.14-.007-2.887-.042-.745-.034-1.254-.152-1.699-.325a3.427 3.427 0 0 1-1.24-.807 3.425 3.425 0 0 1-.808-1.24c-.173-.445-.291-.954-.325-1.7C.006 9.139-.003 8.901-.003 7c0-1.901.009-2.139.043-2.886.034-.745.152-1.255.325-1.7.179-.46.418-.85.808-1.239.389-.39.779-.629 1.24-.807.445-.174.954-.291 1.699-.327C4.859.008 5.097 0 6.999 0 8.9 0 9.138.008 9.885.041c.745.036 1.254.153 1.7.327.46.178.85.417 1.24.807.389.389.628.779.807 1.239.173.445.292.955.326 1.7.034.747.042.985.042 2.886 0 1.901-.008 2.139-.042 2.885zM6.999 3.504a3.496 3.496 0 1 0 0 6.991 3.496 3.496 0 0 0 0-6.991zm4.253-1.506a.753.753 0 1 0 0 1.507.753.753 0 1 0 0-1.507zM6.998 9.002a2.001 2.001 0 1 1 0-4.003 2.001 2.001 0 0 1 0 4.003z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-container__bottom">
          <div></div>
          <div className="footer-container__bottom-links">
            <ul>
              <li>
                <span>Chamber of Commerce 63464101</span>
              </li>
              <li>
                <span>VAT NL 8552.47.502.B01</span>
              </li>
              <li>
                <span>Terms and conditions</span>
              </li>
            </ul>
          </div>
          <div className="footer-container__copy">
            <span>2021 Copyright</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
