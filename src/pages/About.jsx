import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import { CTA } from "../components";
import { Canvas } from "@react-three/fiber";
import { Coins, Earth, EarthHologram, EarthRoom, Ground } from "../models";
import { CameraControls, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  LensFlare,
  SMAA,
} from "@react-three/postprocessing";
import { KernelSize, Resolution } from "postprocessing";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow">
          Julian
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="">
          Software Engineer based in Argentina, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
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
      <div className="py-16">
        <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins">
          Work Experience
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p className="">
            I've worked with all sorts of companies, leveling up my skills and
            teaming up whit smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;
