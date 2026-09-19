import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const fieldClass =
  "w-full min-w-0 border border-stone-300 bg-white px-3 py-2.5 text-neutral-800 outline-none transition duration-300 placeholder:text-neutral-400 focus:border-primary focus:ring-1 focus:ring-primary";

const labelClass =
  "text-xs uppercase tracking-[0.18em] text-neutral-500";

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "772baf88-40d2-4406-ac3f-6b4dce5ba7ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <section className="section-margin section-padding flex w-full flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <span className="mb-5 block h-0.5 w-14 bg-primary" />
        <h4 className="max-w-full text-2xl tracking-tight text-neutral-900 md:text-3xl">
          Send a message
        </h4>
        <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
          Share a few details and we&apos;ll get back to you as soon as we can.
        </p>
      </div>

      <form onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-xl bg-white p-5 md:mt-10 md:p-8 lg:mt-12 lg:p-10">
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-6 md:flex-row md:gap-5">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label htmlFor="firstname" className={labelClass}>
                First Name*
              </label>
              <input
                type="text"
                name="fname"
                id="firstname"
                placeholder="Enter your first name"
                required
                className={fieldClass}
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <label htmlFor="lastname" className={labelClass}>
                Last Name*
              </label>
              <input
                type="text"
                name="lname"
                id="lastname"
                placeholder="Enter your last name"
                required
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="phone" className={labelClass}>
              Phone*
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              required
              className={fieldClass}
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email" className={labelClass}>
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className={fieldClass}
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label htmlFor="subject" className={labelClass}>
              Subject
            </label>
            <textarea
              name="subject"
              id="subject"
              placeholder="Write something.."
              rows={5}
              className={`${fieldClass} min-h-28 resize-y md:min-h-40`}
            />
          </div>

          <label
            htmlFor="terms"
            className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-neutral-600"
          >
            <input
              type="checkbox"
              name="terms"
              id="terms"
              required
              className="mt-0.5 size-4 shrink-0 accent-primary"
            />
            <span>
              I agree to the{" "}
              <Link
                to="/privacy-policy"
                className="text-neutral-900 underline decoration-primary/60 underline-offset-2 transition hover:text-primary"
              >
                Terms and Conditions
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="group relative mt-2 inline-flex w-full cursor-pointer items-center justify-center overflow-hidden border-2 border-black px-6 py-3 text-black md:w-auto md:self-start"
          >
            <span className="relative z-10 text-sm uppercase tracking-[0.2em] transition-colors duration-400 group-hover:text-white">
              Submit
            </span>
            <span
              className="absolute top-0 left-[-10%] h-full w-0 origin-left -skew-x-12 bg-black transition-all duration-400 group-hover:w-[120%]"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </section>
  );
}
