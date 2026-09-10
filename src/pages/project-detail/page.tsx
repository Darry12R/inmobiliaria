import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "@/data/projectDetails";
import Navbar from "@/pages/project/components/Navbar";
import Footer from "@/pages/project/components/Footer";
import DetailHero from "./components/DetailHero";
import DetailOverview from "./components/DetailOverview";
import DetailContact from "./components/DetailContact";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const data = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (data) {
      document.title = `${data.name} en ${data.district} | NOVA Inmobiliaria`;
    }
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background-50">
        <Navbar />
        <main className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-40 text-center md:px-6">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-3xl text-accent-700">
            <i className="ri-building-line"></i>
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold text-primary-800">
            Proyecto no encontrado
          </h1>
          <p className="mt-4 text-foreground-600">
            El proyecto que buscas no está disponible por el momento.
          </p>
          <Link
            to="/"
            className="mt-8 whitespace-nowrap rounded-md bg-primary-700 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800"
          >
            Volver al inicio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar detail />
      <main>
        <DetailHero data={data} />
        <DetailOverview data={data} />
        <DetailContact data={data} />
      </main>
      <Footer />

      <a
        href={data.whatsapp}
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