import { useState, type FormEvent } from "react";

const FORM_URL = "https://readdy.ai/api/form/dagt2k9tto0ceqqni4cg";

type Status = "idle" | "loading" | "success" | "error";

export default function QuoteForm({
  projectName = "TORRE PRIMAVERA",
}: {
  projectName?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = (data.get("website_alt") as string | null)?.trim() ?? "";
    if (honeypot !== "") {
      // Honeypot llenado: simular éxito sin enviar nada.
      setStatus("success");
      form.reset();
      return;
    }

    // Excluir el honeypot vacío del payload.
    data.delete("website_alt");

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
            ? "No pudimos enviar tu solicitud. Inténtalo de nuevo."
            : serverMsg || "Ocurrió un error al enviar tus datos."
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
      id="form-cotizar-proyecto"
      data-readdy-form={`Cotizar Proyecto ${projectName}`}
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      <div className="grid gap-2">
        <label htmlFor="form-bedrooms" className="text-sm font-medium text-foreground-700">
          Nº de dormitorios
        </label>
        <select
          id="form-bedrooms"
          name="form-bedrooms"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        >
          <option value="Dormitorio 1">1 dormitorio</option>
          <option value="Dormitorio 2">2 dormitorios</option>
          <option value="Dormitorio 3">3 dormitorios</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="form-tipology" className="text-sm font-medium text-foreground-700">
          Tipología
        </label>
        <select
          id="form-tipology"
          name="form-tipology"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        >
          <option value="">Seleccionar tipología</option>
          <option value="A">Tipología A</option>
          <option value="B">Tipología B</option>
          <option value="C">Tipología C</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="form_nombre" className="text-sm font-medium text-foreground-700">
          Nombres *
        </label>
        <input
          id="form_nombre"
          name="your-name"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="form_apellidos" className="text-sm font-medium text-foreground-700">
          Apellidos *
        </label>
        <input
          id="form_apellidos"
          name="your-last-name"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="form-email" className="text-sm font-medium text-foreground-700">
          Correo *
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="form_phone" className="text-sm font-medium text-foreground-700">
          Teléfono *
        </label>
        <input
          type="tel"
          maxLength={9}
          id="form_phone"
          name="your-phone"
          required
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="form-type-document" className="text-sm font-medium text-foreground-700">
          Tipo de Documento
        </label>
        <select
          id="form-type-document"
          name="your-type-document"
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        >
          <option value="">Selecciona</option>
          <option value="DNI">DNI</option>
          <option value="CE">CE</option>
          <option value="RUC">RUC</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="form-horario" className="text-sm font-medium text-foreground-700">
          Horario de atención
        </label>
        <select
          id="form-horario"
          name="form-horario"
          className="w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        >
          <option value="">Selecciona</option>
          <option value="De 9.00am a 12.00pm">De 9.00am a 12.00pm</option>
          <option value="De 2.00pm a 7.00pm">De 2.00pm a 7.00pm</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="form_consulta" className="text-sm font-medium text-foreground-700">
          ¿Tienes algún comentario?
        </label>
        <textarea
          id="form_consulta"
          name="your-message"
          maxLength={500}
          rows={3}
          className="w-full resize-none rounded-md border border-background-300 bg-background-50 px-4 py-3 text-sm text-foreground-800 outline-none transition-colors focus:border-primary-500"
        ></textarea>
      </div>

      <input type="hidden" name="your-subject" value="Formulario Cotizar Proyecto" />
      <input type="hidden" name="your-project" value={projectName} />

      {/* anti-spam honeypot */}
      <div className="honeypot-field">
        <label htmlFor="website_alt">Website</label>
        <input
          type="text"
          id="website_alt"
          name="website_alt"
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
        className="mt-1 whitespace-nowrap rounded-md bg-primary-700 px-6 py-3.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <p className="rounded-md bg-secondary-100 px-4 py-3 text-sm text-secondary-900">
          ¡Gracias por comunicarte con nosotros! Un asesor se contactará contigo pronto.
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