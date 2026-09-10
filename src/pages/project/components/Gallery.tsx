import { useState } from "react";
import { galleryCategories } from "@/mocks/project";
import type { ProjectDetail } from "@/data/projectDetails";

export default function Gallery({ data }: { data: ProjectDetail }) {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = data.galleryImages.filter(
    (img) => img.category === activeCategory
  );

  return (
    <section id="galeria" className="bg-background-100/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="animate-fade-up text-center font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
          Espacios para conectar
        </h3>

        <div className="mt-8 flex justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-primary-700 text-background-50"
                  : "border border-background-300 text-foreground-600 hover:border-primary-500 hover:text-primary-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {visible.map((img) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightbox(img.src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-background-200"
              aria-label={`Ver ${img.title}`}
            >
              <img
                src={img.src}
                alt={`${img.title} de ${data.name}`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-950/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-medium text-background-50">
                  <i className="ri-zoom-in-line"></i> {img.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-950/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-background-50/20 text-background-50"
            aria-label="Cerrar visor"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
          <img
            src={lightbox}
            alt={`Imagen ampliada de ${data.name}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}