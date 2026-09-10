import { useState } from "react";
import type { ProjectDetail } from "@/data/projectDetails";

export default function Location({ data }: { data: ProjectDetail }) {
  const categories = data.locationCategories ?? [];
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="ubicacion" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            {categories.length > 0 && active ? (
              <>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActive(cat)}
                      className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        active.id === cat.id
                          ? "border-primary-700 bg-primary-700 text-background-50"
                          : "border-background-300 text-foreground-600 hover:border-primary-500 hover:text-primary-700"
                      }`}
                    >
                      <i
                        className={`${cat.icon} flex h-5 w-5 items-center justify-center`}
                      ></i>
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 overflow-hidden rounded-lg border border-background-200 bg-background-100/60 p-2">
                  <img
                    src={active.map}
                    alt={`Mapa de ${active.label} cerca de ${data.name}`}
                    className="aspect-[16/9] w-full rounded-md object-cover object-top"
                  />
                </div>
              </>
            ) : (
              <div className="overflow-hidden rounded-lg border border-background-200 bg-background-100/60 p-2">
                <iframe
                  title={`Ubicación de ${data.name} en ${data.district}`}
                  src={data.mapsEmbed}
                  className="aspect-[16/9] w-full rounded-md"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>

          <div className="animate-fade-up">
            <div className="flex items-start gap-3">
              <i className="ri-map-pin-2-fill mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-lg text-accent-700"></i>
              <div>
                <h3 className="font-heading text-3xl font-semibold text-primary-800">
                  Ubicado en una de las mejores zonas en {data.district}
                </h3>
                <p className="mt-3 text-sm text-foreground-600">
                  {data.address}
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-background-200 bg-background-100/70 p-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                ¿Cómo llegar?
              </h4>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={data.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800"
                >
                  <i className="ri-map-2-line"></i> Maps
                </a>
                <a
                  href={data.wazeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-primary-700 px-5 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-700 hover:text-background-50"
                >
                  <i className="ri-navigation-line"></i> Waze
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}