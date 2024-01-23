import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { CTA } from "../components";
import { Canvas } from "@react-three/fiber";
import { Coins } from "../models";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)] ">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-slate-100">
        Our{" "}
        <span className="bg-gradient-to-r from-[#e205ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
          Team:
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-300">
        <p className="">
          Our team of skilled developers, designers, and digital strategists
          work collaboratively to transform ideas into compelling online
          experiences. With a passion for technology and a commitment to
          excellence, we bring a fresh and dynamic approach to every web
          development project.
        </p>
      </div>

      <div className="py-16">
        <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins text-[#e205ff]">
          Company Value Proposition:
        </h3>
        <p className="mt-5 flex flex-col gap-3 text-slate-300">
          At TechWeb Innovations, we go beyond creating stunning websites; we're
          dedicated to growing your revenue. Our services are strategically
          designed to enhance your online presence, attract a wider audience,
          and convert visitors into loyal customers. By leveraging the power of
          cutting-edge web development and innovative digital solutions, we
          ensure that your business not only stands out in the crowded online
          landscape but also experiences tangible growth. Partner with us, and
          let TechWeb Innovations be the catalyst that propels your business to
          new heights, unlocking the full potential of your online success. Your
          growth is our priority, and we are committed to delivering results
          that positively impact your bottom line.
        </p>
      </div>

      <div className="relative h-[500px] w-full ">
        <Canvas
          camera={{
            position: [0, 0, 4],
          }}
        >
          {/* <ambientLight intensity={0.5} /> */}
          {/* <directionalLight position={[-1, 5, 5]} intensity={0.3} /> */}
          <pointLight intensity={1} position={[0, 0.4, -3]} />
          <Coins position={[0, -2.5, 0]} scale={2} />
          {/* <Ground position={[0, -3, -1]} scale={10} /> */}
        </Canvas>
      </div>

      <div className="text-[#e205ff]">
        These are just a few examples of successful projects executed by TechWeb
        Innovations. Each project reflects our commitment to excellence in web
        development and creating impactful solutions for our clients.
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h3 className="text-2xl font-poppins font-semibold text-[#e205ff]">
                {project.name}
              </h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#e205ff]"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-[#e205ff]" />
      <CTA />
    </section>
  );
};

export default Projects;
