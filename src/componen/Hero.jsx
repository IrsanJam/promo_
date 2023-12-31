import React from "react";
import Gambar from "../componen/1.jpg";
import Gambars from "../componen/3.jpg";

function Hero({ onTambahNav }) {
  return (
    <div className="relative flex h-2/5 flex-col items-center bg-cover text-basefont">
      <img src={Gambar} alt="s" className="relative block h-screen w-full mix-blend-overlay lg:hidden" style={{ backgroundPositionY: "-20px" }} />
      <img src={Gambars} alt="s" className="relative  hidden h-screen  w-full mix-blend-overlay blur-sm lg:block" style={{ backgroundPositionY: "-20px" }} />

      <div className="absolute flex flex-col items-center pt-[25vh] lg:pt-[40vh] ">
        <p className="pt-[28%] text-center text-[10px] font-bold text-primary sm:pt-[32%] md:pt-0 md:text-3xl lg:text-4xl">
          Growing <span className="lg:text-4xl md:text-3xl text-3xl">Everywhere</span>
        </p>
        <h1 className="pt-[5px] text-4xl font-bold text-basefont lg:p-2 lg:text-7xl md:text-6xl ">Grow With Ours</h1>
        <div>
          <p className="text-[18px] font-bold  lg:text-[25px] text-xs">
            Fast, Flexible for Learn<span> </span>
            <span className="lg:text-4xl"></span>
          </p>
        </div>
        <p className="px-[4rem] py-2 text-center text-[8px] lg:px-20 lg:block lg: text-slate-400 lg:text-[10px] hidden ">Help anybody learn web programming and solving the problems, the motivation just for fun </p>
        <button onClick={onTambahNav} className="mt-3 rounded-xl bg-primary px-5 py-2 text-[10px] font-bold text-black lg:px-14 lg:py-2 lg:text-[14px] md:px-16 md:py-3 md:text-base">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
