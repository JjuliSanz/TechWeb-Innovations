import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7">
      <p className="text-[#e205ff] font-bold flex-1 text-3xl max-md:text-center">
        Have a project? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="text-slate-100 bg-[#e205ff] hover:opacity-70 ease-in-out duration-300 hover:scale-90 focus:outline-none font-medium rounded-lg text-base w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
