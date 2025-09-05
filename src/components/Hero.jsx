import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="py-24 px-8 lg:px-32 bg-gray-50 flex flex-col lg:flex-row justify-around items-center min-h-screen">
      <div className="hero-left text-center lg:text-left">
        <p className="text-lg text-gray-500 font-sans mb-4">Heyy! I am Harnish</p>
        <h1 className="text-6xl lg:text-7xl leading-tight font-bold font-serif mb-4">
          <span className="text-emerald-400">Full Stack</span>
          <br />
          Web Developer
        </h1>
        <p className="text-lg text-gray-500 font-sans mb-8">
          I'm a passionate web developer based in India, creating
          <br />
          beautiful and functional websites that users will love.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex space-x-4">
            <button className="px-4 py-3 bg-red-400 text-gray-100 rounded-lg border-2 border-transparent hover:scale-105 transition-transform font-sans">
              Get In Touch
            </button>
            <button className="px-4 py-3 bg-red-400 text-gray-100 rounded-lg border-2 border-transparent hover:scale-105 transition-transform font-sans">
              Browse Projects
            </button>
          </div>
          
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="https://github.com/KanthariaDhruti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-red-400 cursor-pointer hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-red-400 cursor-pointer hover:scale-110 transition-transform"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-red-400 cursor-pointer hover:scale-110 transition-transform"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 lg:mt-0">
        <img 
          src="/" 
          alt="Harnish Mori" 
          className="rounded-full h-80 lg:h-96 w-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;