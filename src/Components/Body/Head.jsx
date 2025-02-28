import React from "react";
import photo from "../../../public/photo.webp";

function Head() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <article className="flex md:flex-row  flex-col items-center justify-center space-x-6 w-4/6">
        {" "}
        <div className="flex-1 w-full flex items-center justify-center sm:mb-0 mb-5">
          <img
            src={photo}
            alt="Dev"
            className="sm:w-72 sm:h-72 w-40 h-40" 
          />
        </div>
        <div className="flex-1 flex flex-col items-center text-center justify-center">
          {" "}
          <p className="whitespace-normal font-bold text-4xl sm:mb-6 mb-2 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
            {" "}
            DEVELOPPEUR FULL-STACK
          </p>
          <p className="whitespace-normal w-full">
            Bienvenue sur mon portfolio ! En tant que développeur web passionné,
            je vous invite à découvrir mes projets et réalisations, fruits de
            mon parcours et de mes expériences dans le domaine. Chacun de ces
            projets témoigne de mon engagement à transformer des idées en
            solutions concrètes et fonctionnelles. Actuellement à la recherche
            d'une opportunité professionnelle dans ce domaine, je serais ravi de
            mettre mes compétences et ma créativité au service de nouvelles
            collaborations. Explorez mon univers et plongez dans les détails de
            mon travail, où innovation et technique se rejoignent.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Head;
