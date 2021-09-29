import "./CaseContainer.css";
import Case from "../Case/Case";

const CaseContainer = (props) => {
  return (
    <div className="case-container">
      {props.cases.map((item) => {
        return <Case case={item} key={item.name}/>
        })
      }
    </div>
  );
};

export default CaseContainer;
