import React from "react";

function Features() {
  return (
    <section className="py-3 border-bottom" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-search"></i>
            </div>
            <h2 className="h4 fw-bolder">Smart Waste Identification</h2>
            <p>
              Enter your waste type and get instant guidance on proper disposal
              methods. Our system helps you make eco-friendly choices to reduce
              waste pollution.
            </p>
            <a className="text-decoration-none" href="#!">
              Learn More <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
              <i class="bi bi-recycle"></i>
            </div>
            <h2 className="h4 fw-bolder">Eco-Friendly Disposal Methods</h2>
            <p>
              Learn how to dispose of different types of waste safely and
              responsibly. We provide detailed guidelines to ensure minimal
              environmental impact.
            </p>
            <a className="text-decoration-none" href="#!">
              Get Tips <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-lg-4">
            <div className="feature bg-warning bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-recycle"></i>
            </div>
            <h2 className="h4 fw-bolder">Recycling & Reuse Recommendations</h2>
            <p>
              Discover ways to recycle and upcycle waste materials instead of
              throwing them away. Help create a sustainable future by reusing
              and repurposing waste effectively.
            </p>
            <a className="text-decoration-none" href="#!">
              Start Recycling <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
