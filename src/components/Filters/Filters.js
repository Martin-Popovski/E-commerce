import React, { useState } from "react";
import "./Filters.css";

const Filters = (props) => {
  const [workOption, setWorkOption] = useState("all work");
  const [industryOption, setIndustryOption] = useState("all industries");

  const workOptions = ["all work", "work 1", "work 2"];

  const industryOptions = [
    "all industries",
    "all industries1",
    "all industries 2",
  ];

  return (
    <section className="filters">
      <div className="filters__wrapper">
        <span className="filters__text">Show me</span>
        <select
          name="work"
          className="filters__select"
          value={workOption}
          onChange={(e) => setWorkOption(e.currentTarget.value)}
        >
          {workOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filters__wrapper">
        <span className="filters__text">in</span>
        <select
          name="industry"
          className={"filters__select filters__select--long"}
          value={industryOption}
          onChange={(e) => setIndustryOption(e.currentTarget.value)}
        >
          {industryOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default Filters;
