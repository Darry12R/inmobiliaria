import { useEffect } from "react";
import LegalLayout from "../components/LegalLayout";
import LegalSection from "../components/LegalSection";

const sections = [
  { id: "aceptacion", label: "Aceptación" },
  { id: "objeto", label: "Objeto" },
  { id: "capacidad", label: "Capacidad legal" },
  { id: "informacion", label: "Información de proyectos" },
  { id: "precios", label: "Precios y pagos" },
  { id: "reservas", label: "Reservas y separaciones" },
  { id: "propiedad", label: "Propiedad intelectual" },
  { id: "uso-sitio", label: "Uso del sitio web" },
  { id: "responsabilidad", label: "Limitación de responsabilidad" },
  { id: "modificaciones", label: "Modificaciones" },
  { id: "ley", label: "Ley aplicable" },
  { id: "contacto", label: "Contacto" },
];

export default function TermsPage() {
  useEffect(() => {
    document.title =
      "Términos y Condiciones | NOVA Inmobiliaria - Departamentos en Lima";
  }, []);

  return (
    <LegalLayout
      eyebrow="Legal"
      icon="ri-file-list-3-line"
      title="Términos y Condiciones"
      subtitle="Estos términos regulan el acceso y uso del sitio web de NOVA Inmobiliaria, así como la información que ofrecemos sobre nuestros proyectos inmobiliarios."
      updatedAt="10 de setiembre de 2026"
      heroImage="https://readdy.ai/api/search-image?query=Refined%20abstract%20background%20with%20soft%20sand%20beige%20and%20copper%20terracotta%20gradient%2C%20smooth%20flowing%20curves%20and%20delicate%20light%20shadows%2C%20warm%20minimal%20luxury%20editorial%20aesthetic%2C%20no%20text%2C%20high%20detail%2C%20balanced%20composition&width=1600&height=700&seq=legal-terms-hero-01&orientation=landscape"
      sections={sections}
    >
      <LegalSection id="aceptacion" index={1} title="Aceptación de los términos">
        <p>
          El acceso y uso del sitio web de <strong>NOVA Inmobiliaria</strong>{" "}
          implica la aceptación plena y sin reservas de los presentes Términos y
          Condiciones. Si no estás de acuerdo con ellos, te pedimos abstenerte de
          utilizar el sitio.
        </p>
        <p>
          Estos términos se aplican a todas las personas que visitan, navegan o
          interactúan con nuestro sitio y con los canales digitales de atención
          asociados.
        </p>
      </LegalSection>

      <LegalSection id="objeto" index={2} title="Objeto">
        <p>
          El sitio web tiene por objeto brindar información sobre los proyectos
          inmobiliarios que desarrolla y comercializa NOVA Inmobiliaria, así como
          facilitar el contacto con potenciales clientes interesados en adquirir
          un departamento u obtener mayor información.
        </p>
        <p>
          La información publicada es de carácter referencial e ilustrativo y no
          constituye una oferta vinculante, salvo que se indique expresamente lo
          contrario en un documento contractual suscrito entre las partes.
        </p>
      </LegalSection>

      <LegalSection id="capacidad" index={3} title="Capacidad legal">
        <p>
          Para realizar consultas, solicitar cotizaciones o celebrar actos
          relacionados con la compra de un inmueble, debes contar con capacidad
          legal para contratar conforme a la legislación peruana. Si actúas en
          representación de otra persona, deberás contar con las facultades
          suficientes para ello.
        </p>
      </LegalSection>

      <LegalSection id="informacion" index={4} title="Información de los proyectos">
        <p>
          Las imágenes, renders, planos, metrajes, acabados, precios y demás
          características mostradas en el sitio son referenciales y pueden
          variar respecto al producto final. Las fotografías de ambientes y
          áreas comunes son ilustrativas y no constituyen una representación
          exacta de la realidad.
        </p>
        <p>
          Las características definitivas del inmueble, así como las condiciones
          de compra, se establecerán en el contrato de compraventa y en la
          documentación correspondiente.
        </p>
      </LegalSection>

      <LegalSection id="precios" index={5} title="Precios y formas de pago">
        <p>
          Los precios, descuentos y promociones publicados están sujetos a
          disponibilidad, variación y vigencia. NOVA Inmobiliaria se reserva el
          derecho de actualizarlos sin previo aviso.
        </p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>Los precios pueden estar expresados en soles o dólares según se indique.</li>
          <li>Las formas de pago pueden incluir cuota inicial, financiamiento directo o crédito hipotecario.</li>
          <li>La aprobación de un crédito depende de la entidad financiera correspondiente.</li>
        </ul>
      </LegalSection>

      <LegalSection id="reservas" index={6} title="Reservas y separaciones">
        <p>
          La reserva o separación de un inmueble se formaliza mediante el
          documento o contrato que NOVA Inmobiliaria establezca para tal fin. El
          monto de la separación, las condiciones y la vigencia serán los
          indicados en dicho documento.
        </p>
        <p>
          La reserva no otorga derecho de propiedad sobre el inmueble hasta que
          se suscriba el contrato definitivo y se cumplan las condiciones
          pactadas.
        </p>
      </LegalSection>

      <LegalSection id="propiedad" index={7} title="Propiedad intelectual">
        <p>
          Todos los contenidos del sitio web, incluyendo textos, imágenes,
          logotipos, diseños, planos, marcas y demás elementos, son propiedad de
          NOVA Inmobiliaria o de terceros que han autorizado su uso. Queda
          prohibida su reproducción, distribución o uso sin autorización previa
          y por escrito.
        </p>
      </LegalSection>

      <LegalSection id="uso-sitio" index={8} title="Uso del sitio web">
        <p>Al utilizar nuestro sitio, te comprometes a:</p>
        <ul className="list-disc space-y-2 pl-5 marker:text-accent-500">
          <li>Proporcionar información veraz, completa y actualizada.</li>
          <li>No realizar actividades ilícitas, fraudulentas o que afecten el funcionamiento del sitio.</li>
          <li>No intentar acceder de forma no autorizada a sistemas, datos o áreas restringidas.</li>
          <li>No difundir contenido que vulnere derechos de terceros.</li>
        </ul>
      </LegalSection>

      <LegalSection id="responsabilidad" index={9} title="Limitación de responsabilidad">
        <p>
          NOVA Inmobiliaria no será responsable por daños o perjuicios derivados
          del uso del sitio, de la imposibilidad de acceder a él, de fallas
          técnicas, ni por decisiones tomadas a partir de la información
          publicada, la cual es de carácter referencial.
        </p>
        <p>
          El sitio puede contener enlaces a páginas de terceros, cuyo contenido y
          políticas son ajenos a NOVA Inmobiliaria y no son de nuestra
          responsabilidad.
        </p>
      </LegalSection>

      <LegalSection id="modificaciones" index={10} title="Modificaciones">
        <p>
          Nos reservamos el derecho de modificar, actualizar o eliminar el
          contenido del sitio y estos Términos y Condiciones en cualquier
          momento. La versión vigente será la publicada en esta página con su
          respectiva fecha de actualización.
        </p>
      </LegalSection>

      <LegalSection id="ley" index={11} title="Ley aplicable y jurisdicción">
        <p>
          Los presentes Términos y Condiciones se rigen por la legislación de la
          República del Perú. Cualquier controversia derivada de su
          interpretación o aplicación será sometida a la jurisdicción de los
          jueces y tribunales competentes de Lima, sin perjuicio de los derechos
          que la ley reconoce al consumidor.
        </p>
      </LegalSection>

      <LegalSection id="contacto" index={12} title="Contacto">
        <p>
          Para cualquier consulta relacionada con estos Términos y Condiciones,
          puedes comunicarte con nosotros:
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