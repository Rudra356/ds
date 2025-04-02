import React from "react";

const Disclaimer = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center">Disclaimer</h2>
      <p className="text-muted text-center">
        Our waste management app provides <strong>waste disposal locations</strong> based on third-party data sources like OpenStreetMap and Google Maps.  
      </p>
      <p className="text-danger fw-bold text-center">
        We do not guarantee the accuracy of the displayed locations. Please verify before disposing of waste at any site.
      </p>
      {/* <div className="text-center">
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary fw-bold"
        >
          Verify on Google Maps
        </a>
      </div> */}
    </div>
  );
};

export default Disclaimer;
