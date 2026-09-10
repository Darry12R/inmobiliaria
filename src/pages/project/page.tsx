import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import VirtualTour from "./components/VirtualTour";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import Plans from "./components/Plans";
import ProjectsForSale from "./components/ProjectsForSale";
import ContactBar from "./components/ContactBar";
import Footer from "./components/Footer";
import { defaultProject } from "@/data/projectDetails";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <Hero data={defaultProject} />
        <Welcome data={defaultProject} />
        <VirtualTour />
        <Location data={defaultProject} />
        <Gallery data={defaultProject} />
        <Plans data={defaultProject} />
        <ProjectsForSale />
        <ContactBar data={defaultProject} />
      </main>
      <Footer />

      <a
        href={defaultProject.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-500 text-2xl text-background-50 shadow-sm transition-transform hover:scale-105"
      >
        <i className="ri-whatsapp-line"></i>
      </a>
    </div>
  );
}