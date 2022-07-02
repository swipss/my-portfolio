import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { projects } from "./data/projects";

export const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header className="fixed">
        <Header />
      </header>
      <main className="w-full absolute mt-[100vh] bg-white shadow-lg shadow-black rounded-t-2xl">
        <section>
          <About />
        </section>
        <section>
          <h1 className="gradient text-6xl font-poppins text-center md:text-7xl lg:text-8xl  my-7">
            Apps I've made.
          </h1>
          {projects.map((project, i) => (
            <Work project={project} index={i} />
          ))}
        </section>
      </main>
    </>
  );
};
