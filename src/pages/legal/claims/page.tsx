import { useEffect } from "react";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";
import ClaimsForm from "../components/ClaimsForm";

const sections = [
  { id: "informacion", label: "¿Qué es?" },
  { id: "proceso", label: "¿Cómo funciona?" },
  { id: "formulario", label: "Formulario" },
  { id: "canales", label: "Canales de atención" },
];

const pasos = [
  {
    icon: "ri-edit-2-line",
    title: "Completa el formulario",
    text: "Registra tus datos y describe tu reclamo o queja con el mayor detalle posible.",
  },
  {
    icon: "ri-mail-check-line",
    title: "Recibe tu constancia",
    text: "Te enviaremos una copia del reclamo al correo que indiques con el número de registro.",
  },
  {
    icon: "ri-time-line",
    title: "Respuesta en 30 días",
    text: "Atenderemos tu caso y te daremos una respuesta en un plazo máximo de 30 días calendario.",
  },
];

export default function ClaimsPage() {
  useEffect(() => {
    document.title =
      "Libro de Reclamaciones | NOVA Inmobiliaria - Atención al Consumidor";
  }, []);

  return (
    <LegalLayout
      eyebrow="Atención al consumidor"
      icon="ri-book-2-line"
      title="Libro de Reclamaciones"
      subtitle="Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571), ponemos a tu disposición nuestro Libro de Reclamaciones virtual para registrar tus reclamos y quejas."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Warm%20abstract%20minimal%20background%20in%20cream%20ivory%20and%20rich%20caramel%20brown%20tones%2C%20soft%20layered%20paper%20texture%20and%20gentle%20golden%20light%2C%20elegant%20calm%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail%2C%20smooth%20harmonious%20composition&width=1600&height=700&seq=legal-claims-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="informacion" index={1} title="¿Qué es el Libro de Reclamaciones?">
        <p>
          El Libro de Reclamaciones es un documento obligatorio donde puedes
          registrar una <strong>disconformidad</strong> respecto a un producto
          (reclamo) o una <strong>insatisfacción</strong> respecto a la atención
          recibida (queja).
        </p>
        <p>
          Ten en cuenta que este canal no es una vía de atención de urgencias ni
          reemplaza la garantía o el servicio postventa. Es un mecanismo formal
          para que tu caso quede registrado y sea atendido en los plazos de ley.
        </p>
      </LegalSection>

      <LegalSection id="proceso" index={2} title="¿Cómo funciona?">
        <div className="grid gap-4 sm:grid-cols-3">
          {pasos.map((paso) => (
            <div
              key={paso.title}
              className="rounded-lg border border-background-200 bg-background-100 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 text-lg text-accent-700">
                <i className={paso.icon}></i>
              </span>
              <p className="mt-3 text-sm font-semibold text-foreground-800">
                {paso.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                {paso.text}
              </p>
            </div>
          ))}
        </div>
      </LegalSection>

      <section id="formulario" className="scroll-mt-28">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            03
          </span>
          <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
            Registra tu reclamo
          </h2>
        </div>

        <div className="mt-5 rounded-lg border border-background-200 bg-background-100 p-5 md:p-8">
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-foreground-600">
            Completa los siguientes campos. Todos los datos marcados con (*) son
            obligatorios. Recuerda que registrar un reclamo no impide que
            puedas comunicarte con nuestros canales de atención.
          </p>
          <ClaimsForm />
        </div>
      </section>

      <LegalSection id="canales" index={4} title="Canales de atención">
        <div className="rounded-lg border border-background-200 bg-background-50 p-5">
          <p className="text-sm font-semibold text-foreground-800">
            NOVA Inmobiliaria
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground-700">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-map-pin-line"></i>
              </span>
              Av. Conquistadores 1050, San Isidro, Lima
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-phone-line"></i>
              </span>
              +51 982 945 025
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-mail-line"></i>
              </span>
              ventas@novainmobiliaria.com
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-time-line"></i>
              </span>
              Lunes a Domingo de 10:00 a.m. a 7:00 p.m.
            </li>
          </ul>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}