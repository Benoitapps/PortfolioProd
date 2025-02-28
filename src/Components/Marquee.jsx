import React from "react";
import { motion } from "framer-motion";
import vague1 from "../../public/animation/image2.webp"; // Assure-toi que l'image existe

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full p-4">
      <motion.div
        className="flex space-x-0"  // Pas d'espace entre les images
        animate={{ x: ["-0%", "0%"] }} // Déplacement de gauche à droite
        transition={{
          repeat: Infinity, // Animation infinie
          duration: 10, // Durée de l'animation (ajuste pour ralentir ou accélérer)
          ease: "linear" // Déplacement linéaire
        }}
      >
        {/* Répétition de l'image pour créer l'effet de défilement sans fin */}
        <img src={vague1} alt="Dev" className="w-screen h-full" />
      </motion.div>
    </div>
  );
};

export default Marquee;
