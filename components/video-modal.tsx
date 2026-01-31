'use client';

import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  videoTitle: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, videoTitle }: VideoModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', handleEscape);

    // Request fullscreen on CONTAINER (not video)
    setTimeout(() => {
      const container = containerRef.current;
      const video = videoRef.current;

      if (!container || !video) return;

      video.play();

      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen(); // Safari
      }
    }, 100);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen || !videoUrl) return null;

  const handleClose = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    onClose();
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      {/* Back Button – ALWAYS visible */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-[9999] bg-black/70 hover:bg-black/90 text-white rounded-full p-2"
      >
        <X size={24} />
      </button>

      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-full object-contain"
        title={videoTitle}
      />
    </div>
  );
}
