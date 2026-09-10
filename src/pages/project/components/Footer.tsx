import { Link } from "react-router-dom";

const menuLinks = [
  { label: "Preguntas Frecuentes", to: "/preguntas-frecuentes" },
  { label: "Atención al Cliente", to: "/atencion-al-cliente" },
  { label: "Portal Transparencia", to: "/portal-transparencia" },
  { label: "Sé un agente NOVA", to: "/se-un-agente-nova" },
  { label: "Portal de Devoluciones", to: "/portal-de-devoluciones" },
];

const legalLinks = [
  { label: "Política de privacidad", to: "/politica-de-privacidad" },
  { label: "Términos y Condiciones", to: "/terminos-y-condiciones" },
  { label: "Libro de Reclamaciones", to: "/libro-de-reclamaciones" },
];

const social = [
  { icon: "ri-facebook-circle-line", href: "https://www.facebook.com/NOVAInmobiliaria", label: "Facebook" },
  { icon: "ri-instagram-line", href: "https://www.instagram.com/novainmobiliaria/", label: "Instagram" },
  { icon: "ri-youtube-line", href: "https://www.youtube.com/@novainmobiliaria", label: "YouTube" },
  { icon: "ri-tiktok-line", href: "https://www.tiktok.com/@novainmobiliaria", label: "TikTok" },
  { icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/company/novainmobiliaria/", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-background-100">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-3xl font-semibold text-background-50">
              NOVA <span className="text-accent-400">Inmobiliaria</span>
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <h5 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
                  Horario Sala de Ventas
                </h5>
                <p className="mt-2 text-sm">
                  Lunes a Domingo de 10:00 a.m. - 7:00 p.m.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
                  Ubícanos en
                </h5>
                <p className="mt-2 text-sm">
                  Av. Conquistadores 1050 - San Isidro
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Menú
            </h5>
            <ul className="mt-5 space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-background-100 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              ¿Vendes tu terreno?
            </h5>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-accent-400 px-5 py-3 text-sm font-semibold text-accent-300 transition-colors hover:bg-accent-500 hover:text-background-50"
            >
              <i className="ri-price-tag-3-line"></i> Contactar
            </a>
            <div className="mt-8">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-accent-300">
                Síguenos
              </h5>
              <div className="mt-4 flex gap-3">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background-900/40 text-lg text-background-100 transition-colors hover:bg-accent-500"
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background-700 pt-6 text-xs text-background-300">
          <p className="text-center">
            Las fotografías, imágenes y textos no constituyen necesariamente una
            representación exacta de la realidad; fueron diseñados con fines
            ilustrativos y sus características son aproximadas. Los precios
            están sujetos según disponibilidad.
          </p>
          <div className="mt-4 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>NOVA Inmobiliaria · Todos los derechos reservados</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap hover:text-accent-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}