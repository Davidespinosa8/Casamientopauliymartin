"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.45;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      } finally {
        setIsReady(true);
      }
    };

    attemptAutoplay();

    const playOnFirstInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }

      document.removeEventListener("pointerdown", playOnFirstInteraction);
      document.removeEventListener("touchstart", playOnFirstInteraction);
    };

    document.addEventListener("pointerdown", playOnFirstInteraction, {
      once: true,
    });

    document.addEventListener("touchstart", playOnFirstInteraction, {
      once: true,
    });

    return () => {
      document.removeEventListener("pointerdown", playOnFirstInteraction);
      document.removeEventListener("touchstart", playOnFirstInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="audio/cancion.mp4"
        loop
        preload="auto"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        type="button"
        className={`musicButton ${isPlaying ? "musicButtonPlaying" : ""}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <span className="musicIcon">
          {isPlaying ? "♫" : "♪"}
        </span>

        {!isPlaying && isReady && (
          <span className="musicHint">▶</span>
        )}
      </button>
    </>
  );
}