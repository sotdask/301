import React from "react";

const SPECS = [
  { label: "Year:", value: "2025" },
  { label: "Location:", value: "Santorini, Greece" },
  { label: "Project Type:", value: "Architecture | Landscape Design | Hospitality Concept" },
  { label: "Size:", value: "133m²" },
  { label: "Status:", value: "Finished Study" },
];

const bodyCopy =
  "text-[clamp(0.9375rem,0.82rem+0.55vw,1.125rem)] leading-[1.75] sm:leading-[1.8]";

const Specs = () => {
  return (
    <section className="section-padding pt-10 md:pt-14 lg:pt-20">
      <ul className="grid w-max max-w-full grid-cols-1 justify-items-start gap-x-12 gap-y-6 md:grid-cols-[repeat(2,max-content)] md:gap-x-16 lg:grid-cols-[repeat(3,max-content)] lg:gap-x-20 md:gap-y-8 text-lg">
        {SPECS.map((spec) => (
          <li key={spec.label} className={`${bodyCopy}`}>
            <span className="font-bold">{spec.label} </span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specs;
