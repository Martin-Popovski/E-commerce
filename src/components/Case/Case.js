import "./Case.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Case = (props) => {
  return (
    <div className="case">
      <a className="case__img-hover-zoom" href={props.case.link}>
        <img className="case__image" src={props.case.image} alt="Case" />
      </a>
      <p className="case__name">{props.case.name}</p>
      <p className="case__title">{props.case.title}</p>
      <a className="case__link" href={props.case.link}>
        <FontAwesomeIcon icon={faCaretRight}  /> View case
      </a>
    </div>
  );
};

export default Case;
