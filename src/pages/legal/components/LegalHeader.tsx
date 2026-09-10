import { Link } from "react-router-dom";

export default function LegalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-background-200 bg-background-50/95 backdrop-blur">
      <div className="mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2"
          aria-label="NOVA Inmobiliaria"
        >
          <span className="font-heading text-3xl font-semibold tracking-wide text-primary-700">
            NOVA
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-foreground-500 sm:block">
            Inmobiliaria
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <Link
            to="/"
            className="hidden items-center gap-2 text-sm font-medium text-foreground-700 transition-colors hover:text-primary-600 sm:flex"
          >
            <i className="ri-arrow-left-line"></i> Volver al inicio
          </Link>
          <Link
            to={{ pathname: "/", hash: "#cotizar" }}
            className="whitespace-nowrap rounded-md bg-primary-700 px-5 py-2.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800"
          >
            Cotiza aquí
          </Link>
        </div>
      </div>
    </header>
  );
}