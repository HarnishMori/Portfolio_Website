import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      icon: "fa-solid fa-globe",
      title: "Web Development",
      skills: "HTML, CSS, JavaScript, React, Node js, Tailwind, TypeScript, Express"
    },
    {
      icon: "fa-solid fa-palette",
      title: "Web skills",
      skills: "Responsive Web Design, Animations"
    },
    {
      icon: "fa-solid fa-code",
      title: "Other Languages",
      skills: "Python, Java"
    },
    {
      icon: "fa-solid fa-database",
      title: "Databases",
      skills: "SQL, MongoDB, PostgreSQL, Prisma ORM"
    }
  ];

  return (
    <section id="skills" className="py-24 text-center bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-serif text-slate-800 mb-4">
          Skills & Expertise
        </h1>
        <p className="text-lg text-gray-500 mb-12 font-sans">
          A comprehensive overview of my technical skills and areas of expertise
        </p>

        <div className="bg-white p-10 border-2 border-gray-300 rounded-lg shadow-lg mb-12 text-left">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-xl text-red-400 mr-4`}></i>
                <h3 className="text-xl font-serif text-slate-800 font-semibold">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 font-sans ml-10">
                {category.skills}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-300 to-purple-300 p-6 rounded-2xl text-slate-800">
          <h2 className="text-2xl font-bold font-serif mb-4">
            Internship Certification
          </h2>
          <p className="font-sans text-slate-900 mb-4">
            Python Django Backend Intern — Sharpening my backend skills and
            improving application performance for better user experience.
          </p>
          <span className="bg-white/30 px-3 py-1 rounded-lg text-sm font-medium font-sans">
            Certificate Earned
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;