import React from "react";
import Button from "../global/Button";
import { blackarrow } from "../../assets";

const Blog = () => {
  return (
    <section className="section-margin section-padding flex flex-col items-center">
      <h3 className="uppercase text-2xl lg:text-3xl">
        articles by our <span className="text-primary font-bold">studio</span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 my-6 lg:my-10">
        <div className="border-b-primary border-b-3 lg:border-r-primary lg:border-r-3 lg:border-b-0 pt-3 pb-6 md:py-6 lg:px-10">
          <a
            href="#"
            className="text-primary text-lg md:text-2xl lg:text-3xl italic transition duration-300 hover:text-black"
          >
            Minimal Living: ο Xώρος Aναπνέει με Λιγότερα.
          </a>
          <p className="my-3 lg:my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud .Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            .
          </p>
          <a
            href="#"
            className="ml-auto inline-flex w-fit items-center gap-x-3 border-b lg:border-b-2 border-current pb-0.5 text-sm uppercase tracking-wider transition duration-300 sm:text-sm md:text-base hover:translate-x-3"
          >
            read the article
            <img src={blackarrow} alt="" />
          </a>
        </div>
        <div className="py-3 md:py-6 lg:px-10">
          <a
            href="#"
            className="text-primary text-lg md:text-2xl lg:text-3xl italic transition duration-300 hover:text-black"
          >
            Η Επιστροφή του Φυσικού Υλικού στη Σύγχρονη Κατοικία.
          </a>
          <p className="my-3 lg:my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud .Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            .
          </p>
          <a
            href="#"
            className="ml-auto inline-flex w-fit items-center gap-x-3 border-b lg:border-b-2 border-current pb-0.5 text-sm uppercase tracking-wider transition duration-300 sm:text-sm md:text-base hover:translate-x-3"
          >
            read the article
            <img src={blackarrow} alt="" />
          </a>
        </div>
      </div>
      <Button to="#" text="All Articles" title="All Articles" />
    </section>
  );
};

export default Blog;
