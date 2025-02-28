import React from "react";
import { WavyBackground } from "../component/WavyBackground";
import "../Styles/Home.css";

const Home = () => {
  return (
    <WavyBackground>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-1xl font-bold text-white">
          WELCOME TO OUR SOCIETY
        </h1>
        <h2 className="text-7xl font-semibold bg-gradient-to-r from-yellow-400 via-cyan-500 to-yellow-500 text-transparent bg-clip-text animate-gradient">
          HASHTAG
        </h2>
      </div>
    </WavyBackground>
  );
};

export default Home;