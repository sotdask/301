import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const locations = [
  {
    id: "thessaloniki",
    label: "Thessaloniki",
    phoneTel: "+306940883297",
    phoneDisplay: "+30 694 088 3297",
  },
  {
    id: "santorini",
    label: "Santorini",
    phoneTel: "+306971112233",
    phoneDisplay: "+30 697 111 2233",
  },
  {
    id: "irakleio",
    label: "Irakleio",
    phoneTel: "+306982223344",
    phoneDisplay: "+30 698 222 3344",
  },
  {
    id: "cyprus",
    label: "Cyprus",
    phoneTel: "+35799111222",
    phoneDisplay: "+357 99 111 222",
  },
];

const ContactInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = locations[activeIndex];

  return (
    <section
      aria-labelledby="contact-info-heading"
      className="section-margin pb-[clamp(2.813rem,3.949vw+1.949rem,6.688rem)] bg-linear-to-r from-white to-stone-100"
    >
      <div className="section-padding">
        <header className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2
            id="contact-info-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
          >
            Contact information
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
            Choose the place that works best for you. Every link opens in the
            Phone app on your device.
          </p>
        </header>

        <div
          className="menuWrapper mt-4 flex w-full flex-col items-stretch gap-5 md:mt-6 lg:mt-8 md:flex-row md:items-center md:justify-center"
          role="group"
          aria-label="Office locations"
        >
          {locations.map(({ id, label }, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveIndex(index)}
                className={`group relative flex w-full cursor-pointer items-center justify-center overflow-hidden border-2 px-6 py-3 transition-colors duration-300 lg:inline-flex lg:w-auto ${
                  isActive
                    ? "active border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-900 bg-transparent text-neutral-900"
                }`}
              >
                <span
                  className={`relative z-10 text-center text-lg tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-900 group-hover:text-white"
                  }`}
                >
                  {label}
                </span>
                {!isActive && (
                  <span
                    className="absolute top-0 left-[-10%] h-full w-0 origin-left -skew-x-12 bg-neutral-900 transition-all duration-400 group-hover:w-[120%]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex w-full justify-center">
          <a
            id={`panel-${active.id}`}
            href={`tel:${active.phoneTel.replace(/\s/g, "")}`}
            className="bodyWrapper mt-8 flex w-full max-w-150 flex-row items-center gap-8 rounded-xl border border-stone-200 bg-white p-6 text-neutral-700 shadow-sm transition duration-500 ease-in-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:gap-12 md:p-8"
          >
            <div className="rounded-xl bg-primary/30 p-4">
              <FaPhoneAlt
                className="text-3xl text-primary"
                aria-hidden="true"
              />
            </div>
            <p className="text-xl font-bold tracking-wider text-neutral-900 sm:text-2xl">
              {active.phoneDisplay}
            </p>
          </a>
        </div>
        <header className="mt-8 lg:mt-10 mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <h2
            id="contact-info-heading"
            className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
          >
            Email and Socials
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">
            Not a phone person? We get it. Here's more ways to contact us.
          </p>
        </header>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          <a
            href="mailto:sotdaskalou@gmail.com"
            className="bodyWrapper mt-6 flex w-full flex-col items-start gap-2 rounded-xl border border-stone-200 bg-white p-6 text-neutral-700 shadow-sm transition duration-500 ease-in-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:gap-4 md:p-8"
          >
            <div className="rounded-xl bg-primary/30 p-2">
              <IoIosMail className="text-4xl text-primary" aria-hidden="true" />
            </div>
            <span className="text-lg font-bold tracking-wide text-neutral-900 sm:text-lg">
              sotdaskalou@gmail.com
            </span>
          </a>
          <a
            href="#"
            className="bodyWrapper mt-6 flex w-full flex-col items-start gap-2 rounded-xl border border-stone-200 bg-white p-6 text-neutral-700 shadow-sm transition duration-500 ease-in-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:gap-4 md:p-8"
          >
            <div className="rounded-xl bg-primary/30 p-2">
              <FaInstagram
                className="text-4xl text-primary"
                aria-hidden="true"
              />
            </div>
            <span className="text-lg font-bold tracking-wide text-neutral-900 sm:text-lg">
              301 Architecture Studio
            </span>
          </a>
          <a
            href="#"
            className="bodyWrapper mt-6 flex w-full flex-col items-start gap-2 rounded-xl border border-stone-200 bg-white p-6 text-neutral-700 shadow-sm transition duration-500 ease-in-out hover:-translate-y-2 hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:gap-4 md:p-8"
          >
            <div className="rounded-xl bg-primary/30 p-2">
              <FaLinkedinIn
                className="text-4xl text-primary"
                aria-hidden="true"
              />
            </div>
            <span className="text-lg font-bold tracking-wide text-neutral-900 sm:text-lg">
              301 Architecture Studio
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
