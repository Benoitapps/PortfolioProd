import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import photoProfil from "../../../public/Photo.png";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); 

  const handleScroll = (e, sectionId) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      console.error("Section not found:", sectionId);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (e, id) => {
    setActiveButton(id); 
    handleScroll(e, id); 
  };

  const handleButtonClickTop = (e, id) => {
    setActiveButton(id);
    handleScroll(e, id); 
    setActiveButton(null);
    setIsMenuOpen(false);
  };

  const handleScrollDetect = () => {
    const sections = [
      { id: "profil", label: "Mon Profil" },
      { id: "competences", label: "Mes Compétences" },
      { id: "experience", label: "Expérience" },
      { id: "projets", label: "Mes Projets" },
      { id: "contact", label: "Contact" },
    ];

    let foundActive = null;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundActive = section.id;
        }
      }
    });

    if (foundActive && foundActive !== activeButton) {
      setActiveButton(foundActive); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollDetect);
    return () => {
      window.removeEventListener("scroll", handleScrollDetect);
    };
  }, [activeButton]); 

  return (
    <nav className="bg-barre border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 shadow-lg z-[9999]">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-full">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <img
              src={photoProfil}
              alt="avatar"
              className="h-8 w-8 rounded-full"
            />
            <Typography
              variant="h4"
              onClick={(e) => handleButtonClickTop(e, "top")}
              className="cursor-pointer"
            >
              Benoît De Carli
            </Typography>
          </div>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-barre md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-barre dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { id: "profil", label: "Mon Profil" },
              { id: "competences", label: "Mes Compétences" },
              { id: "experience", label: "Expérience" },
              { id: "projets", label: "Mes Projets" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleButtonClick(e, item.id)} 
                  className={`block py-2 px-3 text-white rounded-sm cursor-pointer ${
                    activeButton === item.id ? "bg-cyan-500" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
