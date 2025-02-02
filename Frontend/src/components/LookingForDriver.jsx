import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-300 hover:text-gray-500 transition"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">
        Looking for a Driver
      </h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt="Vehicle"
        />
        <div className="w-full mt-5">
          {/* Pickup Section */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#2196F3]">
            <i className="ri-map-pin-user-fill text-[#2196F3]"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">PickUp</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.pickup}</p>
            </div>
          </div>

          {/* Destination Section */}
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#2196F3]">
            <i className="text-lg ri-map-pin-2-fill text-[#2196F3]"></i>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Destination</h3>
              <p className="text-sm -mt-1 text-gray-600">{props.destination}</p>
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
      </div>
    </div>
  );
};

export default LookingForDriver;
