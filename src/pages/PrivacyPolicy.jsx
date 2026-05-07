import React from "react";

function PrivacyPolicy() {
  return (
    <section className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="section-padding max-w-4xl">
        <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
          Privacy Policy
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/90">
          Last updated: May 7, 2026
        </p>

        <div className="mt-10 space-y-8 text-white/90 leading-relaxed">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              1. Data Controller
            </h2>
            <p className="mt-3">
              The data controller for this website is 301 Architecture Studio.
              For privacy requests, contact us at{" "}
              <a
                href="mailto:sotdaskalou@gmail.com"
                className="text-primary hover:underline"
              >
                sotdaskalou@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              2. Categories of Personal Data
            </h2>
            <p className="mt-3">
              We may process identity and contact data (name, email, phone),
              communication data (messages and project requests), and limited
              technical data (IP address, browser/device information, and
              cookie identifiers).
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              3. Purposes and Lawful Bases (GDPR Art. 6)
            </h2>
            <p className="mt-3">
              We process data to respond to inquiries and provide services
              (pre-contractual steps or contract performance), secure and
              improve the website (legitimate interests), comply with legal
              obligations, and where required, based on consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              4. Recipients and Processors
            </h2>
            <p className="mt-3">
              Personal data may be shared with trusted service providers (such
              as hosting, email, analytics, and technical support) under data
              processing agreements. We do not sell personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              5. International Transfers
            </h2>
            <p className="mt-3">
              If data is transferred outside the EEA, we apply appropriate GDPR
              safeguards, including Standard Contractual Clauses and additional
              technical measures where needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              6. Retention Periods
            </h2>
            <p className="mt-3">
              Personal data is retained only for as long as necessary for the
              purposes above, including legal, tax, accounting, and claims
              defense requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              7. Your GDPR Rights
            </h2>
            <p className="mt-3">
              You have the right to access, rectify, erase, restrict
              processing, object, and request data portability. Where
              processing relies on consent, you may withdraw consent at any
              time.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              8. Complaints to Supervisory Authority
            </h2>
            <p className="mt-3">
              You have the right to lodge a complaint with your local data
              protection authority if you believe your rights under GDPR are
              being infringed.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              9. Contact
            </h2>
            <p className="mt-3">
              For GDPR or privacy-related requests, contact us at{" "}
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

export default PrivacyPolicy;
