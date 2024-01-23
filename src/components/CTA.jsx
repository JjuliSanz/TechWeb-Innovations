import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7">
      <p className="text-[#e205ff] font-extrabold flex-1 text-3xl max-md:text-center">
        Have a project? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="text-slate-100 bg-gradient-to-r from-[#e205ff] to-[#2d1466] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
