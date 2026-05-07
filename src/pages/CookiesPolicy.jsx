import React from "react";

function CookiesPolicy() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="section-padding max-w-4xl">
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
          Cookies Policy
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/90">
          Last updated: May 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-white/90 leading-relaxed">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              1. What Are Cookies
            </h2>
            <p className="mt-3">
              Cookies are small text files stored on your device when you visit
              a website. Under GDPR and the ePrivacy framework, non-essential
              cookies require your prior consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              2. Legal Basis for Cookie Use
            </h2>
            <p className="mt-3">
              Strictly necessary cookies are used on the basis of legitimate
              interest to provide core website functionality. Analytics,
              preferences, and marketing cookies are used only with your
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              3. Cookie Categories
            </h2>
            <p className="mt-3">
              We may use strictly necessary cookies, analytics cookies,
              functionality/preference cookies, and third-party cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              4. Consent Management
            </h2>
            <p className="mt-3">
              You can accept, reject, or customize non-essential cookies at any
              time through your cookie banner or preferences panel. You can also
              change settings in your browser.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              5. Third-Party Cookies
            </h2>
            <p className="mt-3">
              Some cookies may be set by third-party providers (for example,
              embedded media or analytics tools). Their processing is governed
              by their own privacy notices.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              6. Cookie Retention
            </h2>
            <p className="mt-3">
              Cookie lifetime varies by type. Session cookies expire when you
              close your browser; persistent cookies remain for a defined period
              unless deleted earlier.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              7. Updates to This Policy
            </h2>
            <p className="mt-3">
              We may update this Cookies Policy to reflect legal or operational
              changes. The latest version is always published on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              8. Contact
            </h2>
            <p className="mt-3">
              For cookie and consent-related questions, contact us at{" "}
              <a
                href="mailto:sotdaskalou@gmail.com"
                className="text-primary hover:underline"
              >
                sotdaskalou@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookiesPolicy;
