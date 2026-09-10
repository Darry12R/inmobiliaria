import { useReaddyForm } from "@/hooks/useReaddyForm";
import { inputClass, labelClass } from "./formStyles";

const FORM_URL = "https://readdy.ai/api/form/dahjnrboh653ivfvo0pg";

export default function ReturnsForm() {
  const { status, formError, handleSubmit } = useReaddyForm(
    FORM_URL,
    "phone_alt"
  );

  return (
    <form
      id="form-devoluciones"
      data-readdy-form="Formulario de Devoluciones NOVA"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="dv-nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input id="dv-nombre" name="nombre_completo" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dv-documento" className={labelClass}>
            DNI / Documento
          </label>
          <input id="dv-documento" name="documento" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dv-email" className={labelClass}>
            Correo electrónico *
          </label>
          <input type="email" id="dv-email" name="email" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dv-telefono" className={labelClass}>
            Teléfono / WhatsApp *
          </label>
          <input type="tel" id="dv-telefono" name="telefono" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dv-proyecto" className={labelClass}>
            Proyecto adquirido
          </label>
          <input id="dv-proyecto" name="proyecto" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="dv-contrato" className={labelClass}>
            N° de contrato / operación
          </label>
          <input id="dv-contrato" name="numero_contrato" className={inputClass} />
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="dv-motivo" className={labelClass}>
            Motivo de la devolución *
          </label>
          <select id="dv-motivo" name="motivo" required className={inputClass}>
            <option value="">Selecciona</option>
            <option value="Desistimiento de la compra">Desistimiento de la compra</option>
            <option value="Error en la información del proyecto">Error en la información del proyecto</option>
            <option value="Cobro indebido o duplicado">Cobro indebido o duplicado</option>
            <option value="Incumplimiento de condiciones">Incumplimiento de condiciones</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="dv-detalle" className={labelClass}>
            Detalle de tu solicitud *
          </label>
          <textarea
            id="dv-detalle"
            name="detalle"
            required
            maxLength={500}
            rows={4}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>
      </div>

      <div className="honeypot-field">
        <label htmlFor="phone_alt">Phone</label>
        <input
          type="text"
          id="phone_alt"
          name="phone_alt"
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
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {status === "success" && (
        <p className="rounded-md bg-secondary-100 px-4 py-3 text-sm text-secondary-900">
          ¡Gracias! Recibimos tu solicitud de devolución. Nuestro equipo la
          revisará y te responderá dentro de los plazos establecidos.
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