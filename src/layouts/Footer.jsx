import React from "react";
import { Link } from "react-router-dom";
import { footerlogo, facebook, instagram, tiktok } from "../assets";

function Footer() {
  return (
    <footer className="bg-black section-padding pb-1">
      <div className="text-white pt-22 flex flex-col lg:flex-row items-center lg:items-start gap-18 md:gap-24 lg:gap-30 xl:gap-38">
        <Link to="/">
          <img src={footerlogo} alt="" />
        </Link>
        <div className="footer-columns grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-6">
          <div>
            <h4 className="text-primary font-bold text-lg lg:text-xl mb-2 lg:mb-3">
              NAVIGATION
            </h4>
            <ul className="text-lg space-y-2">
              <li>
                <Link
                  to="/"
                  className="transition duration-300 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition duration-300 hover:text-primary"
                >
                  About us
                </Link>
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
      <ul className="wrapper flex justify-center my-5 md:my-7 lg:my-9 gap-12">
        <li>
          <a href="#">
            <img src={facebook} alt="" className="opacity-70 transition duration-300 hover:scale-110" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="" className="opacity-70 transition duration-300 hover:scale-110"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={tiktok} alt="" className="opacity-70 transition duration-300 hover:scale-110"/>
          </a>
        </li>
      </ul>
      <div className="text-white flex flex-col w-full lg:flex-row items-center justify-between gap-2 lg:gap-4">
        <p className="text-sm text-center lg:text-right">
          © {new Date().getFullYear()} 301 Architecture Studio. All rights reserved
        </p>
        <a
          href="https://sotdask.gr"
          target="_blank"
          rel="noopener noreferrer"
          title="Visit sotdask.gr"
          className="text-sm text-center lg:text-right flex items-center gap-1"
        >
          Created using
          <span className="inline-block animate-sparkle">✨</span> by SD
        </a>
      </div>
    </footer>
  );
}

export default Footer;
