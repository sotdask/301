import React from "react";
import { arrow } from "../../assets";
import Button from "../global/Button";

const Info = () => {
  return (
    <section className="section-padding section-margin flex flex-col items-center text-center">
      <div className="flex justify-center" data-gsap-stagger>
        <h2 className="mr-1 lg:mr-3 text-xl md:text-2xl lg:text-3xl uppercase text-primary">
          welcome!
        </h2>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mr-1 lg:mr-3 text-xl md:text-2xl lg:text-3xl uppercase"
        >
          we
        </span>
        <span
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mb-4 lg:mb-8 text-xl md:text-2xl lg:text-3xl uppercase font-bold"
        >
          are 301 studio
        </span>
      </div>
      <p className="max-w-205 mb-3 lg:mb-5">
        What began as a common passion for architecture, design and creative
        problem-solving has grown into a young architectural team undertaking
        projects across Greece and Cyprus.
      </p>
      <p className="max-w-205">
        Today, we approach every project with the same energy that brought us
        together: fresh perspective, attention to detail, and a genuine desire
        to turn each idea into a space that feels thoughtful, functional and
        unique.
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
                <img
          src={arrow} 
          alt=""
          className="max-w-16 my-10 md:my-0 rotate-90 md:rotate-0"
        />
        <span className="uppercase text-base">deliver the space</span>
      </div>
      <div className="wrapper flex flex-col md:flex-row mt-8 gap-y-4  md:gap-x-10">
        <Button to="/projects" text="View Our Portfolio" title="Work" />
        <Button to="/about" text="View Our Team" title="About" />
      </div>
    </section>
  );
};

export default Info;
