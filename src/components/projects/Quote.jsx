import React from "react";
import { useTranslation } from "react-i18next";

function Quote() {
  const { t } = useTranslation("home");

  return (
    <section className="section-padding section-margin">
      <div className="wrapper text-center text-lg italic md:text-xl lg:text-2xl">
        <div className="inline-block text-center lg:text-left">
          <div className="flex">
            <h4 className="mx-2">
              <span className="text-primary">“</span>
              {t("quote.text")}
              <span className="text-primary">”</span>
            </h4>
          </div>

          <div className="mt-4 text-right lg:-mr-6">
            <h4 className="text-lg md:text-xl lg:text-2xl">{t("quote.author")}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
