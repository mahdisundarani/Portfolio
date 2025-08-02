// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories Container */}
    <div
      className="flex flex-wrap gap-5 justify-center"
      style={{ maxWidth: "100%", margin: "0 auto" }}
    >
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10
            rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          style={{
            flexBasis: "calc(50% - 20px)", // roughly half width minus gap
            flexGrow: 1,
            minWidth: "320px", // prevents cards from shrinking too small
            maxWidth: "600px",
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 2 logos per line, no-wrap text */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-start bg-transparent border-2 border-gray-700 rounded-3xl px-3 py-2 sm:px-4 sm:py-2"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                  />
                  <span
                    className="ml-2 text-xs sm:text-sm text-gray-300 whitespace-nowrap"
                    title={skill.name}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
