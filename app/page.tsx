import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="xl:ml-[260px]">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
