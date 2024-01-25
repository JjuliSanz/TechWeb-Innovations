import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center glassmorphism py-4 px-8 text-slate-100 mx-5 border border-rose rounded-lg">
        Hi, We are <span className="font-semibold text-rose">TechWeb Innovations</span>
        <br/>
        <span className="text-base">A Web Development Company</span>
        
      </h1>
    );
  if (currentStage === 2) {
    return (
      <div className="mx-5 flex text-slate-100 flex-col gap-3 max-w-2xl glassmorphism pt-4 pb-12 px-8 border border-rose rounded-lg">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
        <Link
          to="/about"
          className="glassmorphism py-3 px-6 mx-auto text-slate-300 text-center font-semibold sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3 border border-rose rounded-lg"
        >
          Learn More
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className="mx-5 relative flex text-slate-100 flex-col gap-3 max-w-2xl glassmorphism pt-4 pb-12 px-8 border border-rose rounded-lg">
        <p className="font-medium sm:text-xl text-center">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>
        <Link
          to="/projects"
          className="glassmorphism py-3 px-6 mx-auto text-slate-300 text-center font-medium sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3 border border-rose rounded-lg"
        >
          Visit our projects
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className="mx-5 relative flex text-slate-100 flex-col gap-3 max-w-2xl glassmorphism pt-4 pb-12 px-8 border border-rose rounded-lg">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> We're just a few
          keystrokes away
        </p>
        <Link
          to="/contact"
          className="glassmorphism py-3 px-6 mx-auto text-slate-300 text-center font-semibold sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3 border border-rose rounded-lg"
        >
          Let's talk
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
