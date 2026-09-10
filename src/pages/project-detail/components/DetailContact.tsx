import type { ProjectDetail } from "@/data/projectDetails";
import QuoteForm from "@/pages/project/components/QuoteForm";

export default function DetailContact({ data }: { data: ProjectDetail }) {
  const contacts = [
    {
      icon: "ri-whatsapp-line",
      label: `WhatsApp ${data.phoneDisplay}`,
      href: data.whatsapp,
      external: true,
    },
    {
      icon: "ri-phone-line",
      label: data.phoneDisplay,
      href: `tel:${data.phone}`,
      external: false,
    },
    {
      icon: "ri-mail-line",
      label: data.email,
      href: `mailto:${data.email}`,
      external: false,
    },
  ];

  return (
    <section id="cotizar" className="bg-background-100/70 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
              Cotiza aquí
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-primary-800 md:text-4xl">
              Agenda tu visita a {data.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground-600">
              Completa el formulario y un asesor se pondrá en contacto contigo
              para mostrarte el proyecto y resolver todas tus dudas.
            </p>

            <div className="mt-8 space-y-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-lg border border-background-200 bg-background-50 px-5 py-3.5 text-sm font-medium text-foreground-700 transition-colors hover:border-primary-300 hover:text-primary-700"
                >
                  <i
                    className={`${c.icon} flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-100 text-lg text-accent-700`}
                  ></i>
                  {c.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-lg border border-background-200 bg-background-50 px-5 py-4">
              <i className="ri-map-pin-2-line mt-0.5 text-xl text-accent-600"></i>
              <span className="text-sm font-medium text-foreground-700">
                {data.address}
              </span>
            </div>
          </div>

          <div className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8">
            <h3 className="font-heading text-2xl font-semibold text-primary-800">
              Cotiza tu próximo depa
            </h3>
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