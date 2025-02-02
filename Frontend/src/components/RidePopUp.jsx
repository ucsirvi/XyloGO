import React from "react";

const RidePopUp = (props) => {
  return (
    <div className="p-6 bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-auto">
      {/* Close Button */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-300 hover:text-gray-500 transition">
          <span className="ri-arrow-down-wide-line"></span>
        </i>
      </h5>

      {/* Ride Title */}
      <h3 className="text-2xl font-semibold text-teal-700 mb-6">
        New Ride Available!
      </h3>

      {/* Ride Info Section */}
      <div className="flex items-center justify-between p-4 bg-teal-100 rounded-lg mt-4 shadow-md">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-teal-500"
            src="https://img.freepik.com/free-photo/portrait-handsome-man-stylish-hipster-clothes-attractive-guy-posing-street_158538-13890.jpg"
            alt="Rider"
          />
          <h2 className="text-lg font-medium text-teal-700">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
        </div>
      </div>

      {/* Ride Details Section */}
      <div className="flex gap-2 justify-between flex-col items-center mt-6">
        <div className="w-full">
          {/* Pickup Info */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill text-teal-500 text-xl"></i>
            <div>
              <h3 className="text-lg font-medium text-teal-700">PickUp</h3>
              <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>
          {/* Destination Info */}
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-teal-500 text-xl"></i>
            <div>
              <h3 className="text-lg font-medium text-teal-700">Destination</h3>
              <p className="text-sm text-gray-600">{props.ride?.destination}</p>
            </div>
          </div>
          {/* Fare Info */}
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-teal-500 text-xl"></i>
            <div>
              <h3 className="text-lg font-medium text-teal-700">
                ₹{props.ride?.fare}
              </h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 w-full flex gap-4">
          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
              props.confirmRide();
            }}
            className="bg-green-600 w-full text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Accept
          </button>

          <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="mt-2 w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
