import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="font-poppins max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7">
      <hr className="border-rose" />

      <div className="flex flex-wrap gap-7 items-center justify-between">
        <p className="text-rose">
          © 2024 <strong>TechWeb Innovations</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
