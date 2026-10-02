import React from "react";
import { useTranslation } from "react-i18next";

const bodyCopy =
  "text-[clamp(0.9375rem,0.82rem+0.55vw,1.125rem)] leading-[1.75] sm:leading-[1.8]";

const Specs = () => {
  const { t } = useTranslation("kamari");
  const specs = [
    { label: t("specs.year"), value: t("specs.yearValue") },
    { label: t("specs.location"), value: t("specs.locationValue") },
    { label: t("specs.type"), value: t("specs.typeValue") },
    { label: t("specs.size"), value: t("specs.sizeValue") },
    { label: t("specs.status"), value: t("specs.statusValue") },
  ];

  return (
    <section className="section-padding w-full pt-10 md:pt-14 lg:pt-20">
      <ul className="grid w-full grid-cols-1 justify-items-start gap-x-12 gap-y-6 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 lg:gap-x-20">
        {specs.map((spec) => (
          <li
            key={spec.label}
            className={`min-w-0 max-w-full break-words ${bodyCopy}`}
          >
            <span className="font-bold">{spec.label} </span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Specs;
