import { useReaddyForm } from "@/hooks/useReaddyForm";
import { inputClass, labelClass } from "./formStyles";

const FORM_URL = "https://readdy.ai/api/form/dahjnrboh653ivfvo0og";

export default function ContactForm() {
  const { status, formError, handleSubmit } = useReaddyForm(
    FORM_URL,
    "website_alt"
  );

  return (
    <form
      id="form-atencion-cliente"
      data-readdy-form="Formulario de Atención al Cliente"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="ac-nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input id="ac-nombre" name="nombre_completo" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ac-email" className={labelClass}>
            Correo electrónico *
          </label>
          <input type="email" id="ac-email" name="email" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ac-telefono" className={labelClass}>
            Teléfono / WhatsApp
          </label>
          <input type="tel" id="ac-telefono" name="telefono" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ac-motivo" className={labelClass}>
            Motivo de contacto *
          </label>
          <select id="ac-motivo" name="motivo" required className={inputClass}>
            <option value="">Selecciona</option>
            <option value="Consulta sobre un proyecto">Consulta sobre un proyecto</option>
            <option value="Postventa y entrega">Postventa y entrega</option>
            <option value="Estado de mi compra">Estado de mi compra</option>
            <option value="Financiamiento y pagos">Financiamiento y pagos</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="ac-mensaje" className={labelClass}>
            Cuéntanos tu consulta *
          </label>
          <textarea
            id="ac-mensaje"
            name="mensaje"
            required
            maxLength={500}
            rows={4}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>
      </div>

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
        className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary-700 px-6 py-3.5 text-sm font-semibold text-background-50 transition-colors hover:bg-primary-800 disabled:opacity-60 sm:w-auto"
      >
        <i className="ri-send-plane-line"></i>
        {status === "loading" ? "Enviando..." : "Enviar consulta"}
      </button>

      {status === "success" && (
        <p className="rounded-md bg-secondary-100 px-4 py-3 text-sm text-secondary-900">
          ¡Gracias por escribirnos! Recibimos tu consulta y un asesor se pondrá
          en contacto contigo muy pronto.
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