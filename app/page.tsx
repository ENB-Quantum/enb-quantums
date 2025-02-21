import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Footer />
    </div>
  );
}
