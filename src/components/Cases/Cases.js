import "./Cases.css";
import Filters from "../Filters/Filters";
import CaseContainer from "../CaseContainer/CaseContainer";
import CaseBlock from "../CaseBlock/CaseBlock";
import FadeIn from "../FadeIn/FadeIn";
import Testimonial from "../Testimonial/Testimonial";
import { firstRowCases } from "../../data/firstRowCases";
import { secondRowCases } from "../../data/secondRowCases";
import { thirdRowCases } from "../../data/thirdRowCases";
import { fourthRowCases } from "../../data/fourthRowCases";
import { firstBlockCases } from "../../data/firstBlockCases";
import { secondBlockCases } from "../../data/secondBlockCases";
import { testimonial } from "../../data/testimonial";

const Cases = (props) => {
  return (
    <section className="cases">
      <Filters/>
      <FadeIn>
        <CaseContainer cases={firstRowCases} />
      </FadeIn>
      <FadeIn>
        <CaseBlock cases={firstBlockCases} />
      </FadeIn>
      <FadeIn>
        <CaseContainer cases={secondRowCases} />
      </FadeIn>
      <FadeIn>
        <CaseBlock cases={secondBlockCases} left />
      </FadeIn>
      <FadeIn>
        <CaseContainer cases={thirdRowCases} />
      </FadeIn>
      <FadeIn>
        <Testimonial testimonial={testimonial} />
      </FadeIn>
      <FadeIn>
        <CaseContainer cases={fourthRowCases} />
      </FadeIn>
    </section>
  );
};

export default Cases;
