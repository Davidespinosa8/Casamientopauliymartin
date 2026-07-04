import { CalendarDays, Camera, Gift, Heart, Shirt } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { EventCard } from "@/components/EventCard";
import { FadeIn } from "@/components/FadeIn";
import { MusicButton } from "@/components/MusicButton";
import { PriceModal } from "@/components/PriceModal";
import { RSVPForm } from "@/components/RSVPForm";
import { wedding } from "@/lib/content";
import MusicPlayer from "@/components/MusicPlayer";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <MusicPlayer />
      {/* <MusicButton /> */}

      <section className="hero photoSection" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.82)), url('/images/hero.jpg')" }}>
        <div className="heroContent">
          <FadeIn><p className="heroNames">Pauli <span>&</span> Martín</p></FadeIn>
          <FadeIn delay={0.15}><p className="heroKicker">Nos casamos</p></FadeIn>
          <FadeIn delay={0.3}><p className="heroPhrase">Nuestra historia merece sonar fuerte.</p></FadeIn>
          <a href="#bienvenida" className="scrollCue" aria-label="Bajar a la invitación">⌄</a>
        </div>
      </section>

      <section id="bienvenida" className="paperSection centeredSection">
        <FadeIn><Heart size={28} strokeWidth={1.4} /></FadeIn>
        <FadeIn delay={0.1}><h1>¡Nos casamos!</h1></FadeIn>
        <FadeIn delay={0.2}><p>Y queremos que seas parte de este momento tan importante para nosotros.</p></FadeIn>
      </section>

      <section className="countSection photoSection" style={{ backgroundImage: "linear-gradient(180deg, rgba(5,5,5,.55), rgba(5,5,5,.82)), url('/images/concert.jpg')" }}>
        <FadeIn><p className="eyebrow">Falta muy poco</p><h2>para volvernos parte de la misma canción</h2></FadeIn>
        <Countdown target={wedding.eventDate} />
        <a className="button buttonLight" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamiento+Pauli+y+Martin&dates=20261101T010000Z/20261101T070000Z&details=Celebraci%C3%B3n+de+Pauli+y+Mart%C3%ADn&location=Espa%C3%B1a+75%2C+Jun%C3%ADn" target="_blank" rel="noreferrer"><CalendarDays size={16}/> Agendar recordatorio</a>
      </section>

      <EventCard title="Civil" {...wedding.civil} image="/images/civil.jpg" />
      <EventCard title="Ceremonia religiosa" {...wedding.ceremony} image="/images/church.jpg" />
      <EventCard title="Nuestra celebración" {...wedding.party} image="/images/party.jpg" />

      <section className="darkSection centeredSection">
        <FadeIn><Shirt size={34} strokeWidth={1.4}/><p className="scriptTitle">Dress code</p><h2>Lo que más te guste para poder bailar</h2><p>No buscamos etiquetas ni formalidades. Vení con algo que te haga sentir vos, que te permita cantar, bailar y disfrutar hasta que termine la última canción.</p><blockquote>Vestite para una noche de amor, rock y libertad.</blockquote></FadeIn>
      </section>

      <section className="photoSection priceSection" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.82)), url('/images/couple.jpg')" }}>
        <FadeIn><p className="scriptTitle">Valor de la tarjeta</p><PriceModal /></FadeIn>
      </section>

      <section className="quotesSection darkSection centeredSection">
        <FadeIn><h2>Frases que nos representan</h2></FadeIn>
        {[
          "Que todas las noches sean noches de boda.",
          "Nada como ir juntos a la par",
          "Te miro fijo y me sonreis, no pierdo un dia lejos de ti, mi chance es hoy",
          "Entre acordes y letras de amor siempre te llevaré",
        ].map((quote, index) => <FadeIn key={quote} delay={index * .05}><p className="quote">“{quote}”</p></FadeIn>)}
      </section>

      <section className="paperSection centeredSection">
        <FadeIn><Gift size={34} strokeWidth={1.4}/><p className="scriptTitle">Regalos</p><p>Tu presencia es nuestro mejor regalo, pero si querés hacernos un obsequio, podés hacerlo mediante transferencia bancaria.</p><div className="bankBox"><strong>Alias</strong><span>martin.alcala.1989</span><strong>Titular</strong><span>Juan Martin Alcala Diaz</span><strong>CBU</strong><span>0000003100049615996232</span></div></FadeIn>
      </section>

      <section className="albumSection darkSection centeredSection">
        <FadeIn>
          <Camera size={38} strokeWidth={1.4} />

          <p className="scriptTitle">Álbum compartido</p>

          <p>
            Subí tus fotos y videos del evento para que todos podamos revivir cada
            momento.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1PzkB9HBQg1Rd9GiB25zA3a_DFKl2U8o_"
            target="_blank"
            rel="noopener noreferrer"
            className="button buttonLight"
          >
            Subir fotos
          </a>
        </FadeIn>
      </section>

      <section className="paperSection rsvpSection">
        <FadeIn><p className="scriptTitle">Confirmá tu asistencia</p><p>Nos encantaría contar con tu presencia.</p></FadeIn>
        <FadeIn delay={0.1}><RSVPForm /></FadeIn>
      </section>

      <Gallery />

      <section className="finalSection photoSection" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.86)), url('/images/final.jpg')" }}>
        <FadeIn><p>Gracias por ser parte de nuestra historia, de nuestra música y de esta noche inolvidable.</p><p className="heroNames small">Pauli & Martín</p><Heart size={24} /></FadeIn>
      </section>
    </main>
  );
}
