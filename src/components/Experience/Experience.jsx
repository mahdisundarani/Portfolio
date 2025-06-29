import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] xl:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pb-32 xl:pb-40">
        {/* Vertical Line - Desktop Only */}
        <div className="hidden xl:block absolute left-1/2 top-0 h-[95%] w-[2px] bg-white -translate-x-1/2 z-0" />

        {/* Vertical Line - Mobile/Tablet */}
        <div className="xl:hidden absolute left-6 top-0 h-[95%] w-[2px] bg-white z-0" />

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col xl:flex-row items-center mb-16 ${
              index % 2 === 0 ? "xl:justify-end" : "xl:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div
              className={`absolute left-6 -translate-x-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 xl:w-16 xl:h-16 rounded-full flex justify-center items-center z-10`}
            >
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`w-full xl:max-w-md p-4 xl:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "xl:ml-44 ml-24 xl:mr-0"
                  : "xl:mr-44 ml-24 xl:ml-0"
              }`}
            >
              {/* Header Row: Logo + Info */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl xl:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md xl:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs xl:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
