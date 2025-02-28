import React from "react";
import linkedin from "../../../public/Contact/linkedin-svgrepo-com.svg";
import email from "../../../public/Contact/email-8-svgrepo-com.svg";

function Contact() {
  return (
    <div className="flex flex-col items-center bg-cube p-8 rounded-sm shadow-lg max-w-md mx-auto drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
      <h1 className="text-4xl font-semibold text-white mb-6 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">Contact</h1>

      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 rounded-full bg-white">
          <img src={email} alt="Email Icon" className="w-8 h-8" />
        </div>
        <a
          href="mailto:benoit.decarli.pro@gmail.com"
          className="text-lg font-medium text-white hover:text-cyan-300"
        >
          <p className="text-xs md:text-base"> benoit.decarli.pro@gmail.com</p>
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-white">
          <img src={linkedin} alt="LinkedIn Icon" className="w-8 h-8" />
        </div>
        <a
          href="https://www.linkedin.com/in/benoit-de-carli/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium text-white hover:text-cyan-300"
        >
          <p className="text-xs md:text-base">
            {" "}
            linkedin.com/in/benoit-de-carli/
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
