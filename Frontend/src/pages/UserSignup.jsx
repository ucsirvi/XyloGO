import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import logo from "../assets/logo.png";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setEmail("");
    setFirstName("");
    setLastName("");
    setPassword("");
  };

  return (
    <div className="p-5 h-screen flex flex-col justify-between bg-gradient-to-r from-[#e0f7fa] via-[#80deea] to-[#ffffff]">
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
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-6 transform transition-all hover:scale-105"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Create Your Account
          </h3>

          <h4 className="text-lg font-medium text-gray-600 mb-2">
            What's your name
          </h4>
          <div className="flex gap-2 mb-7 ">
            <input
              required
              className="bg-[#f7f7f7] w-35 rounded-lg px-6 py-3 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#f7f7f7] w-35 rounded-lg px-6 py-3 border border-[#ddd] text-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h4 className="text-lg font-medium text-gray-600 mb-2">
            What's your email
          </h4>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#f7f7f7] mb-6 rounded-lg px-6 py-3 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            type="email"
            placeholder="email@example.com"
          />

          <h4 className="text-lg font-medium text-gray-600 mb-2">
            Enter Password
          </h4>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#f7f7f7] mb-6 rounded-lg px-6 py-3 border border-[#ddd] text-lg placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#4caf50] transition-all w-full"
            type="password"
            placeholder="password"
          />

          <button className="bg-[#00bcd4] text-white font-semibold rounded-lg px-6 py-3 w-full text-lg shadow-lg hover:scale-105 transition-all transform hover:bg-[#0097a7]">
            Create Account
          </button>
        </form>

        <p className="text-center mt-3 text-lg text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00695c] hover:text-[#004d40] font-medium"
          >
            Login here
          </Link>
        </p>
      </div>

      <div className="text-center mt-2">
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
