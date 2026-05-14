import React from "react";
import { contact } from "../../assets";

const Hero = () => {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-neutral-950 via-black to-black pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-primary) 0%, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-primary) 0%, transparent 40%)",
        }}
      />

      <div className="section-padding relative z-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-xl text-center lg:max-w-lg lg:text-left">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="block h-0.5 w-10 shrink-0 bg-primary sm:w-14" />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm">
                Get in touch
              </p>
            </div>

            <h1
              id="contact-hero-heading"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="50"
              className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Let&apos;s talk about{" "}
              <span className="text-primary">your next space</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="100"
              className="mt-6 text-lg leading-relaxed text-neutral-300 sm:text-xl"
            >
              Whether you have a brief, a question, or you&apos;re still
              exploring ideas, we&apos;re happy to hear from you. Share a few
              details and we&apos;ll get back to you as soon as we can.
            </p>
          </div>

          <div
            className="relative mx-auto w-full max-w-md shrink-0 lg:mx-0 lg:max-w-lg"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/20 via-transparent to-primary/5 blur-2xl"
              aria-hidden="true"
            />
            <img
              src={contact}
              alt=""
              className="relative z-10 w-full rounded-2xl object-contain shadow-2xl shadow-black/40 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
