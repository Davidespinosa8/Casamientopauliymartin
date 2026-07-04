"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export function PriceModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="button buttonGold" onClick={() => setOpen(true)}>Ver valor de la tarjeta</button>
      <AnimatePresence>
        {open && (
          <motion.div className="modalBackdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div className="modalCard" initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()}>
              <button className="modalClose" aria-label="Cerrar" onClick={() => setOpen(false)}><X size={20} /></button>
              <p className="eyebrow">Valor de la tarjeta</p>
              <h3>Celebramos juntos</h3>
              <div className="priceRow"><span>Adultos</span><strong>$60.000</strong><small>por persona</small></div>
              <div className="priceRow"><span>Niños y niñas de 5 a 12 años</span><strong>$30.000</strong><small>por persona</small></div>
              <div className="priceRow"><span>Menores de 5 años</span><strong>Sin cargo</strong></div>
              <p className="modalNote">Agradecemos confirmar la cantidad de adultos y menores que asistirán.</p>
              <button className="button buttonDark" onClick={() => setOpen(false)}>Entendido</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
