import React from "react";

function Resume() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-5 md:gap-20 ">
      
      <div className=" bg-cube rounded-sm p-5 flex justify-center m-5  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
      <div className="">
      <h1 className="mb-5 text-3xl">Education</h1> 
        <ol className="relative justify-center border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500 bg-bluecyan p-1 rounded-md">
              2022-2024
            </time>
            <h3 className="text-lg font-semibold text-bluecyan dark:text-white">
              Mastère Ingénierie Web (Alternance)
            </h3>
            <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
              ESGI, Paris 12
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500 bg-bluecyan p-1 rounded-md">
              2021-2022
            </time>
            <h3 className="text-lg font-semibold text-bluecyan dark:text-white">
              Licence informatique générale (Alternance)
            </h3>
            <p className="text-base font-normal text-white dark:text-gray-400">
              ESSIE-IT (Le CNAM), Pontoise
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500 bg-bluecyan p-1 rounded-md">
              2019-2021
            </time>
            <h3 className="text-lg font-semibold text-bluecyan dark:text-white">
              DUT informatique
            </h3>
            <p className="text-base font-normal text-white dark:text-gray-400">
              UPEC, IUT Sénart-Fontainbleau
            </p>
          </li>
        </ol>
        </div>
      </div>
      <div className=" p-5 rounded-sm md:w-1/3 m-5 bg-cube drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
      <div className="">
      <h1 className="mb-5 text-3xl">Experience</h1> 
        <ol className="relative  border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white dark:text-gray-500 bg-bluecyan p-1 rounded-md">
              Sept 2021 - Sept 2024
            </time>
            <h3 className="text-lg font-semibold text-bluecyan dark:text-white">
              Développeur Full Stack
            </h3>
            <p className="mb-4 text-base font-normal text-white dark:text-gray-400">
              Saaswedo, Paris
            </p>
            <ul className="mb-4 font-normal text-white dark:text-gray-400 text-sm  list-disc list-inside space-y-4">
              <li>
                <strong>Développement Full Stack :</strong> Modernisation d'un
                ancien logiciel en PHP et JavaScript avec une refonte du design,
                l'ajout de nouvelles fonctionnalités et la maintenance du code.
              </li>
              <li>
                Développement front-end d’un logiciel sous AngularJS, avec la
                refonte graphique de certains éléments pour les rendre plus
                performants, esthétiques et ergonomiques, ainsi que l'ajout et
                la modification de différentes fonctionnalités.
              </li>
              <li>
                Développement front-end d’une application mobile sous AngularJS
                afin d'aligner la nouvelle application mobile avec le site web
                existant, en respectant les maquettes, le responsive design et
                le bon fonctionnement de l'application.
              </li>
              <li>
                Création d'une extension Chrome facilitant la gestion des clés
                de langage au sein de l'application pour les développeurs.
              </li>
            </ul>
          </li>
        </ol>
        </div>
      </div>
    </div>
  );
}
export default Resume;
