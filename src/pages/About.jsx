import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, services } from "../constants";
import { CTA, Footer } from "../components";

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-8 min-h-[calc(100vh-80px)]">
        <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins text-[#e205ff]">
          Hello We're <span className="font-bold text-shadow">TechWeb Innovations</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-300">
          <p className="">
            TechWeb Innovations is a cutting-edge web development company
            dedicated to delivering innovative solutions that empower businesses
            in the digital realm. Based on a foundation of technical expertise
            and creative flair, we specialize in crafting and maintaining
            dynamic websites to enhance online presence and user engagement.
          </p>
        </div>

        {/* Skills */}
        <div className="py-10 flex flex-col">
          <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins text-[#e205ff]">
            Our Skills
          </h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill, index) => (
              <div className="block-container w-20 h-20" key={index}>
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

        <div className="py-16">
          <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins text-[#e205ff]">
            Company Values:
          </h3>
          <p className="mt-5 flex flex-col gap-3 text-slate-300">
            At TechWeb Innovations, we value innovation, reliability, and client
            satisfaction. Our mission is to empower businesses with robust and
            visually appealing online solutions that drive success. We are
            committed to staying ahead of technological advancements and
            ensuring our clients thrive in the ever-evolving digital landscape.
          </p>
        </div>

        <div className="py-16">
          <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins text-[#e205ff]">
            Services Offered
          </h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            <p className="">
              I've worked with all sorts of companies, leveling up my skills and
              teaming up whit smart people. Here's the rundown:
            </p>
          </div>
        </div>

        <div className="py-16 flex">
          <VerticalTimeline lineColor={"#E205FF"}>
            {services.map((service, index) => (
              <VerticalTimelineElement
                key={service.company_name}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={service.icon}
                      alt={service.company_name}
                      className="w-[70%] h-[70%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: "#451162" }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#E205FF",
                  boxShadow: "none",
                  background: "rgb(69, 17, 98)",
                }}
                contentArrowStyle={{ borderRight: "7px solid #E205FF" }}
              >
                <div>
                  <h3 className="text-[#e205ff] text-xl font-poppins font-semibold">
                    {service.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {service.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {service.points.map((point, index) => (
                    <li
                      className="text-slate-300 font-medium pl-1 text-sm"
                      key={`service-point-${index}`}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default About;
