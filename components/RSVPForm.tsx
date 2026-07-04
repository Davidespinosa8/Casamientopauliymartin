"use client";

export function RSVPForm() {
  const phone = "5492364675187";

  const message = encodeURIComponent(
    "Hola Pauli y Martín, quiero confirmar mi asistencia al casamiento."
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="whatsappConfirmation">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappButton"
        aria-label="Confirmar asistencia por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12.04 2a9.84 9.84 0 0 0-8.5 14.78L2 22l5.38-1.5A9.96 9.96 0 1 0 12.04 2Zm0 17.84a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-3.19.89.85-3.11-.19-.31a7.86 7.86 0 1 1 6.85 3.8Zm4.32-5.91c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z"
          />
        </svg>

        <span>Confirmar por WhatsApp</span>
      </a>
    </div>
  );
}