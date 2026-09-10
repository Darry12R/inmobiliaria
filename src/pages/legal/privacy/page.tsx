import { useEffect } from "react";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

const sections = [
  { id: "introduccion", label: "Introducción" },
  { id: "responsable", label: "Responsable" },
  { id: "datos", label: "Datos que recopilamos" },
  { id: "finalidad", label: "Finalidad" },
  { id: "base-legal", label: "Base legal" },
  { id: "cookies", label: "Cookies" },
  { id: "compartir", label: "Compartir información" },
  { id: "conservacion", label: "Conservación" },
  { id: "derechos", label: "Tus derechos" },
  { id: "seguridad", label: "Seguridad" },
  { id: "cambios", label: "Cambios" },
  { id: "contacto", label: "Contacto" },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title =
      "Política de Privacidad | NOVA Inmobiliaria - Departamentos en Lima";
  }, []);

  return (
    <LegalLayout
      eyebrow="Legal"
      icon="ri-shield-user-line"
      title="Política de Privacidad"
      subtitle="En NOVA Inmobiliaria cuidamos tu información personal. Aquí te explicamos qué datos recopilamos, para qué los usamos y cómo puedes ejercer tus derechos."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Elegant%20abstract%20minimal%20background%20in%20warm%20cream%20and%20deep%20espresso%20brown%20tones%20with%20soft%20geometric%20shapes%20and%20subtle%20paper%20texture%2C%20gentle%20diffused%20light%2C%20calm%20sophisticated%20professional%20editorial%20style%2C%20no%20text%2C%20high%20detail%2C%20harmonious%20composition&width=1600&height=700&seq=legal-privacy-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="introduccion" index={1} title="Introducción">
        <p>
          En <strong>NOVA Inmobiliaria</strong> valoramos y respetamos tu
          privacidad. Esta Política de Privacidad describe cómo recopilamos,
          usamos, almacenamos y protegemos la información personal que nos
          proporcionas cuando navegas por nuestro sitio web, solicitas
          información sobre nuestros proyectos inmobiliarios o completas
          cualquiera de nuestros formularios de contacto.
        </p>
        <p>
          Al utilizar nuestro sitio web y proporcionarnos tus datos, aceptas las
          prácticas descritas en este documento. Si no estás de acuerdo, te
          recomendamos no enviar información personal a través de nuestros
          canales digitales.
        </p>
      </LegalSection>

      <LegalSection id="responsable" index={2} title="Responsable del tratamiento">
        <p>
          El responsable del tratamiento de tus datos personales es{" "}
          <strong>NOVA Inmobiliaria</strong>, con domicilio comercial en Av.
          Conquistadores 1050, San Isidro, Lima, Perú. Puedes contactarnos a
          través del correo{" "}
          <a
            href="mailto:ventas@novainmobiliaria.com"
            className="font-medium text-primary-700 underline decoration-primary-300 underline-offset-2 hover:text-primary-800"
          >
            ventas@novainmobiliaria.com
          </a>{" "}
          o del teléfono +51 982 945 025.
        </p>
      </LegalSection>

      <LegalSection id="datos" index={3} title="Datos que recopilamos">
        <p>
          Los datos personales que podemos recopilar incluyen, de forma
          enunciativa y no limitativa:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>
            <strong>Datos de identificación y contacto:</strong> nombres,
            apellidos, número de documento de identidad, teléfono, correo
            electrónico y dirección.
          </li>
          <li>
            <strong>Datos de tu interés inmobiliario:</strong> proyecto de
            interés, número de dormitorios, tipología y preferencias de
            atención.
          </li>
          <li>
            <strong>Datos de navegación:</strong> dirección IP, tipo de
            dispositivo, navegador, páginas visitadas y tiempo de permanencia.
          </li>
          <li>
            <strong>Comunicaciones:</strong> mensajes y comentarios que nos
            envías a través de formularios, correo o canales de mensajería.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="finalidad" index={4} title="Finalidad del tratamiento">
        <p>Utilizamos tu información personal para las siguientes finalidades:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>Atender tus consultas y brindarte información sobre nuestros proyectos.</li>
          <li>Coordinar visitas a la sala de ventas, cotizaciones y reservas.</li>
          <li>Enviarte comunicaciones comerciales, promociones y novedades, cuando nos hayas dado tu consentimiento.</li>
          <li>Mejorar la experiencia de navegación y la calidad de nuestros servicios.</li>
          <li>Cumplir con obligaciones legales y contractuales aplicables.</li>
        </ul>
      </LegalSection>

      <LegalSection id="base-legal" index={5} title="Base legal">
        <p>
          El tratamiento de tus datos se realiza sobre la base de tu
          consentimiento libre, previo, expreso e informado, así como en el
          interés legítimo de NOVA Inmobiliaria para atender tus solicitudes.
          Cuando corresponda, el tratamiento también se sustenta en el
          cumplimiento de obligaciones legales conforme a la normativa peruana
          de protección de datos personales.
        </p>
      </LegalSection>

      <LegalSection id="cookies" index={6} title="Cookies y tecnologías similares">
        <p>
          Nuestro sitio puede utilizar cookies y tecnologías similares para
          recordar tus preferencias y analizar cómo se utiliza la página. Las
          cookies son pequeños archivos que se almacenan en tu dispositivo y no
          contienen información que te identifique directamente.
        </p>
        <p>
          Puedes configurar tu navegador para rechazar o eliminar las cookies.
          Ten en cuenta que algunas funcionalidades del sitio podrían verse
          afectadas si las desactivas.
        </p>
      </LegalSection>

      <LegalSection id="compartir" index={7} title="Con quién compartimos tu información">
        <p>
          No vendemos ni alquilamos tus datos personales. Podemos compartirlos
          únicamente con:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>Proveedores de servicios que nos ayudan a operar el sitio y gestionar la atención al cliente.</li>
          <li>Entidades vinculadas al desarrollo y comercialización de nuestros proyectos inmobiliarios.</li>
          <li>Autoridades competentes, cuando exista una obligación legal de hacerlo.</li>
        </ul>
      </LegalSection>

      <LegalSection id="conservacion" index={8} title="Plazo de conservación">
        <p>
          Conservaremos tus datos personales únicamente durante el tiempo
          necesario para cumplir con las finalidades descritas y con los plazos
          legales aplicables. Una vez cumplido dicho plazo, los datos serán
          eliminados o anonimizados de forma segura.
        </p>
      </LegalSection>

      <LegalSection id="derechos" index={9} title="Tus derechos">
        <p>
          Como titular de tus datos personales, puedes ejercer los siguientes
          derechos:
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Cancelación:</strong> pedir la eliminación de tus datos cuando ya no sean necesarios.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos para determinadas finalidades.</li>
          <li><strong>Revocación del consentimiento:</strong> retirar tu consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, escríbenos a{" "}
          <a
            href="mailto:ventas@novainmobiliaria.com"
            className="font-medium text-primary-700 underline decoration-primary-300 underline-offset-2 hover:text-primary-800"
          >
            ventas@novainmobiliaria.com
          </a>{" "}
          indicando tu nombre completo, documento de identidad y el derecho que
          deseas ejercer. Atenderemos tu solicitud en los plazos establecidos por
          ley.
        </p>
      </LegalSection>

      <LegalSection id="seguridad" index={10} title="Seguridad de la información">
        <p>
          Implementamos medidas técnicas, organizativas y administrativas
          razonables para proteger tus datos personales contra el acceso no
          autorizado, pérdida, alteración o divulgación. Sin embargo, ningún
          sistema es completamente infalible, por lo que te recomendamos
          cuidar tus credenciales y comunicarte con nosotros ante cualquier
          situación sospechosa.
        </p>
      </LegalSection>

      <LegalSection id="cambios" index={11} title="Cambios en esta política">
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios
          en nuestras prácticas o en la normativa aplicable. Publicaremos la
          versión vigente en esta misma página e indicaremos la fecha de la
          última actualización. Te recomendamos revisarla periódicamente.
        </p>
      </LegalSection>

      <LegalSection id="contacto" index={12} title="Contacto">
        <p>
          Si tienes preguntas sobre esta Política de Privacidad o sobre el
          tratamiento de tus datos personales, contáctanos:
        </p>
        <div className="rounded-lg border border-background-200 bg-background-100 p-5">
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