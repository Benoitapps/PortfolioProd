import React from "react";
import Dev from "../../../public/developeur.webp";
 

function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Benoît De Carli</h1>
      <h3 className="text-1xl md:text-2xl mt-2">benoit.decarli.pro@gmail.com</h3>

         <img src={Dev} alt="Dev" className="sm:w-72 sm:h-72 w-40 h-40 sm:mt-12 mt-10 " />
    </div>
  );
}

export default Home;
