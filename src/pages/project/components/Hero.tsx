import type { ProjectDetail } from "@/data/projectDetails";

export default function Hero({ data }: { data: ProjectDetail }) {
  const features = [
    { icon: "ri-money-dollar-circle-line", label: "Desde", value: data.price },
    { icon: "ri-building-2-line", label: "Dormitorios", value: data.bedrooms },
    { icon: "ri-ruler-2-line", label: "Desde", value: data.areaFrom },
    { icon: "ri-ruler-line", label: "Hasta", value: data.areaTo },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-[680px] items-center justify-center overflow-hidden"
    >
      <img
        src={data.heroImage}
        alt={`Fachada de ${data.name}`}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-primary-950/35 to-primary-950/70"></div>

      <div className="relative z-10 w-full px-4 py-28 text-center md:px-6">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-background-100">
          {data.district}
        </p>
        <h1 className="mx-auto font-heading text-5xl font-semibold leading-tight text-background-50 md:text-7xl">
          {data.name}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-light text-background-100 md:text-xl">
          {data.tagline}
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href="#cotizar"
            className="whitespace-nowrap rounded-md bg-accent-500 px-8 py-3.5 text-sm font-semibold text-background-50 transition-colors hover:bg-accent-600"
          >
            Cotiza aquí
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 md:px-6">
        <div className="grid w-full max-w-4xl grid-cols-2 gap-3 rounded-t-2xl bg-primary-950/80 p-4 backdrop-blur-sm md:grid-cols-4 md:gap-4 md:p-6">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <i
                className={`${f.icon} flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-lg text-accent-300`}
              ></i>
              <div className="text-left">
                <p className="text-[11px] uppercase tracking-wide text-background-200">
                  {f.label}
                </p>
                <p className="text-sm font-semibold text-background-50">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}