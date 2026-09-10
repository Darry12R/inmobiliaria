import { useCallback, useEffect, useState } from "react";
import { tourRooms } from "@/mocks/project";

export default function VirtualTour() {
  const [active, setActive] = useState(0);
  const total = tourRooms.length;
  const room = tourRooms[active];

  const go = useCallback(
    (dir: number) => setActive((prev) => (prev + dir + total) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section id="recorrido" className="bg-background-100/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="animate-fade-up text-center font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
          Recorrido Virtual
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-foreground-600">
          Recorre cada ambiente del proyecto sin salir de esta página.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-background-200 bg-primary-950">
          <div className="relative aspect-video w-full">
            <img
              key={room.id}
              src={room.image}
              alt={`Recorrido virtual - ${room.name}, proyecto Torre Primavera en San Isidro`}
              title={`Recorrido virtual ${room.name} - Torre Primavera en San Isidro`}
              className="h-full w-full animate-fade-up object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/15 to-primary-950/20"></div>

            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background-50/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-700">
              <i className="ri-earth-line"></i>
              Recorrido 360º
            </span>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Ambiente anterior"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background-50/90 text-primary-800 transition-colors hover:bg-background-50 md:left-6 md:h-12 md:w-12"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente ambiente"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background-50/90 text-primary-800 transition-colors hover:bg-background-50 md:right-6 md:h-12 md:w-12"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 md:flex-row md:items-end md:justify-between md:p-8">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">
                  Ambiente {String(active + 1).padStart(2, "0")}
                </p>
                <h4 className="mt-1 font-heading text-2xl font-semibold text-background-50 md:text-3xl">
                  {room.name}
                </h4>
                <p className="mt-1 text-sm text-background-100 md:text-base">
                  {room.description}
                </p>
              </div>
              <p className="whitespace-nowrap font-heading text-lg text-background-100">
                {String(active + 1).padStart(2, "0")}
                <span className="text-background-400">
                  {" "}
                  / {String(total).padStart(2, "0")}
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto bg-primary-900 p-4">
            {tourRooms.map((r, i) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver ${r.name}`}
                className={`group relative h-20 w-28 shrink-0 overflow-hidden rounded-md transition-all ${
                  i === active
                    ? "opacity-100 ring-2 ring-accent-400"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={r.image}
                  alt={r.name}
                  title={`Recorrido virtual ${r.name}`}
                  className="h-full w-full object-cover object-top"
                />
                <span className="absolute inset-x-0 bottom-0 bg-primary-950/70 px-2 py-1 text-left text-[11px] font-medium text-background-50">
                  {r.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}