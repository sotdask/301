import React from "react";
import { useTranslation } from "react-i18next";
import AppLink from "../global/AppLink";
import { arrow } from "../../assets";

const SingleArticle = () => {
  const { t } = useTranslation(["articles", "common"]);

  const singleArticles = [
    {
      id: 1,
      date: t("items.santorini.date"),
      title: t("items.santorini.title"),
      description: t("items.santorini.description"),
      link: "/articles/architecture-of-santorini",
    },
    {
      id: 2,
      date: t("items.roof.date"),
      title: t("items.roof.title"),
      description: t("items.roof.description"),
      link: "/articles/when-the-roof-becomes-the-architecture",
    },
  ];

  return (
    <>
      {singleArticles.map((singleArticle) => (
        <div key={singleArticle.id} className="border-t-2">
          <div className="section-padding">
            <div className="card flex flex-col py-6">
              <span className="font-bold text-primary">
                {singleArticle.date}
              </span>
              <div className="wrapper mx-auto mt-3 flex w-full max-w-205 flex-col justify-center">
                <AppLink
                  to={singleArticle.link}
                  className="mb-3 text-lg italic text-primary transition duration-300 hover:text-black md:text-2xl lg:text-3xl"
                >
                  {singleArticle.title}
                </AppLink>
                <p>{singleArticle.description}</p>
              </div>
              <AppLink
                to={singleArticle.link}
                className="mt-3 flex justify-end gap-x-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:translate-x-3 sm:text-base md:text-xl"
              >
                {t("common.readMore", { ns: "common" })}
                <img src={arrow} alt="" />
              </AppLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleArticle;
