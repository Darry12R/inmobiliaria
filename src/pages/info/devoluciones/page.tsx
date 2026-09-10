import { useEffect } from "react";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import LegalSection from "@/pages/legal/components/LegalSection";
import ReturnsForm from "@/pages/info/components/ReturnsForm";

const sections = [
  { id: "politica", label: "Política de devoluciones" },
  { id: "aplica", label: "¿Cuándo aplica?" },
  { id: "proceso", label: "Proceso" },
  { id: "solicitud", label: "Solicita aquí" },
];

const aplica = [
  "Desistimiento de la compra dentro de los plazos y condiciones del contrato firmado.",
  "Pagos o cobros duplicados o no reconocidos en tu estado de cuenta.",
  "Incumplimiento de las condiciones ofrecidas al momento de la reserva.",
  "Devolución de la separación según lo establecido en el documento de reserva.",
];

const pasos = [
  {
    icon: "ri-edit-2-line",
    step: "Paso 1",
    title: "Completa la solicitud",
    text: "Registra tus datos y el motivo de la devolución en el formulario.",
  },
  {
    icon: "ri-search-eye-line",
    step: "Paso 2",
    title: "Evaluación",
    text: "Nuestro equipo revisa tu caso y verifica la documentación.",
  },
  {
    icon: "ri-mail-check-line",
    step: "Paso 3",
    title: "Respuesta",
    text: "Te comunicamos el resultado y los pasos a seguir por correo.",
  },
  {
    icon: "ri-refund-2-line",
    step: "Paso 4",
    title: "Devolución",
    text: "De corresponder, ejecutamos la devolución por el medio acordado.",
  },
];

export default function ReturnsPage() {
  useEffect(() => {
    document.title =
      "Portal de Devoluciones | NOVA Inmobiliaria - Solicita tu devolución";
  }, []);

  return (
    <LegalLayout
      eyebrow="Atención postventa"
      icon="ri-refund-2-line"
      title="Portal de Devoluciones"
      subtitle="Aquí puedes solicitar y dar seguimiento a devoluciones relacionadas con tu compra, de forma clara y dentro de los plazos establecidos."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Warm%20abstract%20minimal%20background%20in%20cream%20and%20soft%20terracotta%20tones%20with%20subtle%20circular%20arrow%20shapes%20suggesting%20returns%20and%20exchange%2C%20gentle%20golden%20light%2C%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail&width=1600&height=700&seq=info-devoluciones-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="politica" index={1} title="Política de devoluciones">
        <p>
          En <strong>NOVA Inmobiliaria</strong> queremos que tu experiencia de
          compra sea clara y segura. Si por algún motivo necesitas solicitar una
          devolución, ponemos a tu disposición este portal para gestionar tu
          caso de manera ordenada.
        </p>
        <p>
          Las devoluciones se rigen por lo establecido en el contrato, el
          documento de reserva y la normativa de protección al consumidor
          aplicable. Te recomendamos revisar las condiciones firmadas antes de
          iniciar tu solicitud.
        </p>
      </LegalSection>

      <LegalSection id="aplica" index={2} title="¿Cuándo aplica una devolución?">
        <p>Puedes solicitar una devolución en los siguientes casos:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          {aplica.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="rounded-lg border border-background-200 bg-background-100 p-4 text-sm text-foreground-600">
          <span className="mr-2 inline-flex h-5 w-5 items-center justify-center align-middle text-accent-600">
            <i className="ri-information-line"></i>
          </span>
          La evaluación de cada solicitud depende de las condiciones
          contractuales y de la documentación presentada. Este canal no
          reemplaza el Libro de Reclamaciones.
        </p>
      </LegalSection>

      <LegalSection id="proceso" index={3} title="¿Cómo funciona el proceso?">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div
              key={p.step}
              className="rounded-lg border border-background-200 bg-background-100 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg text-accent-700">
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

      <section id="solicitud" className="scroll-mt-28">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            04
          </span>
          <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
            Solicita tu devolución
          </h2>
        </div>
        <div className="mt-5 rounded-lg border border-background-200 bg-background-100 p-5 md:p-8">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-600">
            Completa los siguientes campos. Todos los datos marcados con (*) son
            obligatorios.
          </p>
          <ReturnsForm />
        </div>
      </section>
    </LegalLayout>
  );
}