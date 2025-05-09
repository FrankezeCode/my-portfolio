"use client";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/Home/Projects";
import Technologies from "@/components/Home/Technologies";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Footer />
    </main>
  );
}
