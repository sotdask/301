import React from "react";
import { arrow } from "../../assets";
import Button from "../global/Button";

const Info = () => {
  return (
    <div className="section-padding section-margin flex flex-col items-center text-center">
      <div className="flex justify-center">
        <h2 className="mr-1 lg:mr-3 text-xl md:text-2xl lg:text-3xl uppercase text-primary">
          welcome!
        </h2>
        <span className="mr-1 lg:mr-3 text-xl md:text-2xl lg:text-3xl uppercase">
          we
        </span>
        <span className="mb-4 lg:mb-8 text-xl md:text-2xl lg:text-3xl uppercase font-bold">
          are 301 studio
        </span>
      </div>
      <p className="max-w-205 mb-3 lg:mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="max-w-205">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="mt-8 flex items-center flex-col md:flex-row space-x-3">
        <span className="uppercase text-base">form an idea</span>
        <img
          src={arrow}
          alt=""
          className="max-w-16 my-10 md:my-0 rotate-90 md:rotate-0"
        />
        <span className="uppercase text-base">discuss & plan</span>
        <img
          src={arrow}
          alt=""
          className="max-w-16 my-10 md:my-0 rotate-90 md:rotate-0"
        />
        <span className="uppercase text-base">design & create</span>
      </div>
      <div className="wrapper flex flex-col md:flex-row mt-8 gap-y-4  md:gap-x-10">
        <Button to="#" text="View Our Portfolio" title="Work" />
        <Button to="#" text="View Our Team" title="About" />
      </div>
    </div>
  );
};

export default Info;
