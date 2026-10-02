import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { blackarrow } from "../assets";

function ExposedStructureLiving() {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <article className="bg-white text-neutral-800">
      <header className="section-padding pt-28 pb-12 md:pt-36 md:pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/articles"
            className="inline-flex items-center gap-x-2 text-sm uppercase tracking-wider text-primary transition duration-300 hover:-translate-x-1"
          >
            <img src={blackarrow} alt="" className="rotate-180 opacity-70" />
            {t("common.backToArticles", { ns: "common" })}
          </Link>

          <p className="mt-8 text-sm font-bold text-primary md:text-base">
            {t("roof.date")}
          </p>
          <h1 className="mt-4 text-3xl leading-tight tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t("roof.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            {t("roof.lead")}
          </p>
          <span className="mt-8 block h-0.5 w-16 bg-primary" />
        </div>
      </header>

      <div className="section-padding pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-[1.8] text-neutral-700 md:text-lg md:leading-[1.85]">
          <p>{t("roof.p1")}</p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            {t("roof.h1")}
          </h2>
          <p>{t("roof.p2")}</p>
          <p>{t("roof.p3")}</p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            {t("roof.h2")}
          </h2>
          <p>{t("roof.p4")}</p>
          <p>{t("roof.p5")}</p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            {t("roof.h3")}
          </h2>
          <p>{t("roof.p6")}</p>
          <p>{t("roof.p7")}</p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            {t("roof.h4")}
          </h2>
          <p>{t("roof.p8")}</p>
          <p>{t("roof.p9")}</p>

          <h2 className="pt-4 text-2xl tracking-tight text-neutral-900 md:text-3xl">
            {t("roof.h5")}
          </h2>
          <p>{t("roof.p10")}</p>
          <p>{t("roof.p11")}</p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-stone-200 pt-8">
          <Link
            to="/articles"
            className="inline-flex items-center gap-x-3 text-sm uppercase tracking-wider text-primary transition duration-300 hover:translate-x-2 md:text-base"
          >
            {t("common.allArticles", { ns: "common" })}
            <img src={blackarrow} alt="" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ExposedStructureLiving;
