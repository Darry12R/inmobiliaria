import type { ProjectDetail } from "@/data/projectDetails";

export default function DetailOverview({ data }: { data: ProjectDetail }) {
  const specs = [
    { icon: "ri-hotel-bed-line", label: "Dormitorios", value: data.bedrooms },
    { icon: "ri-ruler-2-line", label: "Área desde", value: data.areaFrom },
    { icon: "ri-ruler-line", label: "Área hasta", value: data.areaTo },
    { icon: "ri-map-pin-line", label: "Distrito", value: data.district },
  ];

  return (
    <section id="bienvenida" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Descripción */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Descripción
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-primary-800 md:text-4xl">
              Sobre {data.name}
            </h2>
            {data.description.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`text-base leading-relaxed text-foreground-700 ${
                  index === 0 ? "mt-5" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-7 flex items-center gap-3 rounded-lg border border-background-200 bg-background-100/70 px-5 py-3">
              <i className="ri-bank-line text-xl text-accent-600"></i>
              <span className="text-sm font-medium text-foreground-700">
                Convenio con principales entidades bancarias del Perú
              </span>
            </div>
          </div>

          <div>
            <img
              src={data.facadeImage}
              alt={`Fachada del proyecto ${data.name}`}
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
          </div>
        </div>

        {/* Características */}
        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
            Características
          </p>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-primary-800 md:text-3xl">
            Todo lo que incluye el proyecto
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-background-200 bg-background-100/70 p-5"
              >
                <i
                  className={`${s.icon} flex h-11 w-11 items-center justify-center rounded-full bg-accent-100 text-xl text-accent-700`}
                ></i>
                <p className="mt-4 text-xs uppercase tracking-wide text-foreground-500">
                  {s.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-primary-800">
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.amenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 rounded-lg border border-background-200 bg-background-50 px-4 py-3.5 transition-colors hover:border-accent-300"
              >
                <i className={`${a.icon} text-xl text-accent-700`}></i>
                <span className="text-sm font-medium text-foreground-700">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}