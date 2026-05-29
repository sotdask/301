import React from "react";

const SPECS = [
  { label: "Year:", value: "2025" },
  { label: "Location:", value: "Kamari, Santorini, Greece" },
  { label: "Project Type:", value: "Interior Architecture Design" },
  { label: "Size:", value: "150m²" },
  { label: "Status:", value: "Finished Study" },
];

const Specs = () => {
  return (
    <section className="section-padding pt-10 md:pt-14 lg:pt-20">
      <ul className="grid w-max max-w-full grid-cols-1 justify-items-start gap-x-12 gap-y-6 md:grid-cols-[repeat(2,max-content)] md:gap-x-16 lg:grid-cols-[repeat(3,max-content)] lg:gap-x-20 md:gap-y-8 text-lg">
        {SPECS.map((spec) => (
          <li key={spec.label}>
            <span className="font-bold">{spec.label} </span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specs;
