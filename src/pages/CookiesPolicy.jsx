import React from "react";
import { useTranslation } from "react-i18next";

function CookiesPolicy() {
  const { t } = useTranslation("legal");
  const sections = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="section-padding max-w-4xl">
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
          {t("cookies.title")}
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/90">
          {t("cookies.updated")}
        </p>

        <div className="mt-10 space-y-8 text-white/90 leading-relaxed">
          {sections.map((n) => (
            <div key={n}>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                {t(`cookies.s${n}t`)}
              </h2>
              <p className="mt-3">{t(`cookies.s${n}p`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CookiesPolicy;
