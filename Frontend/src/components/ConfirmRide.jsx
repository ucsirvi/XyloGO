import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setConfirmRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">
        Confirm your Ride
      </h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full mt-4">
          {/* Pickup Section */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#2196F3]">
            <i className="ri-map-pin-user-fill text-[#2196F3]"></i>
            <div>
              <h3 className="text-base font-medium text-gray-800">PickUp</h3>
              <p className="text-sm mt-1 text-gray-600">{props.pickup}</p>
            </div>
          </div>

          {/* Destination Section */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#2196F3]">
            <i className="text-lg ri-map-pin-2-fill text-[#2196F3]"></i>
            <div>
              <h3 className="text-base font-medium text-gray-800">
                Destination
              </h3>
              <p className="text-sm mt-1 text-gray-600">{props.destination}</p>
            </div>
          </div>

          {/* Fare Section */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#2196F3]">
            <i className="ri-currency-line text-[#2196F3]"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                ₹{props.fare[props.vehicleType]}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmRidePanel(false);
            props.createRide();
          }}
          className="w-full mt-5 bg-[#2196F3] text-white font-semibold p-2 rounded-lg hover:bg-[#1976D2] transition-all"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
