import React from "react";
import php from "../../../public/iconCode/php-svgrepo-com.svg";
import JavaScript from "../../../public/iconCode/javascript-1.svg";
//back
import node from "../../../public/iconCode/nodejs-icon.svg";
import ApiPlatform from "../../../public/iconCode/apiplat.svg";
import symfony from "../../../public/iconCode/symfony.svg";
//front
import Reactlogo from "../../../public/iconCode/react-2.svg";
import angular from "../../../public/iconCode/angular-icon.svg";
//bdd
import postgres from "../../../public/iconOutil/postgresql-svgrepo-com.svg";
import mysql from "../../../public/iconOutil/mysql-logo-svgrepo-com.svg";
import mongo from "../../../public/iconOutil/mongo-svgrepo-com.svg";
//outils
import figma from "../../../public/iconOutil/icons8-figma.svg";
import git from "../../../public/iconOutil/icons8-git.svg";
import github from "../../../public/iconOutil/icons8-github.svg";
import vscode from "../../../public/iconOutil/icons8-visual-studio.svg";
import linux from "../../../public/iconOutil/linux-svgrepo-com.svg";
import postman from "../../../public/iconOutil/postman-icon-svgrepo-com.svg";
import tailwind from "../../../public/iconOutil/tailwindcss-icon-svgrepo-com.svg";
import docker from "../../../public/iconOutil/docker-svgrepo-com.svg";

function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-5/6 z-10">
      {/* Première ligne */}
      <div className="flex flex-col rounded-sm p-5 bg-cube w-fit min-w-[250px]  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <p className="mb-3">Langages :</p>
        <div className="flex flex-row space-x-3 justify-center">
          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={php} alt="PHP Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              PHP
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={JavaScript} alt="JS Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              JavaScript
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-sm p-5 bg-cube w-fit min-w-[250px]  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <p className="mb-3">Frameworks Back :</p>
        <div className="flex flex-row space-x-3 justify-center">
          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={symfony} alt="Symfony Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Symfony
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img
              src={ApiPlatform}
              alt="ApiPlatform Logo"
              className="w-14 h-14"
            />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              ApiPlatform
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={node} alt="Node.js Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Node.js
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-sm p-5 bg-cube w-fit min-w-[250px]  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <p className="mb-3">Frameworks Front :</p>
        <div className="flex flex-row space-x-3 justify-center">
          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={Reactlogo} alt="React Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              React
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={angular} alt="Angular Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Angular
            </span>
          </div>
        </div>
      </div>

      {/* Seconde ligne */}
      <div className="flex flex-col rounded-sm p-5 bg-cube w-fit min-w-[250px]  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <p className="mb-3">BDD :</p>
        <div className="flex flex-row space-x-3 justify-center">
          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={postgres} alt="PostgreSQL Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Postgres
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={mysql} alt="MySQL Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              MySQL
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={mongo} alt="MongoDB Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              MongoDB
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-sm p-5 bg-cube w-fit min-w-[250px]  drop-shadow-[10px_10px_10px_rgba(0,255,255,0.5)]">
        <p className="mb-3">Outils :</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={figma} alt="Figma Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Figma
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={git} alt="Git Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Git
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={github} alt="GitHub Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              GitHub
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={vscode} alt="VS Code Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              VS Code
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={linux} alt="Linux Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Linux
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={postman} alt="Postman Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Postman
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={tailwind} alt="Tailwind Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tailwind
            </span>
          </div>

          <div className="relative p-1 bg-slate-50 w-fit flex justify-center group">
            <img src={docker} alt="Docker Logo" className="w-14 h-14" />
            <span className="absolute bottom-0 left-0 right-0 bg-black text-white text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Docker
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
