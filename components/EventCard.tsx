import { MapPin } from "lucide-react";

export function EventCard({ title, date, time, place, address, maps, image }: { title: string; date: string; time: string; place: string; address: string; maps: string; image: string }) {
  return (
    <section className="eventCard" style={{ backgroundImage: `linear-gradient(180deg, rgba(8,8,8,.1), rgba(8,8,8,.82)), url(${image})` }}>
      <div className="eventCardContent">
        <p className="scriptTitle">{title}</p>
        <p>{date}</p>
        <p>{time}</p>
        <h3>{place}</h3>
        <p>{address}</p>
        <a className="button buttonLight" href={maps} target="_blank" rel="noreferrer"><MapPin size={16} /> Cómo llegar</a>
      </div>
    </section>
  );
}
