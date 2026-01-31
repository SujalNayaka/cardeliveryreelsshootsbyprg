'use client';

import React from "react";

import {
  Pause,
  Play,
  SkipBack,
  SkipForward
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface VideoSample {
  id: number;
  title: string;
  category: string;
  videoUrl: string;
}

// Videos should be placed in public/videos folder
const videoSamples: VideoSample[] = [
  { id: 1, title: 'Ferrari Launch', category: 'Car', videoUrl: '/videos/reel1.mp4' },
  { id: 2, title: 'Ducati Reveal', category: 'Bike', videoUrl: '/videos/reel2.mp4' },
  { id: 3, title: 'BMW Opening', category: 'Car', videoUrl: '/videos/reel3.mp4' },
  { id: 4, title: 'KTM Unbox', category: 'Bike', videoUrl: '/videos/reel4.mp4' },
];

export function PhoneMockup() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setProgress(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) videoRef.current?.pause();
    else videoRef.current?.play();
  };

  const playNextVideo = () => {
    setCurrentVideo((p) => (p + 1) % videoSamples.length);
    setProgress(0);
  };

  const playPrevVideo = () => {
    setCurrentVideo((p) => (p - 1 + videoSamples.length) % videoSamples.length);
    setProgress(0);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setProgress(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => playNextVideo();

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [currentVideo, volume]);

  return (
    <div className="relative phone-mockup transition-all duration-500 group hover:scale-105 lg:hover:rotate-2">
      <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 h-[400px] sm:h-[470px] md:h-[540px] lg:h-[600px] bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl shadow-black/50">
        <div className="w-full h-full bg-black rounded-[1.75rem] sm:rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute inset-1.5 sm:inset-2 rounded-[1.5rem] sm:rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden bg-secondary">
            <video
              ref={videoRef}
              key={videoSamples[currentVideo].id}
              src={videoSamples[currentVideo].videoUrl}
              className="w-full h-full object-cover"
              playsInline
              onClick={togglePlayPause}
            />

            {/* Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 pt-1 bg-gradient-to-t from-black/80 to-transparent opacity-100">
              {/* Seek Bar */}
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-white text-[8px] sm:text-[10px] font-mono">
                  {formatTime(progress)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={progress}
                  onChange={handleProgressChange}
                  className="w-full h-0.5 sm:h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <span className="text-white text-[8px] sm:text-[10px] font-mono">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Main Controls */}
              <div className="flex items-center justify-center mt-1 sm:mt-2">
                {/* Playback */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button
                    onClick={playPrevVideo}
                    className="text-white hover:text-accent transition-colors"
                  >
                    <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                  <button
                    onClick={togglePlayPause}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={playNextVideo}
                    className="text-white hover:text-accent transition-colors"
                  >
                    <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Overlay Title */}
            <div
              className={`absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="text-center text-white px-2">
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                  {videoSamples[currentVideo].title}
                </h3>
                <p className="text-xs sm:text-sm text-accent">
                  {videoSamples[currentVideo].category}
                </p>
              </div>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-32 h-4 sm:h-5 lg:h-6 bg-black rounded-b-xl sm:rounded-b-2xl" />
          {/* Home indicator */}
          <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-32 h-0.5 sm:h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      {/* Video Indicators */}
      <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
        {videoSamples.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideo(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
              index === currentVideo ? 'bg-accent' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
