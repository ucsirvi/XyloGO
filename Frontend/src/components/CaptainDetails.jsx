import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div className="p-6 bg-white rounded-3xl shadow-2xl max-w-xl mx-auto">
      {/* Captain Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full object-cover border-4 border-teal-500 shadow-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s"
            alt="Captain Avatar"
          />
          <h4 className="text-xl font-semibold text-teal-700 capitalize">
            {captain.fullname.firstname + " " + captain.fullname.lastname}
          </h4>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex p-3 bg-teal-100 rounded-xl justify-center gap-8 items-center shadow-xl">
        <div className="text-center">
          <i className="text-4xl mb-2 text-teal-600 ri-timer-2-line"></i>
          <h5 className="text-lg font-medium text-teal-700">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-4xl mb-2 text-teal-600 ri-speed-up-line"></i>
          <h5 className="text-lg font-medium text-teal-700">12.5</h5>
          <p className="text-sm text-gray-600">Rides Completed</p>
        </div>
        <div className="text-center">
          <i className="text-4xl mb-2 text-teal-600 ri-booklet-line"></i>
          <h5 className="text-lg font-medium text-teal-700">4.8 ⭐</h5>
          <p className="text-sm text-gray-600">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
