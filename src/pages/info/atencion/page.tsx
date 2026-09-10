import { useEffect } from "react";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import LegalSection from "@/pages/legal/components/LegalSection";
import ContactForm from "@/pages/info/components/ContactForm";

const sections = [
  { id: "canales", label: "Canales de atención" },
  { id: "horarios", label: "Horarios" },
  { id: "postventa", label: "Postventa" },
  { id: "formulario", label: "Escríbenos" },
];

const canales = [
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    value: "+51 982 945 025",
    href: "https://api.whatsapp.com/send?phone=51982945025&text=Hola%2C%20necesito%20ayuda%20de%20atenci%C3%B3n%20al%20cliente",
    external: true,
  },
  {
    icon: "ri-phone-line",
    title: "Teléfono",
    value: "+51 982 945 025",
    href: "tel:+51982945025",
    external: false,
  },
  {
    icon: "ri-mail-line",
    title: "Correo",
    value: "ventas@novainmobiliaria.com",
    href: "mailto:ventas@novainmobiliaria.com",
    external: false,
  },
  {
    icon: "ri-map-pin-line",
    title: "Sala de ventas",
    value: "Av. Conquistadores 1050, San Isidro",
    href: "https://www.google.com/maps/search/?api=1&query=Av.%20Conquistadores%201050%2C%20San%20Isidro%2C%20Lima",
    external: true,
  },
];

const horarios = [
  { dia: "Lunes a Viernes", hora: "10:00 a.m. - 7:00 p.m." },
  { dia: "Sábados", hora: "10:00 a.m. - 7:00 p.m." },
  { dia: "Domingos y feriados", hora: "10:00 a.m. - 7:00 p.m." },
];

export default function CustomerServicePage() {
  useEffect(() => {
    document.title =
      "Atención al Cliente | NOVA Inmobiliaria - Contacto y Postventa";
  }, []);

  return (
    <LegalLayout
      eyebrow="Estamos para ayudarte"
      icon="ri-customer-service-2-line"
      title="Atención al Cliente"
      subtitle="Un equipo de asesores está listo para resolver tus dudas sobre proyectos, financiamiento, reservas, entrega y postventa. Elige el canal que prefieras."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Warm%20abstract%20minimal%20background%20in%20cream%20and%20espresso%20brown%20tones%20with%20soft%20rounded%20shapes%20suggesting%20friendly%20customer%20care%2C%20gentle%20golden%20light%2C%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail%2C%20harmonious%20composition&width=1600&height=700&seq=info-atencion-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="canales" index={1} title="Canales de atención">
        <p>
          Puedes contactarnos por el canal que te resulte más cómodo. Todos
          nuestros asesores están capacitados para orientarte en cada etapa de
          tu compra.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {canales.map((canal) => (
            <a
              key={canal.title}
              href={canal.href}
              target={canal.external ? "_blank" : undefined}
              rel={canal.external ? "noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-lg border border-background-200 bg-background-100 p-5 transition-colors hover:border-accent-400"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xl text-accent-700">
                <i className={canal.icon}></i>
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground-800">
                  {canal.title}
                </span>
                <span className="mt-1 block text-sm text-foreground-600 transition-colors group-hover:text-primary-700">
                  {canal.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="horarios" index={2} title="Horarios de atención">
        <p>
          Nuestra sala de ventas y nuestros canales digitales atienden todos los
          días de la semana.
        </p>
        <div className="overflow-hidden rounded-lg border border-background-200">
          {horarios.map((h, i) => (
            <div
              key={h.dia}
              className={`flex items-center justify-between px-5 py-4 text-sm ${
                i % 2 === 0 ? "bg-background-100" : "bg-background-50"
              }`}
            >
              <span className="font-medium text-foreground-800">{h.dia}</span>
              <span className="text-foreground-600">{h.hora}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="postventa" index={3} title="Servicio de postventa">
        <p>
          Después de la entrega de tu departamento seguimos acompañándote. El
          equipo de postventa atiende consultas sobre acabados, documentación,
          independización y cualquier incidencia relacionada con tu unidad.
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>Seguimiento de observaciones y levantamiento de acabados.</li>
          <li>Orientación sobre trámites de independización y títulos.</li>
          <li>Coordinación de mantenimiento de áreas comunes.</li>
          <li>Atención de reclamos y quejas a través del Libro de Reclamaciones.</li>
        </ul>
        <p>
          Para casos formales puedes registrar tu solicitud en nuestro{" "}
          <a
            href="/libro-de-reclamaciones"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary-700 underline decoration-primary-300 underline-offset-2 hover:text-primary-800"
          >
            Libro de Reclamaciones
          </a>
          .
        </p>
      </LegalSection>

      <section id="formulario" className="scroll-mt-28">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            04
          </span>
          <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
            Escríbenos
          </h2>
        </div>
        <div className="mt-5 rounded-lg border border-background-200 bg-background-100 p-5 md:p-8">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-600">
            Completa el formulario y un asesor te responderá a la brevedad.
            Todos los campos marcados con (*) son obligatorios.
          </p>
          <ContactForm />
        </div>
      </section>
    </LegalLayout>
  );
}