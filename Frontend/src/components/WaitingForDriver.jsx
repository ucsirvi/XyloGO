import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div className="relative bg-white p-6 rounded-3xl shadow-xl w-full max-w-md mx-auto mt-6">
      {/* Close Button */}
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.waitingForDriver(false);
        }}
      >
        <i className="text-3xl text-gray-400 hover:text-gray-600 transition-all ri-arrow-down-wide-line"></i>
      </h5>

      {/* Driver Info */}
      <div className="flex items-center justify-between mb-6">
        <img
          className="h-22 w-30 rounded-full "
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Driver"
        />
        <div className="text-right">
          <h2 className="text-xl font-semibold text-[#2196F3] capitalize">
            {props.ride?.captain.fullname.firstname}
          </h2>
          <h4 className="text-lg font-semibold text-[#2196F3] -mt-1">
            {props.ride?.captain.vehicle.plate}
          </h4>
          <p className="text-sm text-gray-500">Maruti Suzuki Alto</p>
          <h1 className="text-lg font-semibold text-[#2196F3]">
            {props.ride?.otp}
          </h1>
        </div>
      </div>

      {/* Ride Details */}
      <div className="w-full">
        <div className="flex flex-col gap-5">
          {/* Pickup Location */}
          <div className="flex items-center gap-5 p-4 border-b-2  bg-teal-50 border-teal-100 rounded-lg">
            <i className="text-xl text-[#2196F3] ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium text-[#2196F3]">562/11-A</h3>
              <p className="text-sm text-gray-500">{props.ride?.pickup}</p>
            </div>
          </div>

          {/* Destination Location */}
          <div className="flex items-center gap-5 p-4 border-b-2  bg-teal-50 border-teal-100 rounded-lg">
            <i className="text-xl text-[#2196F3] ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium text-[#2196F3]">562/11-A</h3>
              <p className="text-sm text-gray-500">{props.ride?.destination}</p>
            </div>
          </div>

          {/* Fare Info */}
          <div className="flex items-center gap-5 p-4 rounded-lg bg-teal-50">
            <i className="text-xl text-[#2196F3]ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium text-[#2196F3]">
                ₹{props.ride?.fare}
              </h3>
              <p className="text-sm text-gray-500">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
