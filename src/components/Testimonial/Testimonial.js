import "./Testimonial.css";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <div className="testimonial__text-wrapper">
        <p className="testimonial__text">{props.testimonial.text}</p>
        <span className="testimonial__author">{props.testimonial.author}</span>
      </div>
    </div>
  );
};

export default Testimonial;
