import { useEffect } from "react";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import LegalSection from "@/pages/legal/components/LegalSection";

const sections = [
  { id: "compromiso", label: "Nuestro compromiso" },
  { id: "documentos", label: "Documentos" },
  { id: "indicadores", label: "Indicadores" },
  { id: "etica", label: "Canal de ética" },
  { id: "contacto", label: "Contacto" },
];

const documentos = [
  {
    icon: "ri-file-text-line",
    name: "Memoria anual 2026",
    desc: "Resultados, proyectos entregados y gestión del año.",
  },
  {
    icon: "ri-shield-check-line",
    name: "Código de ética y conducta",
    desc: "Principios que guían nuestras relaciones comerciales.",
  },
  {
    icon: "ri-lock-2-line",
    name: "Política de protección de datos",
    desc: "Tratamiento responsable de la información personal.",
  },
  {
    icon: "ri-recycle-line",
    name: "Política socioambiental",
    desc: "Compromiso con el desarrollo sostenible y la comunidad.",
  },
  {
    icon: "ri-government-line",
    name: "Reglamento de atención al cliente",
    desc: "Canales, plazos y procedimientos de atención.",
  },
  {
    icon: "ri-award-line",
    name: "Certificaciones y licencias",
    desc: "Permisos de construcción y habilitaciones vigentes.",
  },
];

const indicadores = [
  { value: "+12", label: "Proyectos entregados" },
  { value: "+3,500", label: "Familias atendidas" },
  { value: "98%", label: "Satisfacción postventa" },
  { value: "+15", label: "Años de experiencia" },
];

export default function TransparencyPage() {
  useEffect(() => {
    document.title =
      "Portal de Transparencia | NOVA Inmobiliaria - Información y documentos";
  }, []);

  return (
    <LegalLayout
      eyebrow="Información abierta"
      icon="ri-eye-line"
      title="Portal de Transparencia"
      subtitle="Creemos en la confianza que se construye con información clara. Aquí encuentras nuestros documentos institucionales, indicadores de gestión y canales de contacto."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Clean%20layered%20translucent%20glass%20planes%20over%20warm%20cream%20and%20caramel%20background%2C%20abstract%20minimal%20composition%20suggesting%20transparency%20and%20trust%2C%20soft%20golden%20light%2C%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail&width=1600&height=700&seq=info-transparencia-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="compromiso" index={1} title="Nuestro compromiso">
        <p>
          En <strong>NOVA Inmobiliaria</strong> promovemos una gestión
          transparente, ética y responsable. Este portal reúne la información
          relevante sobre nuestra operación para que puedas conocernos y tomar
          decisiones informadas.
        </p>
        <p>
          Publicamos de manera permanente nuestra documentación institucional y
          los indicadores que reflejan nuestro desempeño en el mercado
          inmobiliario peruano.
        </p>
      </LegalSection>

      <LegalSection id="documentos" index={2} title="Documentos institucionales">
        <p>
          Puedes solicitar cualquiera de estos documentos escribiéndonos, y te
          los enviaremos por correo electrónico.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {documentos.map((doc) => (
            <a
              key={doc.name}
              href={`mailto:ventas@novainmobiliaria.com?subject=${encodeURIComponent(
                `Solicitud de documento: ${doc.name}`
              )}`}
              className="group flex items-start gap-4 rounded-lg border border-background-200 bg-background-100 p-5 transition-colors hover:border-accent-400"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xl text-primary-700">
                <i className={doc.icon}></i>
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground-800">
                  {doc.name}
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-foreground-600">
                  {doc.desc}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary-700">
                  <i className="ri-mail-send-line"></i> Solicitar
                </span>
              </span>
            </a>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="indicadores" index={3} title="Indicadores de gestión">
        <p>
          Estos son algunos números que reflejan nuestra trayectoria y el nivel
          de servicio que brindamos a nuestros clientes.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicadores.map((ind) => (
            <div
              key={ind.label}
              className="rounded-lg border border-background-200 bg-background-100 p-5 text-center"
            >
              <p className="font-heading text-3xl font-semibold text-accent-600">
                {ind.value}
              </p>
              <p className="mt-1 text-xs text-foreground-600">{ind.label}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="etica" index={4} title="Canal de ética">
        <p>
          Si tienes conocimiento de alguna conducta contraria a nuestros
          principios éticos o a la normativa vigente, puedes reportarlo de forma
          confidencial a través de nuestro canal de ética.
        </p>
        <div className="rounded-lg border border-background-200 bg-background-100 p-5">
          <ul className="space-y-3 text-sm text-foreground-700">
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-mail-line"></i>
              </span>
              <a
                href="mailto:etica@novainmobiliaria.com"
                className="font-medium text-primary-700 hover:text-primary-800"
              >
                etica@novainmobiliaria.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-phone-line"></i>
              </span>
              +51 982 945 025 (anexo 2)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-accent-600">
                <i className="ri-shield-user-line"></i>
              </span>
              Garantizamos la reserva de tu identidad y la protección de tus
              datos.
            </li>
          </ul>
        </div>
      </LegalSection>

      <LegalSection id="contacto" index={5} title="Contacto">
        <p>
          Para consultas sobre este portal o sobre la información publicada,
          contáctanos:
        </p>
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
          </ul>
        </div>
      </LegalSection>
    </LegalLayout>
  );
}