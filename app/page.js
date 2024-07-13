"use client";
import Navbar from "../components/home/navbar/Navbar";
import Header from "../components/home/header/Header";
import Direction from "../components/direction/Direction";
import CommandTeam from "../components/command/CommandTeam";
import Services from "../components/services/Services";
import Tools from "../components/tools/Tools";
import Client from "../components/clients/Client";
import Portfolio from "../components/portfolio/Portfolio";
import Work from "../components/work/Work";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Faqat bir marta
    });
  }, []);

  return (
    <>
      <header data-aos="fade-down" className="w-full fixed shadow top-0 z-[999] bg-[#fff]">
        <Navbar />
      </header>
      <Header />
      <Direction />
      <CommandTeam />
      <Services />
      <Tools />
      <Client />
      <Portfolio />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
