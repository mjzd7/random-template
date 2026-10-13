"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Music2, Play, Pause, SkipBack, SkipForward, Volume2, X } from "lucide-react";

const tracks = [
  { src: "/ambient.mp3", title: "Deep House Instrumental", artist: "Kulakovka" },
  { src: "/track2.mp3", title: "Chill House", artist: "Rediskasound" },
  { src: "/track3.mp3", title: "Ambient", artist: "Unknown" },
];

export function MusicToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(tracks[0].src);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const loadTrack = useCallback((index: number) => {
    if (!audioRef.current) return;
    audioRef.current.src = tracks[index].src;
    audioRef.current.load();
    setCurrentTrack(index);
    setProgress(0);
    if (playing) {
      audioRef.current.play().catch(() => {});
    }
  }, [playing]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % tracks.length;
    loadTrack(next);
  };

  const prevTrack = () => {
    const prev = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(prev);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="glass-pill fixed bottom-5 left-5 z-50 flex items-center gap-2 px-3 py-2 rounded-full text-xs hover:opacity-90 transition-opacity bg-background/60 backdrop-blur-md border border-border/40"
      >
        <span className={`w-1.5 h-1.5 rounded-full bg-foreground shrink-0 ${playing ? "opacity-100" : "opacity-20"}`} />
        <Music2 className="w-3 h-3 text-muted-foreground" />
        <span className="font-mono text-muted-foreground text-[11px] max-w-[90px] truncate">
          {playing ? "playing" : "paused"}
        </span>
      </button>
    );
  }

  const track = tracks[currentTrack];

  return (
    <div className="fixed bottom-5 left-5 z-50 w-[280px] rounded-2xl border border-border/40 bg-background/80 backdrop-blur-md p-4 shadow-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-mono text-muted-foreground">
          {currentTrack + 1} / {tracks.length}
        </span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="mb-3">
        <p className="text-sm font-bold text-foreground truncate">{track.title}</p>
        <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
      </div>
      <div className="mb-3">
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-foreground rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Volume2 className="w-3.5 h-3.5 text-muted-foreground" />
        <div className="flex items-center gap-3">
          <button
            onClick={prevTrack}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
          <button
            onClick={nextTrack}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-[10px] font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          hide
        </button>
      </div>
    </div>
  );
}
