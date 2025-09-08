import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutCards = [
    {
      icon: "fa-solid fa-book-open",
      title: "Education",
      description: "BE Computer Engineering",
    },
    {
      icon: "fa-solid fa-award",
      title: "Academic Performance",
      description: "CGPA 7.88",
    },
    {
      icon: "fa-solid fa-user-group",
      title: "Leadership",
      description: "Ex-NCC Cadet with discipline & teamwork",
    },
    {
      icon: "fa-solid fa-heart",
      title: "Interests",
      description:
        "Singing, open-source contributions, Mobile Photography and Sports",
    },
  ];

  const headingRef = useRef(null);
  const subheadRef = useRef(null);
  const descRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".about",
        // markers: true,
        start: "top 75%",
      },
    });
    tl.from(headingRef.current, {
      opacity: 0,
      y: 30,
    })
      .from(
        subheadRef.current,
        {
          opacity: 0,
          y: 40,
        },
        "-=0.5"
      )
      .from(
        descRef.current,
        {
          opacity: 0,
          y: 30,
        },
        "-=0.4"
      )
      .from(gsap.utils.toArray(".abt-inner"), {
        opacity: 0,
        yPercent: 10, 
        scale: 0.95,
        transformOrigin: "center center",
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <section
      id="about"
      className="about text-center bg-slate-800 py-20 font-serif text-gray-100"
    >
      <h1 ref={headingRef} className="text-4xl font-bold mb-4">
        ABOUT ME
      </h1>
      <p ref={subheadRef} className="text-lg text-gray-300 font-sans mb-12">
        Get to know more about my journey, passion, and aspirations in web
        development
      </p>

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 leading-relaxed text-justify">
          <h2 className="text-2xl font-bold mb-6">Hi, I'm Harnish Mori!</h2>
          <p
            ref={descRef}
            className="text-gray-300 font-sans text-lg leading-relaxed"
          >
            I'm an aspiring web developer completed my BE in Computer
            Engineering from Gandhinagar Institute of Technology. With a passion
            for creating beautiful and functional websites, I'm constantly
            learning and improving my skills in web development.
            <br />
            <br />
            Beyond coding, I'm a creative individual who loves expressing myself
            through singing, playing guitar and various forms of art. My
            background as an ex-NCC cadet has instilled in me discipline,
            leadership qualities, and the ability to work effectively in teams.
            <br />
            <br />
            As a developer, I enjoy building practical solutions and
            continuously improving my skills with every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="about-card hover:shadow-lg transition-shadow hover:scale-110 transform transition-transform duration-100 ease-in-out"
            >
              <div className="abt-inner shadow-gray-300 shadow-lg h-40 min-h-32 flex flex-col bg-gray-50 p-6 rounded-2xl justify-center items-center text-center">
              <i className={`${card.icon} text-2xl text-red-400 mb-3`}></i>
              <h2 className="text-slate-800 font-bold text-lg mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 font-sans text-sm">
                {card.description}
              </p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
