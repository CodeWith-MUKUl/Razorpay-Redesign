import React from "react";
import backgroundLine from "../../assets/background-lines.png";
import bgTexture from "../../assets/bg-texture.png";
import FadeUp from "../../FadeUp";
import FadeRight from "../../FadeRight";

const Home = () => {
  return (
    <div className="w-full sm:h-fit lg:h-screen relative overflow-hidden">

      <div
        className="absolute mt-20 inset-0 bg-center bg-no-repeat pointer-events-none z-0"
        style={{
          backgroundImage: `url(${backgroundLine})`,
          backgroundSize: "95%",
          backgroundPosition: "center 45%",
          opacity: 0.5,
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="absolute inset-0 bg-center bg-cover pointer-events-none z-0"
        style={{
          backgroundImage: `url(${bgTexture})`,
          mixBlendMode: "screen",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 lg:min-h-screen flex items-center pt-24 sm:pt-24 lg:pt-0 pb-16 sm:pb-20 lg:pb-0">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-16 mt-0 sm:mt-4 lg:mt-[10vh]">

          {/* LEFT TEXT SECTION */}
          <div className="flex-1 text-left space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 w-full">

            <FadeUp>
              <p className="text-[#4e336f] text-xs sm:text-sm md:text-md font-['ppmori-regular'] font-semibold tracking-wide uppercase">
                The ultimate payments orchestration platform
              </p>
            </FadeUp>

            <FadeUp>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-['ppmori-regular'] text-[#22004b] leading-tight lg:leading-tight font-bold">
                Advance Payments <br />
                <span className="font-['ppmori-regular'] text-[#22004b] ">
                  for India’s boldest disruptors
                </span>
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="text-[#4e336f] font-['ambit-regular'] text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                One integration, one portal, one login. Sign more merchants,
                streamline processes, and simply do payments, better.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#22014B] text-white font-['ppmori-regular'] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                  Get Started
                </button>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 flex items-center justify-center w-full mt-0 mb-0">
            <div className="
              relative w-full 
              max-w-[240px] sm:max-w-[280px] md:max-w-md lg:max-w-lg
              h-64 sm:h-72 md:h-80 lg:h-[420px]
              bg-gradient-to-br from-blue-500/20 to-purple-600/20 
              rounded-2xl backdrop-blur-sm border border-white/10 
              shadow-2xl overflow-">

              {/* FIXED HEIGHT WRAPPER PREVENTS JUMPING */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center">
                <FadeRight>
                  <img
                    className="w-[80%] lg:w-[90%] h-auto object-contain"
                    src="https://framerusercontent.com/images/sKKVFtiwvvdD4izNI5NvFQYmII.png?scale-down-to=1024&width=1119&height=1227"
                    alt="Masaba dashboard"
                  />
                </FadeRight>
              </div>

              <p className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 
                text-white/70 text-3xl sm:text-4xl md:text-5xl lg:text-[12rem] leading-none font-['cursive']">
                Masaba
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
