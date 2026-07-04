# Invitación digital — Pauli & Martín

Proyecto mobile-first en Next.js 15, TypeScript y Framer Motion.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Qué reemplazar

- Fotos: `public/images/`
- Música: agregar `public/music.mp3`
- Datos y enlaces: `lib/content.ts`
- Alias/CBU y textos: `app/page.tsx`

## Decisiones de diseño

- La experiencia ocupa toda la pantalla del teléfono.
- En escritorio se muestra centrada con un ancho máximo de 430 px solo para previsualización.
- Las secciones se ordenan como en el video: portada, bienvenida, contador, civil, ceremonia, fiesta, dress code, precio, frases, regalos, álbum, RSVP, galería y cierre.
- El precio vive únicamente dentro de un modal.
- Las animaciones usan `whileInView` de Framer Motion.

## Integraciones pendientes

- Formulario: Firebase, Google Forms, Formspree o WhatsApp.
- Álbum compartido: Google Photos, Drive o Firebase Storage.
- Música: archivo MP3 propio con derechos de uso.
