import React from "react";
import Badge from "../Badge";
import node from "../../../public/iconCode/nodejs-icon.svg";
import Reactlogo from "../../../public/iconCode/react-2.svg";
import mongo from "../../../public/iconOutil/mongo-svgrepo-com.svg";

import ApiPlatform from "../../../public/iconCode/apiplat.svg";
import postgres from "../../../public/iconOutil/postgresql-svgrepo-com.svg";
import symfony from "../../../public/iconCode/symfony.svg";

import S2 from "../../../public/s2/s2Kpi.webp";
import cook from "../../../public/Image/projets/open_cook_1.svg";
import beclal from "../../../public/s2/Beclal.webp";
import MyCoach from "../../../public/s2/Mycoach.svg.webp";

function Projet() {
  return (
    <div className="flex flex-wrap justify-center gap-20 w-full sm:w-5/6 md:w-4/6 lg:w-4/6">
      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl bg-cube drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <figure className="px-3 pt-3">
          <img src={S2} alt="Dev" className="rounded-xl" />
        </figure>
        <div className="card-body items-center p-5 ">
          <div className="flex gap-3 mb-5">
            <Badge img={node} name="Node" color="bg-green-500" />
            <Badge img={Reactlogo} name="React" color="bg-blue-500" />
            <Badge img={mongo} name="Mongo" color="bg-purple-500" />
          </div>
          <h2 className="card-title font-bold">Site d’analitiques </h2>
          <p className="text-sm">
            Réalisation d’un site en Node.js et React.js permettant de collecter
            et de gérer des informations sur les interactions des utilisateurs
            avec un site, telles que les clics, les mouvements de souris, le
            nombre de sessions ouvertes, etc. Toutes ces données sont stockées
            dans une base MongoDB, puis affichées sous forme de statistiques, de
            tableaux et de heatmaps pour une meilleure analyse.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl bg-cube drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <figure className="px-3 pt-3">
          <img
            src={MyCoach}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-5">
          <div className="flex gap-3 mb-5">
            <Badge img={ApiPlatform} name="ApiPlatform" color="bg-yellow-500" />
            <Badge img={Reactlogo} name="React" color="bg-blue-500" />
            <Badge img={postgres} name="Postgres" color="bg-black" />
          </div>
          <h2 className="card-title font-bold">
            Plateforme de Réservation de coachs sportifs privés
          </h2>
          <p className="text-sm">
            Développement d'une plateforme avec API Platform et React permettant
            la réservation de coachs à proximité grâce à la localisation, aux
            filtres et à la recherche, avec prise de rendez vous directement sur
            le calendrier du coach choisi. Côté clubs, gestion des plannings des
            salariés, incluant les congés ainsi que les horaires de début et de
            fin de journée.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl bg-cube drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <figure className="px-3 pt-3">
          <img
            src={cook}
            alt="preojet Cook"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-5">
          <div className="flex gap-3 mb-5">
            <Badge img={node} name="Node" color="bg-green-500" />
            <Badge img={Reactlogo} name="React" color="bg-blue-500" />
            <Badge img={postgres} name="Postgres" color="bg-black" />
          </div>
          <h2 className="card-title font-bold">
            Plateforme de gestion de recettes
          </h2>
          <p className="text-sm">
            Développement d’un site similaire à Marmiton en Node et React, avec
            une différence majeure : la recherche se fait par question orale ou
            écrite, permettant à une IA (api openAI) intégrée de sélectionner
            les recettes les plus adaptées en fonction de la demande (exemple :
            "recette avec 3 œufs"). Le site inclut également un espace client
            offrant la possibilité de communiquer directement, ainsi que des
            recommandations proposées par l'IA.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-xl bg-cube drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <figure className="px-3 pt-3">
          <img
            src={beclal}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center p-5">
          <div className="flex gap-3 mb-5">
            <Badge img={symfony} name="Symfony" color="bg-pink-500" />
            <Badge img={postgres} name="Postgres" color="bg-black" />
          </div>
          <h2 className="card-title font-bold">
            Site réservation de billets
          </h2>
          <p className="text-sm">
            Développement d’un site en Symfony/Twig permettant aux entreprises
            inscrites de proposer à la vente des billets d’avion à tarifs
            réduits, disponibles pour une durée limitée, et à leurs clients de
            les acheter directement en ligne.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projet;
