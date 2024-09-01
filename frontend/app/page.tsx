"use client";


import EmbaixadoresSubscribeSection from "@/components/EmbaixadoresSubscribeSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import RepresentanteSection from "@/components/RepresentantesSection";
import Sobre from "@/components/Sobre";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Sobre />
        <Projetos />
        <RepresentanteSection />
        <EmbaixadoresSubscribeSection />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
