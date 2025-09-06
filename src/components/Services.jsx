import React from "react";
import { Link } from "react-scroll";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-code",
      title: "Web Development",
      description:
        "Creating responsive and interactive web applications using HTML, CSS, JavaScript and libraries like Tailwind and JavaScript libraries like GSAP and also Backend with Node.js",
      features: [
        "Responsive Design",
        "Interactive UI",
        "Cross-Browser Compatibility",
        "Performance Optimisation",
      ],
    },
    {
      icon: "fa-brands fa-python",
      title: "Python Django",
      description:
        "Developing robust and scalable web applications using Django, leveraging Python’s versatility for clean, secure, and efficient backend systems with a strong focus on performance and user experience.",
      features: [
        "Full-Stack Development",
        "Rapid Prototyping",
        "Secure & Scalable",
      ],
    },

    {
      icon: "fa-solid fa-infinity",
      title: "DevOps",
      description:
        "Streamlining the software development lifecycle by integrating development and operations through automation, CI/CD pipelines, cloud platforms.",
      features: ["CI/CD Automation", "EC2", "Docker", "Monitoring & Logging"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-12 text-center font-serif text-slate-900 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Services & Expertise</h1>
        <p className="text-lg text-gray-600 font-sans mb-12">
          Offering comprehensive web development and design solutions as part of
          my learning journey
        </p>

        <div className="flex flex-col lg:flex-row justify-around items-start mt-20 gap-8 font-sans">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-full text-left border-2 border-gray-400 p-8 rounded-lg min-h-60 sm:h-86"
            >
              <div className="flex items-center mb-4">
                <i className={`${service.icon} mr-4 text-red-400 text-xl`}></i>
                <span className="text-xl text-slate-900 font-semibold">
                  {service.title}
                </span>
              </div>

              <p className="mt-4 text-gray-700 mb-4">{service.description}</p>

              <ul className="ml-8 space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-300 to-purple-300 p-4 rounded-lg text-slate-900">
          <h3 className="text-2xl font-bold mb-2">
            Ready to Start Your Project?
          </h3>
          <p className="mb-4 font-sans">
            I'm actively seeking working opportunities and collaborative
            projects. Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-6 py-2 bg-slate-900 border border-slate-900 text-gray-100 rounded-lg font-sans text-sm hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Get In Touch
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-2 bg-slate-900 border border-slate-900 text-gray-100 rounded-lg font-sans text-sm hover:bg-slate-800 transition-colors cursor-pointer"
            >
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
