import React, { useState } from "react";

function MapComponent() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        setError("Unable to retrieve location.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold mb-3">Find Nearest Dump Station</h2>
      <p className="text-muted mb-4">
        Click the button below to get directions to the nearest waste disposal site.
      </p>
      <button
        onClick={requestLocation}
        disabled={loading}
        className="btn btn-primary fw-bold px-4 py-2"
      >
        {loading ? "Getting Location..." : "Find Nearest Dump Station"}
      </button>

      {error && <p className="text-danger mt-3">{error}</p>}

      {location && (
        <div className="mt-4">
          <h5>Your Location:</h5>
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success fw-bold px-4 py-2 mt-2"
          >
            View Route on Map
          </a>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
