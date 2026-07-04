"use client";

import { Music2, Pause } from "lucide-react";
import { useRef, useState } from "react";

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else await audioRef.current.play();
    setPlaying(!playing);
  };
  return (
    <>
      <audio ref={audioRef} loop src="/audio/cancion.mp4" />
      <button className="musicButton" aria-label="Reproducir o pausar música" onClick={toggle}>{playing ? <Pause size={19}/> : <Music2 size={19}/>}</button>
    </>
  );
}
