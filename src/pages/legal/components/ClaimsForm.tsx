import { useState, type FormEvent } from "react";

const FORM_URL = "https://readdy.ai/api/form/dahjlebp14a1h3mr6o50";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500";
const labelClass = "text-sm font-medium text-foreground-700";

export default function ClaimsForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = (data.get("company_alt") as string | null)?.trim() ?? "";
    if (honeypot !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    data.delete("company_alt");

    setStatus("loading");
    setFormError("");

    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        if (typeof value === "string") body.append(key, value);
      });

      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      const responseText = await response.text();
      let parsed: {
        code?: string;
        meta?: { message?: string; detail?: string };
        message?: string;
      } | null = null;
      try {
        parsed = responseText ? JSON.parse(responseText) : null;
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.meta?.detail ||
        parsed?.message ||
        responseText;

      if (
        !response.ok ||
        parsed?.code !== "OK" ||
        (serverMsg && serverMsg.toLowerCase().includes("spam"))
      ) {
        setStatus("error");
        setFormError(
          serverMsg && serverMsg.toLowerCase().includes("spam")
            ? "No pudimos registrar tu reclamo. Inténtalo de nuevo."
            : serverMsg || "Ocurrió un error al enviar tu reclamo."
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFormError("Ocurrió un error de conexión. Inténtalo de nuevo.");
    }
  };

  return (
    <form
      id="form-libro-reclamaciones"
      data-readdy-form="Libro de Reclamaciones NOVA Inmobiliaria"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* ===== 1. Datos del consumidor ===== */}
      <fieldset className="space-y-4">
        <legend className="flex items-center gap-2 text-base font-semibold text-foreground-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-background-50">
            1
          </span>
          Identificación del consumidor reclamante
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="lr-nombre" className={labelClass}>
              Nombre completo *
            </label>
            <input id="lr-nombre" name="nombre_completo" required className={inputClass} />
          </div>

          <div className="grid gap-2">
            <label htmlFor="lr-tipo-doc" className={labelClass}>
              Tipo de documento *
            </label>
            <select id="lr-tipo-doc" name="tipo_documento" required className={inputClass}>
              <option value="">Selecciona</option>
              <option value="DNI">DNI</option>
              <option value="Carné de extranjería">Carné de extranjería</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="RUC">RUC</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="lr-num-doc" className={labelClass}>
              Número de documento *
            </label>
            <input id="lr-num-doc" name="numero_documento" required className={inputClass} />
          </div>

          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="lr-domicilio" className={labelClass}>
              Domicilio *
            </label>
            <input id="lr-domicilio" name="domicilio" required className={inputClass} />
          </div>

          <div className="grid gap-2">
            <label htmlFor="lr-telefono" className={labelClass}>
              Teléfono
            </label>
            <input type="tel" id="lr-telefono" name="telefono" className={inputClass} />
          </div>

          <div className="grid gap-2">
            <label htmlFor="lr-email" className={labelClass}>
              Correo electrónico *
            </label>
            <input type="email" id="lr-email" name="email" required className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* ===== 2. Datos del bien ===== */}
      <fieldset className="space-y-4 border-t border-background-200 pt-8">
        <legend className="flex items-center gap-2 px-0 text-base font-semibold text-foreground-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-background-50">
            2
          </span>
          Identificación del bien contratado
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="lr-tipo-bien" className={labelClass}>
              Tipo de bien *
            </label>
            <select id="lr-tipo-bien" name="tipo_bien" required className={inputClass}>
              <option value="">Selecciona</option>
              <option value="Producto">Producto (departamento)</option>
              <option value="Servicio">Servicio</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="lr-monto" className={labelClass}>
              Monto reclamado (S/)
            </label>
            <input id="lr-monto" name="monto_reclamado" inputMode="decimal" className={inputClass} />
          </div>

          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="lr-desc-bien" className={labelClass}>
              Descripción del bien contratado *
            </label>
            <input
              id="lr-desc-bien"
              name="descripcion_bien"
              required
              placeholder="Ej. Departamento tipología B, proyecto Torre Primavera"
              className={inputClass}
            />
          </div>
        </div>
      </fieldset>

      {/* ===== 3. Detalle de la reclamación ===== */}
      <fieldset className="space-y-4 border-t border-background-200 pt-8">
        <legend className="flex items-center gap-2 px-0 text-base font-semibold text-foreground-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-700 text-xs font-semibold text-background-50">
            3
          </span>
          Detalle de la reclamación
        </legend>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-background-300 bg-background-50 p-4 transition-colors hover:border-primary-400 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50">
            <input
              type="radio"
              name="tipo_reclamo"
              value="Reclamo"
              required
              className="mt-1 h-4 w-4 accent-primary-700"
            />
            <span>
              <span className="block text-sm font-semibold text-foreground-800">
                Reclamo
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-foreground-600">
                Disconformidad relacionada con el producto o servicio.
              </span>
            </span>
          </label>

          <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-background-300 bg-background-50 p-4 transition-colors hover:border-primary-400 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50">
            <input
              type="radio"
              name="tipo_reclamo"
              value="Queja"
              required
              className="mt-1 h-4 w-4 accent-primary-700"
            />
            <span>
              <span className="block text-sm font-semibold text-foreground-800">
                Queja
              </span>
              <span className="mt-1 block text-xs leading-relaxed text-foreground-600">
                Malestar respecto a la atención al público.
              </span>
            </span>
          </label>
        </div>

        <div className="grid gap-2">
          <label htmlFor="lr-fecha" className={labelClass}>
            Fecha del incidente
          </label>
          <input type="date" id="lr-fecha" name="fecha_incidente" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="lr-detalle" className={labelClass}>
            Detalle de la reclamación *
          </label>
          <textarea
            id="lr-detalle"
            name="detalle_reclamacion"
            required
            maxLength={500}
            rows={4}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>

        <div className="grid gap-2">
          <label htmlFor="lr-pedido" className={labelClass}>
            Pedido del consumidor *
          </label>
          <textarea
            id="lr-pedido"
            name="pedido_consumidor"
            required
            maxLength={500}
            rows={3}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>
      </fieldset>

      {/* anti-spam honeypot */}
      <div className="honeypot-field">
        <label htmlFor="company_alt">Company</label>
        <input
          type="text"
          id="company_alt"
          name="company_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
        />
      </div>

      <p className="text-xs text-foreground-500">(*) Campos obligatorios</p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-700 px-6 py-3.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800 disabled:opacity-60 sm:w-auto"
      >
        <i className="ri-send-plane-line"></i>
        {status === "loading" ? "Enviando..." : "Registrar reclamo"}
      </button>

      {status === "success" && (
        <p className="rounded-md bg-secondary-100 px-4 py-3 text-sm text-secondary-900">
          ¡Gracias! Tu reclamo fue registrado correctamente. Recibirás una copia
          en tu correo electrónico y te responderemos en un plazo máximo de 30
          días calendario.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-md bg-accent-100 px-4 py-3 text-sm text-accent-900">
          {formError}
        </p>
      )}
    </form>
  );
}