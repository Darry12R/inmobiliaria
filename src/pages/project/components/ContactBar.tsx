import type { ProjectDetail } from "@/data/projectDetails";

export default function ContactBar({ data }: { data: ProjectDetail }) {
  return (
    <section className="border-y border-background-200 bg-primary-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 md:px-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="font-heading text-2xl font-semibold text-background-50">
            {data.name}
          </p>
          <p className="mt-1 text-sm text-background-200">
            ¿Tienes dudas? Contáctanos y hablemos de tu próximo hogar.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={data.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50 text-lg text-primary-800 transition-colors hover:bg-accent-500"
          >
            <i className="ri-whatsapp-line"></i>
          </a>
          <a
            href={`mailto:${data.email}`}
            aria-label="Enviar correo"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50 text-lg text-primary-800 transition-colors hover:bg-accent-500"
          >
            <i className="ri-mail-line"></i>
          </a>
          <a
            href={`tel:${data.phone}`}
            aria-label="Llamar por teléfono"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50 text-lg text-primary-800 transition-colors hover:bg-accent-500"
          >
            <i className="ri-phone-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}