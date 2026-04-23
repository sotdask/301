import React from "react";
import { footerlogo } from "../assets";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="section-padding text-white pt-22 flex flex-col lg:flex-row items-center lg:items-start gap-18 md:gap-24 lg:gap-30 xl:gap-38">
        <a href="/">
          <img src={footerlogo} alt="" />
        </a>
        <div className="footer-columns grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">
          <div>
            <h4 className="text-primary font-bold text-lg lg:text-xl mb-2 lg:mb-3">
              NAVIGATION
            </h4>
            <ul className="text-lg space-y-2">
              <li>
                <a
                  href="/"
                  className="transition duration-300 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg lg:text-xl mb-2 lg:mb-3">
              INFORMATION
            </h4>
            <ul className="text-lg space-y-2">
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition duration-300 hover:text-primary"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-lg lg:text-xl mb-2 lg:mb-3">
              CONTACT LINKS
            </h4>
            <ul className="text-lg space-y-2">
              <li>
                <a
                  href="mailto:sotdaskalou@gmail.com"
                  className="transition duration-300 hover:text-primary"
                >
                  sotdaskalou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:6940883297"
                  className="transition duration-300 hover:text-primary"
                >
                  6940883297
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-primary font-bold text-lg lg:text-xl mb-2 lg:mb-3">
              BUSINESS HOURS
            </h4>
            <ul className="text-lg space-y-2">
              <li>Monday: 9:00-17:00</li>
              <li>Tuesday: 9:00-17:00</li>
              <li>Wednesday: 9:00-17:00</li>
              <li>Thursday: 9:00-17:00</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
