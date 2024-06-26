import Image from "next/image";
import Hero from "../components/Hero";
import {FaHome} from "react-icons/fa";
import {TechStack} from "../components/TechStack";
import About from "../components/About";
import Projects from "../components/Projects";
import Profiles from "../components/Profiles";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero></Hero>
        <About></About>
        <TechStack></TechStack>
        <Projects></Projects>
        <Profiles></Profiles>
        <Contact></Contact>
      </div>
    </main>
  );
}
