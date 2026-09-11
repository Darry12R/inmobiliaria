import { useMemo, useState } from "react";
import { relatedProjects, salesDistricts } from "@/mocks/project";

function projectUrl(slug: string) {
  return `/#/proyectos/${slug}`;
}

interface ProjectsForSaleProps {
  showHeading?: boolean;
}

export default function ProjectsForSale({
  showHeading = true,
}: ProjectsForSaleProps) {
  const [district, setDistrict] = useState("Todos");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(
    () =>
      district === "Todos"
        ? relatedProjects
        : relatedProjects.filter((p) => p.district === district),
    [district]
  );

  const selectDistrict = (d: string) => {
    setDistrict(d);
    setOpen(false);
  };

  return (
    <section
      id="proyectos"
      className="bg-background-50 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Portafolio
            </p>

            <h3 className="animate-fade-up mt-2 font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
              {showHeading
                ? "Proyectos en Venta"
                : "Otros proyectos en venta"}
            </h3>
          </div>

          {/* Selector de distrito */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-3 rounded-md border border-background-300 bg-background-100 px-5 py-3 text-sm font-semibold text-foreground-800 transition-colors hover:border-accent-400"
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              <i className="ri-map-pin-2-line text-primary-700"></i>

              {district}

              <i
                className={`ri-arrow-down-s-line text-base transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {open && (
              <div
                className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-lg border border-background-200 bg-background-50 shadow-sm"
                role="listbox"
              >
                {salesDistricts.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => selectDistrict(d)}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                      d === district
                        ? "bg-primary-700 text-background-50"
                        : "text-foreground-700 hover:bg-background-200"
                    }`}
                  >
                    {d}

                    {d === district && (
                      <i className="ri-check-line text-base"></i>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((proj) => (
            <a
              key={`${proj.slug}-${proj.district}`}
              href={projectUrl(proj.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-lg border border-background-200 bg-background-50 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background-200">
                <img
                  src={proj.image}
                  alt={`${proj.name} en ${proj.district}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-background-50">
                  {proj.status}
                </span>
              </div>

              <div className="p-5">
                <h4 className="font-heading text-xl font-semibold text-primary-800">
                  {proj.name}
                </h4>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground-500">
                  <i className="ri-map-pin-line text-accent-600"></i>
                  {proj.district}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-background-200 pt-4">
                  <span className="text-xs text-foreground-600">
                    {proj.area}
                  </span>

                  <span className="text-xs font-semibold text-accent-700">
                    {proj.price}
                  </span>
                </div>

                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700">
                  Ver proyecto
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-foreground-500">
            No hay proyectos disponibles en este distrito por ahora.
          </p>
        )}
      </div>
    </section>
  );
}