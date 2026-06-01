"use client";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/Home/Projects";
import Technologies from "@/components/Home/Technologies";
import About from "@/components/Home/About";
import Gratitude from "@/components/Home/Gratitude";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Gratitude />
      <Footer />
    </main>
  );
}
