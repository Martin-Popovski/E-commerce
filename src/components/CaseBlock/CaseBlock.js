import "./CaseBlock.css";
import Case from "../Case/Case";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const classNames = require("classnames");

const CaseBlock = (props) => {
  const caseBlockClass = classNames({
    "case-block": true,
    "case-block--left": props.left,
  });

  const firstCase = props.cases[0];

  const smallCases = props.cases.slice(1, props.cases.length);

  return (
    <div className={caseBlockClass}>
      {props.left ? (
        <>
          <div className="case-block__small-cases">
            {smallCases.map((item) => {
              return (
                <div className="case-block__small-case" key={item.name}>
                  <p className="case-block__name">{item.name}</p>
                  <p className="case-block__title">{item.title}</p>
                  <a className="case-block__link" href={item.link}>
                    <FontAwesomeIcon icon={faCaretRight} /> View case
                  </a>
                </div>
              );
            })}
          </div>
          <Case case={firstCase} />
        </>
      ) : (
        <>
          <Case case={firstCase} />
          <div className="case-block__small-cases">
            {smallCases.map((item) => {
              return (
                <div className="case-block__small-case" key={item.name}>
                  <p className="case-block__name">{item.name}</p>
                  <p className="case-block__title">{item.title}</p>
                  <a className="case-block__link" href={item.link}>
                    <FontAwesomeIcon icon={faCaretRight} /> View case
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CaseBlock;
