import { useReaddyForm } from "@/hooks/useReaddyForm";
import { inputClass, labelClass } from "./formStyles";

const FORM_URL = "https://readdy.ai/api/form/dahjnrboh653ivfvo0p0";

export default function AgentForm() {
  const { status, formError, handleSubmit } = useReaddyForm(
    FORM_URL,
    "company_alt"
  );

  return (
    <form
      id="form-agente-nova"
      data-readdy-form="Formulario de Agente NOVA"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="ag-nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input id="ag-nombre" name="nombre_completo" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ag-documento" className={labelClass}>
            DNI / Documento
          </label>
          <input id="ag-documento" name="documento" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ag-ciudad" className={labelClass}>
            Ciudad / Distrito
          </label>
          <input id="ag-ciudad" name="ciudad" className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ag-email" className={labelClass}>
            Correo electrónico *
          </label>
          <input type="email" id="ag-email" name="email" required className={inputClass} />
        </div>

        <div className="grid gap-2">
          <label htmlFor="ag-telefono" className={labelClass}>
            Teléfono / WhatsApp *
          </label>
          <input type="tel" id="ag-telefono" name="telefono" required className={inputClass} />
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="ag-experiencia" className={labelClass}>
            Experiencia en ventas inmobiliarias
          </label>
          <select id="ag-experiencia" name="experiencia" className={inputClass}>
            <option value="">Selecciona</option>
            <option value="Sin experiencia">Sin experiencia</option>
            <option value="Menos de 1 año">Menos de 1 año</option>
            <option value="1 a 3 años">1 a 3 años</option>
            <option value="Más de 4 años">Más de 4 años</option>
          </select>
        </div>

        <div className="grid gap-2 sm:col-span-2">
          <label htmlFor="ag-mensaje" className={labelClass}>
            ¿Por qué quieres ser agente NOVA? *
          </label>
          <textarea
            id="ag-mensaje"
            name="mensaje"
            required
            maxLength={500}
            rows={4}
            className={`${inputClass} resize-none`}
          ></textarea>
        </div>
      </div>

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
        {status === "loading" ? "Enviando..." : "Enviar postulación"}
      </button>

      {status === "success" && (
        <p className="rounded-md bg-secondary-100 px-4 py-3 text-sm text-secondary-900">
          ¡Gracias por tu interés! Recibimos tu postulación y el equipo de NOVA
          se comunicará contigo para continuar el proceso.
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