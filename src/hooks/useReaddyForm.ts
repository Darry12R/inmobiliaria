import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface UseReaddyFormResult {
  status: Status;
  formError: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * Reusable submit handler for Readdy built-in forms.
 * Sends application/x-www-form-urlencoded data from the real form element
 * (so browser autofill values are included) and hides a honeypot field.
 */
export function useReaddyForm(
  formUrl: string,
  honeypotName: string
): UseReaddyFormResult {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = (data.get(honeypotName) as string | null)?.trim() ?? "";
    if (honeypot !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    data.delete(honeypotName);
    setStatus("loading");
    setFormError("");

    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => {
        if (typeof value === "string") body.append(key, value);
      });

      const response = await fetch(formUrl, {
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
            ? "No pudimos enviar tu solicitud. Inténtalo de nuevo."
            : serverMsg || "Ocurrió un error al enviar el formulario."
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

  return { status, formError, handleSubmit };
}