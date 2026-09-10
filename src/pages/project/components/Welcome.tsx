import type { ProjectDetail } from "@/data/projectDetails";

export default function Welcome({ data }: { data: ProjectDetail }) {
  return (
    <section id="bienvenida" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <h2 className="font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
              ¡Bienvenido a tu nuevo hogar en {data.district}!
            </h2>
            {data.description.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={`text-base leading-relaxed text-foreground-700 ${
                  index === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-700">
                Financia tu departamento con
              </h3>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-background-200 bg-background-100/70 px-5 py-3">
                <i className="ri-bank-line text-xl text-accent-600"></i>
                <span className="text-sm font-medium text-foreground-700">
                  Convenio con principales entidades bancarias del Perú
                </span>
              </div>
            </div>

            <a
              href="#cotizar"
              className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-700 hover:text-background-50"
            >
              <i className="ri-calendar-check-line"></i> Agenda tu visita
            </a>
          </div>

          <div className="relative animate-fade-up">
            <img
              src={data.facadeImage}
              alt={`Fachada del proyecto ${data.name}`}
              className="aspect-[4/5] w-full rounded-lg object-cover object-top"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-lg bg-accent-500 px-6 py-4 text-background-50 shadow-sm md:block">
              <p className="font-heading text-2xl font-semibold">
                {data.district}
              </p>
              <p className="text-xs uppercase tracking-wider">
                Zona privilegiada
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.amenities.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 rounded-lg border border-background-200 bg-background-100/70 px-5 py-4 transition-colors hover:border-accent-300"
            >
              <i
                className={`${a.icon} flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xl text-accent-700`}
              ></i>
              <span className="text-sm font-medium text-foreground-700">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}