import React from "react";

const Projects = () => {
  const projects = [
    {
      video: "/GTAVI.mov",
      title: "GTA VI Landing Page",
      description:
        "A visually engaging landing page inspired by GTA VI, designed with modern layouts, animations, and responsive design principles to provide an immersive user experience.",
      technologies: ["HTML", "CSS", "Javascript"],
    },
    {
      image: "/Edusity.png",
      title: "Educity Responsive Page",
      description:
        "A responsive education-themed webpage created with a mobile-first approach, ensuring seamless adaptability across devices with clean and modern UI.",
      technologies: ["HTML", "CSS", "Bootstrap"],
    },
    {
      image: "/Python.png",
      title: "Household Rental (Python Full Stack)",
      description:
        "A full-stack rental management system built with Python and Django, featuring user authentication, property listings, and booking functionalities to simplify rental processes.",
      technologies: ["Python", "Django", "SQLite"],
    },
    {
      image: "/Brainly.png",
      title: "Brainly (MERN Stack)",
      description:
        "A MERN stack project Brainly, enabling users to post different links at one place, share them with others, and interact in a collaborative environment.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
  ];

  return (
    <section id="projects" className="pt-20 pb-12 text-center bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 font-serif text-gray-100">
          Featured Projects
        </h1>
        <p className="text-xl text-gray-400 font-sans mb-12">
          A showcase of my recent development work and creative projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg border-2 border-gray-600/50 overflow-hidden hover:shadow-2xl hover:shadow-gray-300/20 sm:hover:scale-105 transition-all duration-300"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <video
                  src={project.video}
                  alt={project.title}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="font-serif text-gray-100 text-xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 font-sans text-sm mb-6 text-left leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-300/30 text-gray-100 px-3 py-1 rounded-lg text-sm font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="px-6 py-3 border border-white bg-gray-100 text-slate-900 rounded-lg hover:scale-105 hover:shadow-lg transition-all font-sans text-lg">
          <a
            href="https://github.com/HarnishMori"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-900 no-underline"
          >
            <i className="fa-brands fa-github"></i>
            View More on Github
          </a>
        </button>
      </div>
    </section>
  );
};

export default Projects;
