import React from "react";

function HowItWorks() {
  return (
    <section className="py-3 border-bottom" id="how-it-works">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder">How It Works</h2>
          <p className="lead mb-0">
            Our waste management process ensures a cleaner and greener
            environment
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-3 col-md-6 mb-5">
            <div className="text-center">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-trash"></i>
              </div>
              <h3 className="h4 fw-bolder">Step 1: Waste Collection</h3>
              <p className="mb-0">
                We collect waste from your doorstep using eco-friendly vehicles.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <div className="text-center">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-funnel"></i>
              </div>
              <h3 className="h4 fw-bolder">Step 2: Waste Sorting</h3>
              <p className="mb-0">
                Waste is sorted into recyclable, organic, and non-recyclable
                categories.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <div className="text-center">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="fa-solid fa-recycle"></i>
              </div>
              <h3 className="h4 fw-bolder">Step 3: Recycling</h3>
              <p className="mb-0">
                Recyclable materials are processed and turned into new products.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <div className="text-center">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-trash-fill"></i>
              </div>
              <h3 className="h4 fw-bolder">Step 4: Safe Disposal</h3>
              <p className="mb-0">
                Non-recyclable waste is disposed of safely and responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
