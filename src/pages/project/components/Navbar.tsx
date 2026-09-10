import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { project } from "@/mocks/project";

const homeNavLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Bienvenida", href: "#bienvenida" },
  { label: "Recorrido 360º", href: "#recorrido" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Galería", href: "#galeria" },
  { label: "Planos", href: "#planos" },
];

const detailNavLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#bienvenida" },
  { label: "Galería", href: "#galeria" },
  { label: "Cotizar", href: "#cotizar" },
];

const menuItems = [
  { label: "Nosotros", href: "#inicio" },
  { label: "Proyectos en Venta", href: "#proyectos" },
  { label: "Proyectos Finalizados", href: "#proyectos" },
  { label: "Referidos", href: "#cotizar" },
  { label: "Atención al Cliente", href: "#contacto" },
  { label: "Preguntas Frecuentes", href: "#planos" },
  { label: "Blog", href: "#galeria" },
];

export default function Navbar({ detail = false }: { detail?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = detail ? detailNavLinks : homeNavLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background-50/95 backdrop-blur border-b border-background-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2"
            aria-label="NOVA Inmobiliaria"
          >
            <span
              className={`font-heading text-3xl font-semibold tracking-wide ${
                scrolled ? "text-primary-700" : "text-background-50"
              }`}
            >
              NOVA
            </span>
            <span
              className={`hidden text-[11px] uppercase tracking-[0.2em] sm:block ${
                scrolled ? "text-foreground-500" : "text-background-100"
              }`}
            >
              Inmobiliaria
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-foreground-700 hover:text-primary-600"
                    : "text-background-100 hover:text-background-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="tel:+51982945025"
              className={`hidden items-center gap-2 text-sm font-semibold lg:flex ${
                scrolled ? "text-foreground-800" : "text-background-50"
              }`}
            >
              <i className="ri-phone-line text-base"></i>
              {project.phoneDisplay}
            </a>
            <a
              href="#cotizar"
              className={`hidden whitespace-nowrap rounded-md px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-flex ${
                scrolled
                  ? "bg-primary-700 text-background-50 hover:bg-primary-800"
                  : "bg-accent-500 text-background-50 hover:bg-accent-600"
              }`}
            >
              Cotiza aquí
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className={`flex h-10 w-10 items-center justify-center transition-colors ${
                scrolled ? "text-primary-800" : "text-background-50"
              }`}
              aria-label="Abrir menú"
            >
              <i
                className={`${
                  menuOpen ? "ri-close-line" : "ri-menu-2-line"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-primary-950/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-primary-900 text-background-100 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-20 items-center justify-between border-b border-background-800 px-6">
            <p className="font-heading text-2xl font-semibold text-background-50">
              NOVA <span className="text-accent-400">Inmobiliaria</span>
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-background-100 hover:text-accent-400"
              aria-label="Cerrar menú"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
            {menuItems.map((item, idx) =>
              detail ? (
                <Link
                  key={item.label}
                  to={{ pathname: "/", hash: item.href }}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-3"
                >
                  <span className="text-sm text-accent-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl text-background-100 transition-colors group-hover:text-accent-300">
                    {item.label}
                  </span>
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-4 py-3"
                >
                  <span className="text-sm text-accent-400">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-2xl text-background-100 transition-colors group-hover:text-accent-300">
                    {item.label}
                  </span>
                </a>
              )
            )}
          </nav>

          <div className="border-t border-background-800 px-8 py-6 text-sm text-background-300">
            <p>Av. Conquistadores 1050 - San Isidro</p>
            <a
              href={`tel:${project.phone}`}
              className="mt-2 inline-flex items-center gap-2 text-background-100 hover:text-accent-300"
            >
              <i className="ri-phone-line"></i>{project.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}