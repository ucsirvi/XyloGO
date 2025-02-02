import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  };

  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => handleSuggestionClick(elem)}
          className="flex gap-4 border-2 p-2 border-gray-200 active:border-[#2196F3] rounded-xl items-center my-3 justify-start hover:border-[#2196F3] transition-all"
        >
          <h2 className="bg-[#f0f4f8] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill text-[#2196F3]"></i>
          </h2>
          <h4 className="font-normal text-gray-800">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
