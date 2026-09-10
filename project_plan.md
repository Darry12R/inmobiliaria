# Torre Primavera — NOVA Inmobiliaria

## Descripción

Landing page informativa y de captación para el proyecto inmobiliario **Torre Primavera** (departamentos en venta en San Isidro, Lima) de **NOVA Inmobiliaria**. Objetivo: presentar el proyecto, sus áreas comunes, la ubicación, la galería, los planos y captar leads mediante un formulario de cotización.

Además, el portafolio "Proyectos en Venta" enlaza a una **página de detalle por proyecto** (`/proyectos/:slug`) que se abre en **pestaña nueva** (`target="_blank"`) y que es **intencionalmente distinta a la principal**: solo incluye galería grande de fotos + descripción/características + formulario de cotización.

## Estructura de la página

- **Navbar**: logo de marca, enlaces a secciones, teléfono y botón "Cotiza aquí".
- **Hero**: imagen principal del proyecto con overlay, título, precio y CTA.
- **Bienvenida**: descripción del proyecto, amenities y fachada.
- **Recorrido 360º**: iframe de tour virtual (solo en la portada).
- **Ubicación**: mapa con categorías de zonas cercanas (San Isidro) y links de Maps/Waze.
- **Galería**: imágenes de interiores y áreas sociales.
- **Planos**: planos por tipología (1, 2 y 3 dormitorios).
- **Proyectos en Venta / relacionados**: tarjetas filtrables por distrito; cada tarjeta abre su página de detalle.
- **ContactBar**: WhatsApp, correo y teléfono.
- **Footer**: menú, datos de contacto, redes y legales.

## Páginas legales

Tres páginas independientes, con diseño propio coherente con la marca (encabezado simple, hero oscuro e índice lateral), que se abren en **pestaña nueva** desde los enlaces del footer (`target="_blank"`):

- **`/politica-de-privacidad`**: Política de Privacidad (responsable, datos recopilados, finalidad, base legal, cookies, derechos ARCO, seguridad, contacto).
- **`/terminos-y-condiciones`**: Términos y Condiciones (aceptación, objeto, precios y pagos, reservas, propiedad intelectual, ley aplicable, contacto).
- **`/libro-de-reclamaciones`**: Libro de Reclamaciones virtual (Ley N° 29571) con formulario conectado a Form (`dahjlebp14a1h3mr6o50`), honeypot anti-spam y feedback en la misma página.

Componentes compartidos en `src/pages/legal/components/`: `LegalHeader`, `LegalLayout` (hero + índice + contenido + footer), `LegalSection`, `ClaimsForm`.

## Páginas informativas del menú (footer)

Cinco páginas independientes que reutilizan el layout `LegalLayout` (encabezado simple, hero oscuro e índice lateral) y se abren en **pestaña nueva** desde el menú del footer (`target="_blank"`):

- **`/preguntas-frecuentes`**: acordeón interactivo agrupado por temas + datos estructurados `FAQPage` (Schema.org).
- **`/atencion-al-cliente`**: canales de contacto, horarios, postventa y formulario de contacto (Form `dahjnrboh653ivfvo0og`).
- **`/portal-transparencia`**: documentos institucionales, indicadores de gestión y canal de ética.
- **`/se-un-agente-nova`**: beneficios, requisitos, proceso y formulario de postulación (Form `dahjnrboh653ivfvo0p0`).
- **`/portal-de-devoluciones`**: política, casos aplicables, proceso y formulario de solicitud (Form `dahjnrboh653ivfvo0pg`).

Componentes en `src/pages/info/components/`: `FaqAccordion`, `ContactForm`, `AgentForm`, `ReturnsForm`, `formStyles`. Hook compartido `src/hooks/useReaddyForm.ts` para el envío de formularios con honeypot anti-spam.

## Página de detalle por proyecto (distinta a la principal)

- **Galería grande de fotos**: imagen principal + miniaturas seleccionables + visor ampliado.
- **Descripción y características**: relato del proyecto, fachada, especificaciones (dormitorios, áreas, distrito) y áreas comunes.
- **Formulario de cotización**: datos de contacto + formulario compartido (indica el proyecto de origen).
- **Navbar** adaptado (`detail`) con enlaces solo a las secciones existentes; el logo vuelve al inicio.

## Datos

- `src/mocks/project.ts`: constantes base (proyecto Torre Primavera, amenities, planos, galería, distritos y tarjetas de proyectos con `slug`).
- `src/data/projectDetails.ts`: data completa por proyecto (`projectList`) reutilizando la base, con helper `getProjectBySlug`.

## Notas

- Marca: NOVA Inmobiliaria. Distrito: San Isidro (antes San Borja).
- Teléfono de contacto: +51 982 945 025.
- Formulario de cotización conectado a Form (URL de formulario existente), compartido por todos los proyectos.
- Imágenes generadas con alta resolución.

## Meta

- Goal: Construir la landing del proyecto Torre Primavera más las páginas de detalle de cada proyecto en venta con sus secciones y el formulario de cotización.