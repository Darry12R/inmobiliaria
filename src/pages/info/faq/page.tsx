import { useEffect } from "react";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import FaqAccordion, { type FaqItem } from "@/pages/info/components/FaqAccordion";

interface FaqGroup {
  id: string;
  label: string;
  items: FaqItem[];
}

const groups: FaqGroup[] = [
  {
    id: "proyectos",
    label: "Proyectos y precios",
    items: [
      {
        q: "¿En qué distritos de Lima tienen proyectos disponibles?",
        a: "Contamos con proyectos en venta en San Isidro, Cercado de Lima, Chorrillos, Pueblo Libre, Miraflores, San Miguel y Surquillo. Puedes ver cada uno con su precio y tipologías en la sección de Proyectos en Venta.",
      },
      {
        q: "¿Los precios que aparecen en la web son finales?",
        a: "Los precios publicados son referenciales y están sujetos a disponibilidad de stock, tipología y fecha de compra. Para una cotización exacta te recomendamos solicitar una visita a la sala de ventas o completar el formulario de cotización.",
      },
      {
        q: "¿Qué tipologías de departamentos ofrecen?",
        a: "La mayoría de nuestros proyectos ofrecen departamentos de 1, 2 y 3 dormitorios, con áreas que van desde los 39 m² hasta los 118 m² según el proyecto y la tipología elegida.",
      },
    ],
  },
  {
    id: "financiamiento",
    label: "Financiamiento y pagos",
    items: [
      {
        q: "¿Qué formas de pago aceptan?",
        a: "Puedes pagar al contado o con financiamiento directo. Trabajamos con distintas alternativas de financiamiento bancario y crédito hipotecario. Un asesor te ayudará a elegir la opción que mejor se adapte a ti.",
      },
      {
        q: "¿Cuál es la cuota inicial?",
        a: "La cuota inicial varía según el proyecto y la modalidad de financiamiento, y suele calcularse como un porcentaje del valor del departamento. Te brindamos el detalle exacto durante la asesoría personalizada.",
      },
      {
        q: "¿Puedo usar mi fondo del AFP o CTS?",
        a: "Sí. Muchos compradores utilizan su fondo de AFP, CTS o bonos del Estado como parte de la cuota inicial. Te orientamos sobre los requisitos y documentos necesarios.",
      },
    ],
  },
  {
    id: "reservas",
    label: "Reservas y separación",
    items: [
      {
        q: "¿Cómo puedo separar un departamento?",
        a: "Para separar tu departamento debes firmar la solicitud de separación y realizar el pago del monto correspondiente. El monto y la vigencia de la separación se detallan en la sala de ventas según el proyecto.",
      },
      {
        q: "¿La separación es reembolsable?",
        a: "Las condiciones de la separación se rigen por el documento firmado al momento de la reserva. Te recomendamos leerlas con atención; para casos excepcionales puedes revisar nuestro Portal de Devoluciones.",
      },
    ],
  },
  {
    id: "entrega",
    label: "Entrega y postventa",
    items: [
      {
        q: "¿Cuándo se entregan los departamentos?",
        a: "Cada proyecto tiene una fecha estimada de entrega, indicada como \"Entrega Inmediata\" cuando ya está listo o con fechas proyectadas cuando está en preventa. Consulta la ficha de cada proyecto para más detalle.",
      },
      {
        q: "¿Ofrecen servicio de postventa?",
        a: "Sí. Contamos con un equipo de postventa que te acompaña después de la entrega para atender consultas sobre acabados, documentación y cualquier incidencia relacionada con tu departamento.",
      },
      {
        q: "¿Puedo hacer modificaciones a mi departamento?",
        a: "Algunos proyectos permiten personalizaciones según la etapa de obra. Consulta con tu asesor qué opciones están disponibles para la tipología que elegiste.",
      },
    ],
  },
  {
    id: "visitas",
    label: "Visitas y sala de ventas",
    items: [
      {
        q: "¿Dónde está la sala de ventas y cuál es el horario?",
        a: "Nuestra sala de ventas está en Av. Conquistadores 1050, San Isidro, y atiende de lunes a domingo de 10:00 a.m. a 7:00 p.m. (reserva disponible también en inglés).",
      },
      {
        q: "¿Necesito agendar una cita para visitar?",
        a: "No es obligatorio, pero agendar tu visita nos permite atenderte con un asesor dedicado y sin esperas. Puedes coordinar escribiéndonos por WhatsApp o completando el formulario de cotización.",
      },
    ],
  },
];

const sections = groups.map((g) => ({ id: g.id, label: g.label }));

export default function FaqPage() {
  useEffect(() => {
    document.title =
      "Preguntas Frecuentes | NOVA Inmobiliaria - Departamentos en Lima";

    const faqs = groups.flatMap((g) => g.items);
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LegalLayout
      eyebrow="Centro de ayuda"
      icon="ri-question-line"
      title="Preguntas Frecuentes"
      subtitle="Reunimos las dudas más comunes sobre nuestros proyectos, precios, financiamiento, reservas y postventa para que tomes la mejor decisión."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Warm%20abstract%20minimal%20background%20in%20cream%20ivory%20and%20rich%20caramel%20brown%20tones%2C%20soft%20layered%20paper%20texture%20and%20gentle%20golden%20light%2C%20elegant%20calm%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail%2C%20smooth%20harmonious%20composition&width=1600&height=700&seq=info-faq-hero-01&orientation=landscape"
      sections={sections}
    >
      {groups.map((group, idx) => (
        <section key={group.id} id={group.id} className="scroll-mt-28">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
              {group.label}
            </h2>
          </div>
          <div className="mt-4 md:pl-12">
            <FaqAccordion items={group.items} />
          </div>
        </section>
      ))}
    </LegalLayout>
  );
}