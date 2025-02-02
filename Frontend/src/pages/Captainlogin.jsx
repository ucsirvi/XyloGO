import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";
import logo from "../assets/logo.png";

const Captainlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captain
    );

    if (response.status === 200) {
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-5 h-screen flex flex-col justify-between bg-gradient-to-r from-[#e0f7fa] via-[#80deea] to-[#ffffff]">
      <div className="flex flex-col items-center">
        <img
          className="w-14 mb-5 transition-all transform hover:scale-110"
          src={logo}
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 transform transition-all hover:scale-105"
        >
          <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Welcome Captain!
          </h3>

          <h4 className="text-lg font-medium text-gray-600 mb-2">
            What's your email
          </h4>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#f7f7f7] mb-6 rounded-lg px-6 py-3 border border-[#ddd] text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            type="email"
            placeholder="email@example.com"
          />

          <h4 className="text-lg font-medium text-gray-600 mb-2">
            Enter Password
          </h4>
          <input
            className="bg-[#f7f7f7] mb-6 rounded-lg px-6 py-3 border border-[#ddd] text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-[#00bcd4] text-white font-semibold rounded-lg px-6 py-3 w-full text-lg shadow-lg hover:scale-105 transition-all transform hover:bg-[#0097a7]">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-lg text-gray-700">
          New to the fleet?{" "}
          <Link
            to="/captain-signup"
            className="text-[#00695c] hover:text-[#004d40] font-medium"
          >
            Register as a Captain
          </Link>
        </p>
      </div>

      <div className="text-center mt-2">
        <Link
          to="/login"
          className="bg-[#2196F3] text-white font-semibold rounded-lg px-6 py-2 w-full text-lg shadow-lg hover:scale-105 transition-all transform hover:bg-[#1976D2]"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
