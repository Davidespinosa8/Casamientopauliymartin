"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const modal =
    selectedIndex !== null ? (
      <div
        className="galleryModalBackdrop"
        role="dialog"
        aria-modal="true"
        aria-label="Imagen ampliada"
        onClick={closeModal}
      >
        <button
          type="button"
          className="galleryModalClose"
          onClick={closeModal}
          aria-label="Cerrar imagen"
        >
          ×
        </button>

        <div
          className="galleryModalContent"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            src={images[selectedIndex]}
            alt={`Foto ${selectedIndex + 1} de Pauli y Martín`}
            className="galleryModalImage"
          />
        </div>

        <button
          type="button"
          className="galleryModalArrow galleryModalArrowLeft"
          onClick={(event) => {
            event.stopPropagation();
            showPrevious();
          }}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <button
          type="button"
          className="galleryModalArrow galleryModalArrowRight"
          onClick={(event) => {
            event.stopPropagation();
            showNext();
          }}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

        <span className="galleryModalCounter">
          {selectedIndex + 1} / {images.length}
        </span>
      </div>
    ) : null;

  return (
    <>
      <section className="gallerySection" aria-label="Galería de fotos">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`galleryItem galleryItem${index + 1}`}
            style={{ backgroundImage: `url("${image}")` }}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Abrir foto ${index + 1}`}
          />
        ))}
      </section>

      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}