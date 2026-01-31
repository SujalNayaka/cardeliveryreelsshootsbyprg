'use client';

import { useState, useEffect } from 'react';

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
}

const DEFAULT_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'BMW M4 Cinematic',
    url: 'https://example.com/video1.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=600&fit=crop',
    duration: '0:30',
  },
  {
    id: '2',
    title: 'Royal Enfield Thunder',
    url: 'https://example.com/video2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop',
    duration: '0:45',
  },
  {
    id: '3',
    title: 'Tesla Model S',
    url: 'https://example.com/video3.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1560958089-b8a46dd52956?w=400&h=600&fit=crop',
    duration: '0:35',
  },
  {
    id: '4',
    title: 'Ducati Panigale',
    url: 'https://example.com/video4.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop',
    duration: '0:28',
  },
  {
    id: '5',
    title: 'Porsche 911 GT3',
    url: 'https://example.com/video5.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1578509375653-e39831d48444?w=400&h=600&fit=crop',
    duration: '0:40',
  },
  {
    id: '6',
    title: 'Honda CB350',
    url: 'https://example.com/video6.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1553618405-a0a7907e9de1?w=400&h=600&fit=crop',
    duration: '0:32',
  },
];

export function useVideos() {
  const [videos] = useState<Video[]>(DEFAULT_VIDEOS);
  const [isLoading] = useState(false);

  return { videos, isLoading };
}
