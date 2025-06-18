import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line for sm and up */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2 z-0" />
        {/* Vertical Line for mobile */}
        <div className="sm:hidden absolute left-[32px] top-0 bottom-0 w-[2px] bg-white z-0" />

        <div className="flex flex-col sm:grid sm:grid-cols-9 gap-6 relative z-10">
          {education.map((edu, index) => (
            <div key={edu.id} className="flex flex-col sm:contents relative">
              {/* Dot */}
              <div className="flex sm:col-start-5 sm:col-end-6 justify-start sm:justify-center mb-4 sm:mb-0 pl-6 sm:pl-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-400 border-4 border-[#8245ec] flex items-center justify-center z-10">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`p-6 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0
                    ? "sm:col-start-6 sm:col-end-10"
                    : "sm:col-start-1 sm:col-end-5"
                } ${index % 2 === 0 ? "sm:ml-4" : "sm:mr-4"} ml-16 sm:ml-0`}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>
                <p className="text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
