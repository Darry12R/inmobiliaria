import { relatedProjects } from "@/mocks/project";

export default function RelatedProjects() {
  return (
    <section className="bg-background-100/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="animate-fade-up text-center font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
          Conoce más proyectos en venta
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProjects.map((proj) => (
            <article
              key={proj.name}
              className="overflow-hidden rounded-lg border border-background-200 bg-background-50 transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-background-200">
                <img
                  src={proj.image}
                  alt={`${proj.name} en ${proj.district}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-background-50">
                  {proj.status}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-xl font-semibold text-primary-800">
                  {proj.name}
                </h4>
                <p className="mt-1 text-sm text-foreground-500">{proj.district}</p>
                <div className="mt-4 flex items-center justify-between border-t border-background-200 pt-4">
                  <span className="text-xs text-foreground-600">{proj.area}</span>
                  <span className="text-xs font-semibold text-accent-700">
                    {proj.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}