import { useState } from "react";
import type { ProjectDetail } from "@/data/projectDetails";
import QuoteForm from "./QuoteForm";

export default function Plans({ data }: { data: ProjectDetail }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePlan, setActivePlan] = useState<number | null>(null);

  const current = data.floorPlans[activeCategory];
  const selectedPlan = activePlan !== null ? current.items[activePlan] : null;

  const selectCategory = (index: number) => {
    setActiveCategory(index);
    setActivePlan(null);
  };

  return (
    <section id="planos" className="bg-background-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="animate-fade-up">
            <h3 className="font-heading text-4xl font-semibold text-primary-800 md:text-5xl">
              Escoge y cotiza aquí tu próximo depa
            </h3>
            <p className="mt-4 max-w-xl text-base text-foreground-600">
              Explora las tipologías por número de dormitorios y elige la que
              mejor se adapte a tu estilo de vida.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {data.floorPlans.map((plan, index) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => selectCategory(index)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    activeCategory === index
                      ? "border-primary-700 bg-primary-700 text-background-50"
                      : "border-background-300 text-foreground-600 hover:border-primary-500 hover:text-primary-700"
                  }`}
                >
                  {plan.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {current.items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActivePlan(i)}
                  className={`group relative aspect-[3/4] overflow-hidden rounded-lg bg-background-200 outline-none ${
                    activePlan === i
                      ? "ring-2 ring-primary-700 ring-offset-2"
                      : ""
                  }`}
                  aria-label={`Ver plano ${item.name}`}
                >
                  <img
                    src={item.src}
                    alt={`Plano ${item.name} de ${data.name}`}
                    className="h-full w-full object-contain object-top p-2"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-primary-950/70 px-2 py-1.5 text-center text-xs font-medium text-background-50">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {selectedPlan && (
              <div className="mt-8 overflow-hidden rounded-lg border border-background-200 bg-background-100/60 p-3">
                <img
                  src={selectedPlan.src}
                  alt={`Plano seleccionado ${selectedPlan.name}`}
                  className="max-h-[420px] w-full rounded-md object-contain object-top"
                />
                <p className="mt-3 text-sm font-medium text-foreground-600">
                  Tipología{" "}
                  <span className="font-semibold text-primary-700">
                    {selectedPlan.name}
                  </span>
                </p>
              </div>
            )}
          </div>

          <div
            id="cotizar"
            className="animate-fade-up rounded-lg border border-background-200 bg-background-100/70 p-6 md:p-8"
          >
            <h4 className="font-heading text-2xl font-semibold text-primary-800">
              Cotiza tu próximo depa
            </h4>
            <p className="mt-2 text-sm text-foreground-600">
              Déjanos tus datos y pronto un asesor se contactará contigo.
            </p>
            <div className="mt-6">
              <QuoteForm projectName={data.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}