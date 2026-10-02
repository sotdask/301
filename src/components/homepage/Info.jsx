import React from "react";
import { useTranslation } from "react-i18next";
import { arrow } from "../../assets";
import Button from "../global/Button";

const Info = () => {
  const { t } = useTranslation("home");

  return (
    <section className="section-padding section-margin flex flex-col items-center text-center">
      <div className="flex justify-center" data-gsap-stagger>
        <h2 className="mr-1 text-xl uppercase text-primary md:text-2xl lg:mr-3 lg:text-3xl">
          {t("info.welcome")}
        </h2>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mr-1 text-xl uppercase md:text-2xl lg:mr-3 lg:text-3xl"
        >
          {t("info.we")}
        </span>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-4 text-xl font-bold uppercase md:text-2xl lg:mb-8 lg:text-3xl"
        >
          {t("info.studio")}
        </span>
      </div>
      <p className="mb-3 max-w-205 lg:mb-5">{t("info.p1")}</p>
      <p className="max-w-205">{t("info.p2")}</p>
      <div className="mt-8 flex flex-col items-center space-x-3 md:flex-row">
        <span className="text-base uppercase">{t("info.step1")}</span>
        <img
          src={arrow}
          alt=""
          className="my-10 max-w-16 rotate-90 md:my-0 md:rotate-0"
        />
        <span className="text-base uppercase">{t("info.step2")}</span>
        <img
          src={arrow}
          alt=""
          className="my-10 max-w-16 rotate-90 md:my-0 md:rotate-0"
        />
        <span className="text-base uppercase">{t("info.step3")}</span>
        <img
          src={arrow}
          alt=""
          className="my-10 max-w-16 rotate-90 md:my-0 md:rotate-0"
        />
        <span className="text-base uppercase">{t("info.step4")}</span>
      </div>
      <div className="wrapper mt-8 flex flex-col gap-y-4 md:flex-row md:gap-x-10">
        <Button to="/projects" text={t("info.portfolio")} title="Work" />
        <Button to="/about" text={t("info.team")} title="About" />
      </div>
    </section>
  );
};

export default Info;
