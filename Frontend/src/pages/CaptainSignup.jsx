import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="py-2 px-5 h-screen flex flex-col justify-between bg-gradient-to-r from-[#e0f7fa] via-[#80deea] to-[#ffffff]">
      <div className="flex flex-col items-center">
        <img
          className="w-12 mb-3 transition-all transform hover:scale-110"
          src={logo}
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-2 overflow-y-auto"
        >
          <h3 className="text-lg font-semibold text-center mb-3 text-gray-800">
            Create Your Captain Account
          </h3>

          <h4 className="text-base font-medium text-gray-600 mb-1">
            What's your name
          </h4>
          <div className="flex gap-4 mb-3">
            <input
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h4 className="text-base font-medium text-gray-600 mt-1 mb-2">
            What's your email
          </h4>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#f7f7f7] mb-2 rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            type="email"
            placeholder="email@example.com"
          />

          <h4 className="text-base font-medium text-gray-600 mt-1 mb-2 ">
            Enter Password
          </h4>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#f7f7f7] mb-2 rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            type="password"
            placeholder="password"
          />

          <h4 className="text-base font-medium text-gray-600 mb-1">
            Vehicle Information
          </h4>
          <div className="flex gap-4 mb-4">
            <input
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <input
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              required
              className="bg-[#f7f7f7] w-[calc(50%-1rem)] rounded-lg px-4 py-2 border border-[#ddd] text-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>

          <button className="bg-[#00bcd4] text-white font-semibold rounded-lg px-6 py-2 w-full text-lg shadow-lg hover:scale-105 transition-all transform hover:bg-[#0097a7]">
            Create Captain Account
          </button>
        </form>

        <p className="text-center mt-2 text-lg text-gray-700">
          Already have an account?{" "}
          <Link
            to="/captain-login"
            className="text-[#00695c] hover:text-[#004d40] font-medium"
          >
            Login here
          </Link>
        </p>
      </div>

      <div className="text-center mt-1">
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
