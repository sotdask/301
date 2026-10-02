import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import LanguageSwitcher from "./LanguageSwitcher";

const menuIcon = "absolute inset-0 text-4xl text-white transition duration-300";
const MainLink = "uppercase tracking-wider text-xl text-white";

function Menu() {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const NAV_ITEMS = [
    { to: "/", text: t("nav.home") },
    { to: "/about", text: t("nav.about") },
    { to: "/projects", text: t("nav.work") },
    { to: "/articles", text: t("nav.articles") },
    { to: "/contact", text: t("nav.contact") },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative z-70 p-2"
        aria-label="Menu"
        aria-expanded={open}
      >
        <div className="relative size-6">
          <HiOutlineMenuAlt3
            aria-hidden
            className={`${menuIcon} ${open ? "rotate-90 opacity-0" : "opacity-100"}`}
          />
          <IoMdClose
            aria-hidden
            className={`${menuIcon} ${open ? "opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </div>
      </button>

      <div
        role="presentation"
        className={`fixed inset-0 z-60 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      />

      <nav
        className={`fixed inset-x-0 top-0 z-65 flex min-h-screen flex-col items-center justify-center gap-24 bg-black/95 backdrop-blur-md transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col items-center gap-y-16 text-xl tracking-wider">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.to + item.text}
              className={`transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${i * 90}ms` : "0ms" }}
            >
              <Link to={item.to} onClick={close} className={MainLink}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${NAV_ITEMS.length * 90}ms` : "0ms" }}
        >
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}

export default Menu;
