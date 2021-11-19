import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <FAQ />
    </div>
  );
}
