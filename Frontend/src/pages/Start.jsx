import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Start = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background container with reduced size and no scrolling */}
      <div className="bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/vertical-shot-motorbike-road-with-beautiful-view-mountains-kauai-hawaii_181624-35457.jpg?t=st=1738443806~exp=1738447406~hmac=6166c677b3f077a93c2eeb05bdd8a745226f2efbb3a51b1d5c662588c162748c&w=996)] h-[65vh] flex justify-between flex-col w-full bg-blend-overlay bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        {/* Logo with shadow */}
        <img
          className="w-16 ml-8 mb-4 mt-8 shadow-lg"
          src={logo}
          alt="XyloGo Logo"
        />
      </div>

      {/* Transparent content box */}
      <div className="bg-white bg-opacity-50 p-4 rounded-2xl shadow-2xl max-w-lg mx-auto mt-2 mb-8 sm:max-w-md sm:p-3">
        <h2 className="text-[40px] font-extrabold text-center text-gray-800 tracking-tight sm:text-[30px] sm:px-2">
          Get Started with XyloGo
        </h2>
        <Link
          to="/login"
          className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg mt-5 hover:from-blue-600 hover:to-blue-800 shadow-lg transition-all duration-300 sm:py-3 sm:text-[16px] sm:px-6"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
