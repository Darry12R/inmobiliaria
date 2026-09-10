import type { ReactNode } from "react";

export default function LegalSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index?: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-3">
        {typeof index === "number" && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-700">
            {String(index).padStart(2, "0")}
          </span>
        )}
        <h2 className="font-heading text-2xl font-semibold text-foreground-900 md:text-[28px]">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground-700 md:pl-12 md:text-[15px]">
        {children}
      </div>
    </section>
  );
}