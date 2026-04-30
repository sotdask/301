import React from "react";

function Quote() {
  return (
    <section className="section-padding section-margin">
      <div className="wrapper text-center italic text-lg md:text-xl lg:text-2xl">
        <div className="inline-block text-center lg:text-left">
          <div className="flex">
            <h4 className="mx-2">
              <span className="text-primary">“</span>
              Architecture is the reaching out for the truth.
              <span className="text-primary">”</span>
            </h4>
          </div>

          <div className="text-right mt-4 lg:-mr-6">
            <h4 className="text-lg md:text-xl lg:text-2xl">Louis Kahn</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quote;
