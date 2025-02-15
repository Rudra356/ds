import React, { useState, useEffect } from "react";

function WasteForm() {
  const [wasteType, setWasteType] = useState("");
  const [solution, setSolution] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error fetching location:", error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const solutions = {
      biodegradable:
        "Compost at home or use a composting facility to reduce landfill waste.",
      nonbiodegradable:
        "Recycle or dispose of it in designated waste bins responsibly.",
      hazardous:
        "Handle with care and dispose of at authorized hazardous waste centers.",
    };
    setSolution(solutions[wasteType] || "Please select a valid waste type.");
  };

  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="text-center mb-4">
          <h2 className="fw-bolder">Find the Right Way to Dispose of Your Waste</h2>
          <p className="text-muted">Select the type of waste to get disposal guidance.</p>
        </div>
        <form onSubmit={handleSubmit} className="text-center">
          <select
            className="form-select mb-3 mx-auto"
            value={wasteType}
            onChange={(e) => setWasteType(e.target.value)}
          >
            <option value="">-- Select Waste Type --</option>
            <option value="biodegradable">Biodegradable</option>
            <option value="nonbiodegradable">Non-Biodegradable</option>
            <option value="hazardous">Hazardous</option>
          </select>
          <button type="submit" className="btn btn-primary">Get Solution</button>
        </form>
        {solution && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Solution:</strong> {solution}
          </div>
        )}
        {userLocation && (
          <div className="alert alert-info mt-3">
            <strong>Your Location:</strong> Lat {userLocation.lat}, Lng {userLocation.lng}
          </div>
        )}
      </div>
    </section>
  );
}

export default WasteForm;
