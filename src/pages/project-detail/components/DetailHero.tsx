import { useState } from "react";
import { Link } from "react-router-dom";
import type { ProjectDetail } from "@/data/projectDetails";

export default function DetailHero({ data }: { data: ProjectDetail }) {
  const thumbs = [
    { src: data.heroImage, label: "Vista principal" },
    { src: data.facadeImage, label: "Fachada" },
    ...data.galleryImages.map((g) => ({ src: g.src, label: g.title })),
  ];

  const [active, setActive] = useState(data.heroImage);
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="inicio" className="bg-primary-950 pb-14 pt-32 md:pb-16 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-background-200 transition-colors hover:text-accent-300"
        >
          <i className="ri-arrow-left-line"></i> Todos los proyectos
        </Link>

        <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background-50">
                {data.status}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-background-200">
                <i className="ri-map-pin-2-fill text-accent-400"></i>
                {data.district}
              </span>
            </div>
            <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-background-50 md:text-5xl lg:text-6xl">
              {data.name}
            </h1>
            <p className="mt-3 text-lg font-light text-background-100">
              {data.tagline}
            </p>
            <p className="mt-2 text-sm text-background-300">{data.address}</p>
          </div>

          <div className="shrink-0 rounded-lg border border-background-800 bg-background-900/40 px-6 py-5 lg:text-right">
            <p className="text-xs uppercase tracking-wide text-background-300">
              Precio desde
            </p>
            <p className="mt-1 font-heading text-3xl font-semibold text-background-50">
              {data.price}
            </p>
            <a
              href="#cotizar"
              className="mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-accent-500 px-6 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600"
            >
              <i className="ri-send-plane-fill"></i> Cotiza aquí
            </a>
          </div>
        </div>

        {/* Galería grande de fotos */}
        <div id="galeria" className="mt-9">
          <button
            type="button"
            onClick={() => setLightbox(true)}
            className="group relative block w-full overflow-hidden rounded-lg"
            aria-label={`Ampliar imagen de ${data.name}`}
          >
            <img
              src={active}
              alt={`${data.name} en ${data.district}`}
              className="aspect-[16/9] w-full object-cover object-top"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-primary-950/0 opacity-0 transition-all group-hover:bg-primary-950/30 group-hover:opacity-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50/20 text-background-50 backdrop-blur-sm">
                <i className="ri-zoom-in-line text-xl"></i>
              </span>
            </span>
          </button>

          <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
            {thumbs.map((t) => (
              <button
                key={t.src}
                type="button"
                onClick={() => setActive(t.src)}
                className={`relative aspect-[4/3] overflow-hidden rounded-md transition-all ${
                  active === t.src
                    ? "ring-2 ring-accent-400"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Ver ${t.label}`}
              >
                <img
                  src={t.src}
                  alt={`${t.label} de ${data.name}`}
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-primary-950/90 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background-50/20 text-background-50"
            aria-label="Cerrar visor"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
          <img
            src={active}
            alt={`Imagen ampliada de ${data.name}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}