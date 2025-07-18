import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedProject]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">WEBSITE DEVELOPMENT PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col"
          >
            {/* Image with 16:9 Aspect Ratio */}
            <div className="p-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="px-6 pb-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              {/* Truncated Tags */}
              <div className="mb-4 min-h-[48px]">
                <div className="line-clamp-2 overflow-hidden text-ellipsis text-xs font-semibold text-purple-500">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] inline-block rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-auto flex justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl relative max-h-[90vh] overflow-hidden"
          >
            {/* Fixed and Styled Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white text-3xl font-bold bg-purple-600 hover:bg-purple-800 shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto max-h-[90vh] p-4 pt-16">
              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-gray-900 px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  {selectedProject.webapp ? (
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      >
                        View Code
                      </a>
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      >
                        View Live
                      </a>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-4 py-2 rounded-xl lg:text-xl text-sm font-semibold text-center"
                      >
                        View Code
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
