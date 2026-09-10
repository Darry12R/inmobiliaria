import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-lg border border-background-200 bg-background-100"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-foreground-800 md:text-[15px]">
                {item.q}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-background-200 text-foreground-700 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <i className="ri-arrow-down-s-line text-lg"></i>
              </span>
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-sm leading-relaxed text-foreground-600">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}