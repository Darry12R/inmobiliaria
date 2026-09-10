import { useEffect } from "react";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import LegalSection from "@/pages/legal/components/LegalSection";
import AgentForm from "@/pages/info/components/AgentForm";

const sections = [
  { id: "beneficios", label: "¿Por qué NOVA?" },
  { id: "requisitos", label: "Requisitos" },
  { id: "proceso", label: "Proceso" },
  { id: "postula", label: "Postula aquí" },
];

const beneficios = [
  {
    icon: "ri-money-dollar-circle-line",
    title: "Comisiones competitivas",
    text: "Recibe una de las mejores comisiones del mercado por cada venta que concretes.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Equipo de soporte",
    text: "Marketing, base de clientes y logística de sala de ventas a tu disposición.",
  },
  {
    icon: "ri-graduation-cap-line",
    title: "Capacitación continua",
    text: "Programas de formación en ventas y productos para que cierres más rápido.",
  },
  {
    icon: "ri-line-chart-line",
    title: "Cartera de proyectos",
    text: "Accede a proyectos en los mejores distritos de Lima listos para vender.",
  },
];

const requisitos = [
  "Personas con o sin experiencia previa en ventas inmobiliarias.",
  "Buena comunicación, trato cercano y orientación al cliente.",
  "Disponibilidad para atender visitas a sala de ventas y seguir leads.",
  "Documentación vigente y disponibilidad para movilizarse en Lima.",
  "Compromiso con la ética y la transparencia que nos representa.",
];

const proceso = [
  {
    icon: "ri-edit-2-line",
    step: "Paso 1",
    title: "Postula en línea",
    text: "Completa el formulario con tus datos y cuéntanos tu motivación.",
  },
  {
    icon: "ri-phone-line",
    step: "Paso 2",
    title: "Entrevista",
    text: "El equipo de NOVA se contactará contigo para una entrevista inicial.",
  },
  {
    icon: "ri-graduation-cap-line",
    step: "Paso 3",
    title: "Capacitación",
    text: "Te formamos en nuestros productos, procesos y herramientas de venta.",
  },
  {
    icon: "ri-rocket-line",
    step: "Paso 4",
    title: "¡A vender!",
    text: "Empiezas a formar parte del equipo de agentes NOVA y a generar ingresos.",
  },
];

export default function AgentPage() {
  useEffect(() => {
    document.title =
      "Sé un agente NOVA | NOVA Inmobiliaria - Trabaja con nosotros";
  }, []);

  return (
    <LegalLayout
      eyebrow="Trabaja con nosotros"
      icon="ri-user-star-line"
      title="Sé un agente NOVA"
      subtitle="Únete a un equipo que vende los mejores proyectos de Lima. Te damos las herramientas, la capacitación y la cartera para que crezcas profesionalmente."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Warm%20abstract%20minimal%20background%20in%20cream%20and%20copper%20tones%20with%20soft%20geometric%20shapes%20suggesting%20partnership%20growth%20and%20opportunity%2C%20gentle%20golden%20light%2C%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail&width=1600&height=700&seq=info-agentes-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="beneficios" index={1} title="¿Por qué ser agente NOVA?">
        <p>
          Ser agente NOVA significa crecer junto a una inmobiliaria consolidada
          en Lima. Esto es lo que te ofrecemos:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-background-200 bg-background-100 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg text-accent-700">
                <i className={b.icon}></i>
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground-800">
                {b.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="requisitos" index={2} title="Requisitos">
        <p>Buscamos personas comprometidas con la excelencia. Necesitas:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          {requisitos.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection id="proceso" index={3} title="¿Cómo es el proceso?">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((p) => (
            <div
              key={p.step}
              className="rounded-lg border border-background-200 bg-background-100 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-lg text-primary-700">
                <i className={p.icon}></i>
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent-600">
                {p.step}
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground-800">
                {p.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </LegalSection>

      <section id="postula" className="scroll-mt-28">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            04
          </span>
          <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
            Postula aquí
          </h2>
        </div>
        <div className="mt-5 rounded-lg border border-background-200 bg-background-100 p-5 md:p-8">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-600">
            Déjanos tus datos y cuéntanos por qué quieres ser parte de NOVA.
            Todos los campos marcados con (*) son obligatorios.
          </p>
          <AgentForm />
        </div>
      </section>
    </LegalLayout>
  );
}