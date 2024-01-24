import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white py-3 px-6 mx-auto rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3"
    >
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>;
};

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-slate-100 mx-5">
        Hi, We are <span className="font-semibold text-[#E205FF]">TechWeb Innovations</span>
        <br/>
        <span className="text-base">A Web Development Company</span>
        
      </h1>
    );
  if (currentStage === 2) {
    return (
      <div className="mx-5 flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8">
        <p className="font-medium sm:text-xl text-center">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>
        <Link
          to="/about"
          className="neo-brutalism-white py-3 px-6 mx-auto rounded-lg text-slate-300 text-center font-semibold sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3"
        >
          Learn More (stage 2)
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 3) {
    return (
      <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8">
        <p className="font-medium sm:text-xl text-center">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>
        <Link
          to="/projects"
          className="neo-brutalism-white py-3 px-6 mx-auto rounded-lg text-slate-300 text-center font-medium sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3"
        >
          Visit my portfolio (stage 3)
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  if (currentStage === 4) {
    return (
      <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8">
        <p className="font-medium sm:text-xl text-center">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>
        <Link
          to="/contact"
          className="neo-brutalism-white py-3 px-6 mx-auto rounded-lg text-slate-300 text-center font-semibold sm:w-1/2 w-[90%] absolute -bottom-5 right-0 left-0 flex justify-center items-center gap-3"
        >
          Let's talk (stage 4)
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }
  return null;
};

export default HomeInfo;
