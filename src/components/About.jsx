import React from 'react';

const About = () => {
  const aboutCards = [
    {
      icon: "fa-solid fa-book-open",
      title: "Education",
      description: "BE Computer Engineering"
    },
    {
      icon: "fa-solid fa-award",
      title: "Academic Performance",
      description: "CGPA 7.88"
    },
    {
      icon: "fa-solid fa-user-group",
      title: "Leadership",
      description: "Ex-NCC Cadet with discipline & teamwork"
    },
    {
      icon: "fa-solid fa-heart",
      title: "Interests",
      description: "Singing, open-source contributions, Mobile Photography and Sports"
    }
  ];

  return (
    <section id="about" className="text-center bg-slate-800 py-20 font-serif text-gray-100">
      <h1 className="text-4xl font-bold mb-4">ABOUT ME</h1>
      <p className="text-lg text-gray-300 font-sans mb-12">
        Get to know more about my journey, passion, and aspirations in web development
      </p>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 leading-relaxed text-justify">
          <h2 className="text-2xl font-bold mb-6">Hi, I'm Harnish Mori!</h2>
          <p className="text-gray-300 font-sans text-lg leading-relaxed">
            I'm an aspiring web developer completed my BE in Computer
            Engineering from Gandhinagar Institute of Technology. With a passion
            for creating beautiful and functional websites, I'm constantly
            learning and improving my skills in web development.
            <br /><br />
            Beyond coding, I'm a creative individual who loves expressing myself
            through singing, playing guitar and various forms of art. My
            background as an ex-NCC cadet has instilled in me discipline,
            leadership qualities, and the ability to work effectively in teams.
            <br /><br />
            As a developer, I enjoy building practical solutions and
            continuously improving my skills with every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {aboutCards.map((card, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-lg h-auto min-h-32 flex flex-col justify-center items-center text-center hover:shadow-lg shadow-gray-300 transition-shadow hover:scale-110 transform transition-transform duration-100 ease-in-out"
            >
              <i className={`${card.icon} text-2xl text-red-400 mb-3`}></i>
              <h2 className="text-slate-800 font-bold text-lg mb-2">{card.title}</h2>
              <p className="text-gray-600 font-sans text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;