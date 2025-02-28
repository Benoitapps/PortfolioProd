import React from "react";
import photo from "../../../public/photo.webp";

function Head() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <article className="flex md:flex-row  flex-col items-center justify-center space-x-6 w-4/6">
        {" "}
        <div className="flex-1 w-full flex items-center justify-center sm:mb-0 mb-5">
          <img src={photo} alt="Dev" className="sm:w-72 sm:h-72 w-40 h-40" />
        </div>
        <div className="flex-1 flex flex-col items-center text-center justify-center">
          {" "}
          <p className="whitespace-normal font-bold text-4xl sm:mb-6 mb-2 drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
            {" "}
            DEVELOPPEUR FULL-STACK
          </p>
          <p className="whitespace-normal w-full text-justify">
            Développeur web passionné, je vous invite à découvrir mes projets et
            réalisations, fruits d’un parcours riche en expériences et en
            apprentissages. Chaque projet illustre mon engagement à concevoir
            des solutions innovantes, performantes et adaptées aux besoins
            réels. Actuellement en recherche d’une opportunité professionnelle,
            je souhaite mettre mes compétences en développement web au service
            de nouveaux défis. N’hésitez pas à explorer mon travail et à me
            contacter.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Head;
