import React from 'react';
import emailjs from 'emailjs-com';
import "@fortawesome/fontawesome-free/css/all.min.css";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91tq07a",
        "template_q1ckgxj",
        e.target,
        "SECSFBwsyhNBMoSh7"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  const socialLinks = [
    {
      icon: "fa-solid fa-envelope",
      label: "Email",
      value: "mori.harnish@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfprrSnwMqrlzvLFlgMPMCwmvMMnzqqCzHlXhXhJGLKZmcBXZBbvPVzzggjdpNPSGLLrsB"
    },
    {
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/harnishmori7031/"
    },
    {
      icon: "fa-brands fa-github",
      label: "GitHub",
      value: "View my Repositories",
      link: "https://github.com/HarnishMori"
    },
    {
      icon: "fa-solid fa-location-dot",
      label: "Location",
      value: "Ahmedabad, Gujarat",
      link: null
    }
  ];

  return (
    <section id="contact" className="pt-40 text-center bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-serif text-gray-100 mb-4">
          Let's Connect
        </h1>
        <p className="text-lg font-sans text-gray-400 mb-12">
          Have a project in mind or interested in collaboration? I'd love to hear from you!
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-start mt-12 text-left gap-12">
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-2/5 p-8 lg:mr-12">
            <h2 className="text-2xl font-bold font-serif text-gray-100 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 font-sans mb-8 leading-relaxed">
              I'm actively seeking working opportunities in Full Stack development. 
              Whether you have a project proposal, collaboration idea, or just want to connect, 
              I'm always excited to meet new people and explore new opportunities.
            </p>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center p-4 border border-gray-500 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-400/30 text-red-400 mr-4">
                    <i className={`${social.icon} text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-sm text-black font-sans mb-1">{social.label}</p>
                    {social.link ? (
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 font-serif text-lg hover:text-red-300 transition-colors"
                      >
                        {social.value}
                      </a>
                    ) : (
                      <p className="text-black font-serif text-lg">{social.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-2/5 border border-gray-600 p-6 rounded-lg bg-gray-50 mt-20 mb-8 min-h-96">
            <form onSubmit={sendEmail} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                Send a Message
              </h2>
              <p className="text-gray-600 mb-6 font-sans">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full h-10 px-4 border border-gray-400 rounded-lg font-sans text-sm placeholder-gray-500 placeholder-italic focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full h-10 px-4 border border-gray-400 rounded-lg font-sans text-sm placeholder-gray-500 placeholder-italic focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full h-10 px-4 border border-gray-400 rounded-lg font-sans text-sm placeholder-gray-500 placeholder-italic focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full h-40 px-4 pt-4 border border-gray-400 rounded-lg resize-none font-sans text-sm placeholder-gray-500 placeholder-italic focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 mt-4 bg-red-400 text-white border-none rounded-lg hover:bg-red-500 transition-colors font-sans"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;