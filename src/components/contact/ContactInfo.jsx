import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="section-margin bg-white">
      <div className="section-padding mt-32 lg:mt-0">
        <h4 className="text-xl text-center lg:text-start md:text-2xl tracking-wider font-bold">
          Contact Information
        </h4>
        <p className="text-center text-base lg:text-start mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <div className="wrapper flex flex-col lg:flex-row gap-16 items-center mt-10">
          <a href="#" className="flex flex-col items-center group">
            <IoIosMail className="text-primary text-5xl transition ease-in-out duration-500 group-hover:-translate-y-2" />
            <span className="text-lg font-bold tracking-wide mt-4">
              sotdaskalou@gmail.com
            </span>
          </a>{" "}
          <a href="#" className="flex flex-col items-center group">
            <FaPhoneAlt className="text-primary text-4xl transition ease-in-out duration-500 group-hover:-translate-y-2" />
            <span className="text-lg font-bold tracking-wide mt-7">
              6940883297
            </span>
          </a>
          <a href="#" className="flex flex-col items-center group">
            <FaLinkedin className="text-primary text-5xl transition ease-in-out duration-500 group-hover:-translate-y-2" />
            <span className="text-lg font-bold tracking-wide mt-4">
              sotdask
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
