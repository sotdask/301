import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { footerlogo, instagram, linkedin } from "../assets";

const phones = [
  {
    id: "thessaloniki",
    tel: "+306943023146",
    display: "+30 694 302 3146",
  },
  {
    id: "santorini",
    tel: "+306947819692",
    display: "+30 694 781 9692",
  },
  {
    id: "heraklion",
    tel: "+306945113282",
    display: "+30 694 511 3282",
  },
];

function Footer() {
  const { t } = useTranslation(["common", "contact"]);

  return (
    <footer className="bg-black pb-1">
      <div className="section-padding">
        <div className="flex flex-col items-center gap-18 pt-22 text-white md:gap-24 lg:flex-row lg:items-start lg:gap-30 xl:gap-38">
          <Link to="/" aria-label={t("a11y.logoHome")}>
            <img src={footerlogo} alt={t("brand.studio")} />
          </Link>
          <div className="footer-columns grid w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h4 className="mb-2 text-lg font-bold text-primary lg:mb-3 lg:text-xl">
                {t("footer.navigation")}
              </h4>
              <ul className="space-y-2 text-lg">
                <li>
                  <Link to="/" className="transition duration-300 hover:text-primary">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="transition duration-300 hover:text-primary">
                    {t("footer.aboutUs")}
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="transition duration-300 hover:text-primary">
                    {t("footer.ourWork")}
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="transition duration-300 hover:text-primary">
                    {t("nav.articles")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="transition duration-300 hover:text-primary">
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-bold text-primary lg:mb-3 lg:text-xl">
                {t("footer.information")}
              </h4>
              <ul className="space-y-2 text-lg">
                <li>
                  <Link to="/privacy-policy" className="transition duration-300 hover:text-primary">
                    {t("footer.privacyPolicy")}
                  </Link>
                </li>
                <li>
                  <Link to="/cookies-policy" className="transition duration-300 hover:text-primary">
                    {t("footer.cookiePolicy")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-lg font-bold text-primary lg:mb-3 lg:text-xl">
                {t("footer.contactLinks")}
              </h4>
              <ul className="space-y-2 text-lg">
                <li>
                  <a
                    href="mailto:301archstudio@gmail.com"
                    className="transition duration-300 hover:text-primary"
                  >
                    301archstudio@gmail.com
                  </a>
                </li>
                {phones.map((phone) => (
                  <li key={phone.id}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="transition duration-300 hover:text-primary"
                    >
                      {t(`info.locations.${phone.id}`, { ns: "contact" })}:{" "}
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <h4 className="mb-2 text-lg font-bold text-primary lg:mb-3 lg:text-xl">
                {t("footer.businessHours")}
              </h4>
              <ul className="space-y-2 text-lg">
                <li>{t("footer.monday")}</li>
                <li>{t("footer.tuesday")}</li>
                <li>{t("footer.wednesday")}</li>
                <li>{t("footer.thursday")}</li>
                <li>{t("footer.friday")}</li>
                <li>{t("footer.saturday")}</li>
                <li>{t("footer.sunday")}</li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="wrapper my-5 flex justify-center gap-12 md:my-7 lg:my-9">
          <li>
            <a href="https://www.instagram.com/301archstudio/" target="_blank" rel="noopener noreferrer" aria-label={t("a11y.instagram")}>
              <img
                src={instagram}
                alt=""
                className="opacity-70 transition duration-300 hover:scale-110"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/301-archstudio/" target="_blank" rel="noopener noreferrer" aria-label={t("a11y.linkedin")}>
              <img
                src={linkedin}
                alt=""
                className="opacity-70 transition duration-300 hover:scale-110"
              />
            </a>
          </li>
        </ul>
        <div className="flex w-full flex-col items-center justify-between gap-2 text-white lg:flex-row lg:gap-4">
          <p className="text-center text-sm lg:text-right">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <a
            href="https://sotdask.gr"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit sotdask.gr"
            className="flex items-center gap-1 text-center text-sm lg:text-right"
          >
            {t("footer.designBy")}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
