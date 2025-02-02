import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopupPanel(false);
      props.setRidePopupPanel(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  };

  return (
    <div className="relative bg-white p-2 rounded-3xl shadow-lg max-w-md mx-auto mt-1">
      <h5
        className="absolute top-0 right-0 p-1 cursor-pointer"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 hover:text-gray-700 transition-all ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold text-teal-700 mb-2">
        Confirm this ride to Start
      </h3>

      {/* Ride Info Section */}
      <div className="flex items-center justify-between p-2 bg-teal-100 rounded-lg mt-2">
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-18 rounded-full border-2 border-teal-500 shadow-md"
            src="https://img.freepik.com/free-photo/portrait-handsome-man-stylish-hipster-clothes-attractive-guy-posing-street_158538-13890.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium text-teal-700 capitalize">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
      </div>

      {/* Ride Details */}
      <div className="flex flex-col gap-4 mt-3">
        <div className="p-1 border-b-2 border-teal-200 rounded-lg">
          <i className="text-xl text-teal-500 ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium text-teal-700">PickUp</h3>
            <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
          </div>
        </div>
        <div className="p-1 border-b-2 border-teal-200 rounded-lg">
          <i className="text-xl text-teal-500 ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium text-teal-700">Destination</h3>
            <p className="text-sm text-gray-600">{props.ride?.destination}</p>
          </div>
        </div>
        <div className="p-1 rounded-lg">
          <i className="text-xl text-teal-500 ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium text-teal-700">
              ₹{props.ride?.fare}
            </h3>
            <p className="text-sm text-gray-600">Cash</p>
          </div>
        </div>
      </div>

      {/* OTP Input */}
      <div className="mt-1">
        <form onSubmit={submitHandler}>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            className="bg-teal-50 px-6 py-2 font-mono text-lg rounded-lg w-full mt-3 border-2 border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter OTP"
          />

          <button
            type="submit"
            className="w-full mt-3 text-lg flex justify-center bg-teal-600 text-white font-semibold p-2 rounded-lg transition-colors hover:bg-teal-700"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={() => {
              props.setConfirmRidePopupPanel(false);
              props.setRidePopupPanel(false);
            }}
            className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-2 rounded-lg transition-colors hover:bg-red-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
