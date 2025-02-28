import React from "react";
import Projet from "./Projet";
import Head from "./Head";
import Home from "./Home.jsx";
import Skills from "./Skills.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import BottomBar from "./BottomBar.jsx";

function BodyPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION PROFIL */}
      <section id="top" className="min-h-screen p-10 scroll-mt-24">
        <div className="flex flex-col mt-52">
          <Home />
        </div>
      </section>

      {/* SECTION PROFIL */}
      <section id="profil" className="min-h-screen p-10 ">
        <div className="flex flex-col ">
          <Head />
        </div>
      </section>

      {/* SECTION COMPETENCES */}
      <section id="competences" className="min-h-screen p-10 scroll-mt-24">
        <h2 className="text-center font-bold text-4xl mb-16 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
          Mes Compétences
        </h2>
        <div className="flex justify-center">
          <Skills />
        </div>
      </section>

      {/* SECTION EXPERIENCE */}
      <section id="experience" className="min-h-screen p-10 scroll-mt-24">
        <h2 className="text-center font-bold text-4xl mb-16 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
          Expériences et Formation
        </h2>
        <div className="flex justify-center">
          <Resume />
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="min-h-screen p-10 scroll-mt-24">
        <h2 className="text-center font-bold text-4xl mb-16 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">Projets</h2>
        <div className="flex justify-center">
          <Projet />
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className=" p-10 mt-32 mb-10">
        <div className="flex justify-center ">
          <Contact />
        </div>
      </section>

      <BottomBar />
    </div>
  );
}

export default BodyPage;
