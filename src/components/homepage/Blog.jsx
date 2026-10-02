import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../global/Button";
import { blackarrow } from "../../assets";

const Blog = () => {
  const { t } = useTranslation(["home", "articles", "common"]);

  return (
    <section className="section-margin section-padding flex flex-col items-center">
      <h3
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-2xl uppercase lg:text-3xl"
      >
        {t("blog.title")}{" "}
        <span className="font-bold text-primary">{t("blog.titleAccent")}</span>
      </h3>
      <div
        className="my-6 grid grid-cols-1 gap-y-4 lg:my-10 lg:grid-cols-2"
        data-gsap-stagger
      >
        <div className="border-b-3 border-b-primary pt-3 pb-6 md:py-6 lg:border-r-3 lg:border-b-0 lg:border-r-primary lg:px-10">
          <Link
            to="/articles/architecture-of-santorini"
            className="text-lg italic text-primary transition duration-300 hover:text-black md:text-2xl lg:text-3xl"
          >
            {t("items.santorini.title", { ns: "articles" })}
          </Link>
          <p className="my-3 lg:my-6">
            {t("items.santorini.description", { ns: "articles" })}
          </p>
          <Link
            to="/articles/architecture-of-santorini"
            className="ml-auto inline-flex w-fit items-center gap-x-3 border-b border-current pb-0.5 text-sm uppercase tracking-wider transition duration-300 hover:translate-x-3 sm:text-sm md:text-base lg:border-b-2"
          >
            {t("common.readArticle", { ns: "common" })}
            <img src={blackarrow} alt="" />
          </Link>
        </div>
        <div className="py-3 md:py-6 lg:px-10">
          <Link
            to="/articles/when-the-roof-becomes-the-architecture"
            className="text-lg italic text-primary transition duration-300 hover:text-black md:text-2xl lg:text-3xl"
          >
            {t("items.roof.title", { ns: "articles" })}
          </Link>
          <p className="my-3 lg:my-6">
            {t("items.roof.description", { ns: "articles" })}
          </p>
          <Link
            to="/articles/when-the-roof-becomes-the-architecture"
            className="ml-auto inline-flex w-fit items-center gap-x-3 border-b border-current pb-0.5 text-sm uppercase tracking-wider transition duration-300 hover:translate-x-3 sm:text-sm md:text-base lg:border-b-2"
          >
            {t("common.readArticle", { ns: "common" })}
            <img src={blackarrow} alt="" />
          </Link>
        </div>
      </div>
      <Button
        to="/articles"
        text={t("blog.allArticles")}
        title={t("blog.allArticles")}
      />
    </section>
  );
};

export default Blog;
