import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";

export const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
    </>
  );
};
