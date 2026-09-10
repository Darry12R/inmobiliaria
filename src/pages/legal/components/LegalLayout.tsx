import type { ReactNode } from "react";
import LegalHeader from "./LegalHeader";
import Footer from "@/pages/project/components/Footer";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  heroImage: string;
  icon: string;
  sections: { id: string; label: string }[];
  children: ReactNode;
}

export default function LegalLayout({
  eyebrow,
  title,
  subtitle,
  updatedAt,
  heroImage,
  icon,
  sections,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-background-50">
      <LegalHeader />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/85 via-primary-950/75 to-primary-950/90"></div>
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/50 bg-primary-900/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
            <span className="flex h-4 w-4 items-center justify-center">
              <i className={icon}></i>
            </span>
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-background-50 md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-background-200 md:text-base">
            {subtitle}
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-background-300">
            <span className="flex h-4 w-4 items-center justify-center">
              <i className="ri-calendar-line"></i>
            </span>
            Última actualización: {updatedAt}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground-500">
                Contenido
              </p>
              <nav className="mt-4 border-l border-background-200">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block border-l-2 border-transparent py-2 pl-4 text-sm text-foreground-600 transition-colors hover:border-accent-400 hover:text-primary-700"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 rounded-lg border border-background-200 bg-background-100 p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <i className="ri-customer-service-2-line text-lg"></i>
                </span>
                <p className="mt-3 text-sm font-semibold text-foreground-800">
                  ¿Necesitas ayuda?
                </p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-600">
                  Nuestro equipo está disponible para resolver tus dudas.
                </p>
                <a
                  href="mailto:ventas@novainmobiliaria.com"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-primary-800"
                >
                  <i className="ri-mail-line"></i> Escríbenos
                </a>
              </div>
            </div>
          </aside>

          <div className="space-y-12">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}