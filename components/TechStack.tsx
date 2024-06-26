"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import { FaPython, FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";


export function TechStack() {
  return (
    <LampContainer>
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
    My Tech Stack
  </h1>
  <div>
    <motion.div className="flex flex-wrap justify-center items-center mt-4 sm:mt-6 md:mt-8">
      <FaPython className="m-2 text-5xl sm:text-6xl md:text-7xl text-blue-500" />
      <FaHtml5 className="m-2 text-5xl sm:text-6xl md:text-7xl text-red-500" />
      <FaCss3Alt className="m-2 text-5xl sm:text-6xl md:text-7xl text-blue-500" />
      <FaReact className="m-2 text-5xl sm:text-6xl md:text-7xl text-blue-500" />
      <SiTypescript className="m-2 text-5xl sm:text-6xl md:text-7xl text-blue-500" />
    </motion.div>
  </div>
</LampContainer>
  );
}
