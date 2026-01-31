'use client';

import { VideoModal } from '@/components/video-modal';
import { useVideos } from '@/hooks/use-videos';
import { Award, Calendar, ChevronLeft, ChevronRight, DollarSign, MapPin, Play, Star, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { ImageModal } from '@/components/image-modal';


export default function Home() {
  const [activeReel, setActiveReel] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeReelsTab, setActiveReelsTab] = useState<'delivered' | 'bts' | 'reviews' | 'images' | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [modalVideoTitle, setModalVideoTitle] = useState<string>('');
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  
  const { videos } = useVideos();

  // Video samples for each category
  const deliveredReels = [
  { id: 1, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/1.mp4', thumbnail: '/images/er.png', duration: '30s' },
  { id: 2, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/2.mp4', thumbnail: '/images/er.png', duration: '35s' },
  { id: 3, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/3.mp4', thumbnail: '/images/er.png', duration: '40s' },
  { id: 4, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/4.mp4', thumbnail: '/images/er.png', duration: '45s' },
  { id: 5, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/5.mp4', thumbnail: '/images/er.png', duration: '50s' },
  { id: 6, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/6.mp4', thumbnail: '/images/er.png', duration: '30s' },
  { id: 7, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/7.mp4', thumbnail: '/images/er.png', duration: '35s' },
  { id: 8, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/8.mp4', thumbnail: '/images/er.png', duration: '40s' },
  { id: 9, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/9.mp4', thumbnail: '/images/er.png', duration: '45s' },
  { id: 10, title: 'Car Delivery', category: 'Car', videoUrl: '/videos/10.mp4', thumbnail: '/images/er.png', duration: '50s' },
];


const btsReels = [
  { id: 1, title: 'How We Shoot', category: 'Behind the Scenes', videoUrl: '/videos/bts1.mp4', thumbnail: '/images/hws.png', duration: '2m' },
  { id: 2, title: 'How We Shoot', category: 'Behind the Scenes', videoUrl: '/videos/bts2.mp4', thumbnail: '/images/hws.png', duration: '1m 30s' },
];


  const clientReviewReels = [
    { id: 1, title: 'Client Review', category: 'How We Shoot', videoUrl: '/videos/cr1.mp4', thumbnail: '/images/crw.png', duration: '1m' },
    { id: 2, title: 'Client Review', category: 'How We Shoot', videoUrl: '/videos/cr2.mp4', thumbnail: '/images/crw.png', duration: '1m 15s' },
  ];


  const capturedImages = [
  { id: 1, imageUrl: '/images/1.jpg' },
  { id: 2, imageUrl: '/images/2.jpg' },
  { id: 3, imageUrl: '/images/3.jpg' },
  { id: 4, imageUrl: '/images/4.jpg' },
  { id: 5, imageUrl: '/images/5.jpg' },
  { id: 6, imageUrl: '/images/6.jpg' },
  { id: 7, imageUrl: '/images/7.jpg' },
  { id: 9, imageUrl: '/images/9.jpg' },
  { id: 10, imageUrl: '/images/10.jpg' },
  { id: 11, imageUrl: '/images/11.jpg' },
  { id: 12, imageUrl: '/images/12.jpg' },
  { id: 13, imageUrl: '/images/13.jpg' },
  { id: 14, imageUrl: '/images/14.jpg' },
  { id: 15, imageUrl: '/images/15.jpg' },
  { id: 16, imageUrl: '/images/16.jpg' },
];


  const testimonials = [
    {
      name: 'Arjun Singh',
      image: '👨‍💼',
      text: 'SHOOTS captured the essence of my new Ferrari perfectly. The quality is unmatched!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      image: '👩‍💼',
      text: 'Fast turnaround and absolutely cinematic. Highly recommended for all car enthusiasts.',
      rating: 5,
    },
    {
      name: 'Vikram Patel',
      image: '👨‍🎓',
      text: 'Professional, affordable, and delivered in hours. Best reel makers in Karnataka!',
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      image: '👩‍🔬',
      text: 'Incredible attention to detail. My bike never looked so good in video.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Delivery',
      description: 'Get your reels edited and ready in minutes, not days.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Reel Makers',
      description: 'Award-winning videographers with years of automotive expertise.',
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: 'Cinematic Shoots',
      description: 'Professional-grade cinematography for your vehicle showcase.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Affordable Pricing',
      description: 'Premium quality without breaking the bank.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Karnataka Wide',
      description: 'We cover all major cities across Karnataka.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Book at your convenience with flexible time slots.',
    },
  ];

  const reels = [
    {
      id: 1,
      title: 'Ferrari Reel',
      duration: '30s',
    },
    {
      id: 2,
      title: 'Bike Reel',
      duration: '45s',
    },
    {
      id: 3,
      title: 'SUV Reel',
      duration: '1m',
    },
  ];

  const currentVideo = videos[activeReel];

  const openModal = (videoUrl: string, videoTitle: string = '') => {
    setModalVideoUrl(videoUrl);
    setModalVideoTitle(videoTitle);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalVideoUrl(null);
    setModalVideoTitle('');
  };

  const openImageModal = (imageUrl: string) => {
  setActiveImage(imageUrl);
  setImageModalOpen(true);
};

const closeImageModal = () => {
  setActiveImage(null);
  setImageModalOpen(false);
};


  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border">
        {/* Header Container - Controls header height/padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          {/* Logo Container - Fixed height, prevents header resize */}
          <div className="h-12 sm:h-12 md:h-12 flex items-center">
            {/* Logo - Independent size control */}
            <Image
              src="/images/img-4975.png"
              alt="SHOOTS by PRG"
              width={400}
              height={120}
              className="h-70 sm:h-60 md:h-90 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#reels" className="hidden sm:block text-xs sm:text-sm hover:text-accent transition">
              Reels
            </a>
            <a href="#why-us" className="hidden sm:block text-xs sm:text-sm hover:text-accent transition">
              Why Us
            </a>
            <a href="#testimonials" className="hidden md:block text-xs sm:text-sm hover:text-accent transition">
              Reviews
            </a>
          </div>
        </div>
      </nav>

{/* ================= HERO SECTION ================= */}
<section className="relative w-full min-h-screen overflow-hidden bg-black">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <Image
      src="/images/main.png"
      alt="Hero Background"
      fill
      priority
      className="object-contain"
    />
    <div className="absolute inset-0 bg-black/35" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 flex min-h-screen items-center">

    {/* HERO BODY */}
    <div className="px-5">
      <div className="max-w-md text-white font-sans -translate-y-30">

        <h1 className="text-3xl font-extrabold leading-tight">
          Karnataka&apos;s 1st<br />
          Reel Making Crew
        </h1>

        <p className="mt-2 text-sm tracking-wide text-white/80 font-semibold">
          CREATIVE MAGIC IN MINUTES
        </p>

        {/* YELLOW ICON */}
        <Image
          src="/images/instant-icon.png"
          alt="Instant Icon"
          width={110}
          height={110}
          className="mt-0"
          priority
        />

        {/* TAGLINE */}
        <div className="mt-5">
          <p className="text-xl font-bold">Car Deliveries</p>
          <p className="text-lg font-semibold">Shot On iPhone</p>

          <p className="mt-3 text-sm text-white/80">
            Edited & Delivered
          </p>
          <p className="text-sm text-white/80">
            Instantly
          </p>
        </div>

        {/* CTA */}
        <a
          href="#reels"
          className="inline-block mt-6 px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg"
        >
          View Reels
        </a>

      </div>
    </div>

  </div>
</section>
{/* ================= END HERO ================= */}



      {/* Reels Section */}
      <section id="reels" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-balance">
            Opening <span className="text-accent">Reels</span> That Wow
          </h2>

          {activeReelsTab === null ? (
            // 2x2 Grid of Large Category Boxes
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-10">
              {/* Delivered Reels Card */}
              <div
  onClick={() => setActiveReelsTab('delivered')}
  className="relative min-h-40 sm:min-h-64 lg:min-h-80 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 border-border hover:border-accent transition-all duration-300"
>
  <Image
    src="/images/cards/edited-reels.jpg"
    alt="Edited Reels"
    fill
    className="object-cover"
  />

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />

  {/* content */}
  <div className="relative h-full flex flex-col items-center justify-center p-3 sm:p-6 gap-2 text-black">
    <div className="text-2xl sm:text-5xl">🎬</div>
    <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-center">
      EDITED REELS
    </h3>
    <p className="text-xs sm:text-sm lg:text-base text-black/80 text-center">
      Where every delivery feels like a movie
    </p>
    <span className="mt-3 px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide text-black bg-white/90 rounded-full group-hover:scale-105 transition-transform">
    Click to watch
    </span>
  </div>
</div>


              <div
  onClick={() => setActiveReelsTab('bts')}
  className="relative min-h-40 sm:min-h-64 lg:min-h-80 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 border-border hover:border-accent transition-all duration-300"
>
  <Image
    src="/images/cards/how-we-shoot.jpg"
    alt="How We Shoot"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />

  <div className="relative h-full flex flex-col items-center justify-center p-3 sm:p-6 gap-2 text-black">
    <div className="text-2xl sm:text-5xl">🎥</div>
    <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-center">
      HOW WE SHOOT
    </h3>
    <p className="text-xs sm:text-sm lg:text-base text-black/80 text-center">
      Shot live, edited fast, delivered instantly
    </p>
    <span className="mt-3 px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide text-black bg-white/90 rounded-full group-hover:scale-105 transition-transform">
    Click to watch
    </span>
  </div>
</div>


              <div
  onClick={() => setActiveReelsTab('reviews')}
  className="relative min-h-40 sm:min-h-64 lg:min-h-80 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 border-border hover:border-accent transition-all duration-300"
>
  <Image
    src="/images/cards/client-reviews.jpg"
    alt="Client Reviews"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />

  <div className="relative h-full flex flex-col items-center justify-center p-3 sm:p-6 gap-2 text-black">
    <div className="text-2xl sm:text-5xl">⭐</div>
    <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-center">
      CLIENT REVIEWS
    </h3>
    <p className="text-xs sm:text-sm lg:text-base text-black/80 text-center">
      Proof over promises
    </p>
    <span className="mt-3 px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide text-black bg-white/90 rounded-full group-hover:scale-105 transition-transform">
    Click to watch
    </span>
  </div>
</div>


              <div
  onClick={() => setActiveReelsTab('images')}
  className="relative min-h-40 sm:min-h-64 lg:min-h-80 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer border-2 border-border hover:border-accent transition-all duration-300"
>
  <Image
    src="/images/cards/photographs.jpg"
    alt="Photographs"
    fill
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition" />

  <div className="relative h-full flex flex-col items-center justify-center p-3 sm:p-6 gap-2 text-black">
    <div className="text-2xl sm:text-5xl">📸</div>
    <h3 className="text-sm sm:text-2xl lg:text-3xl font-bold text-center">
      PHOTOGRAPHS
    </h3>
    <p className="text-xs sm:text-sm lg:text-base text-black/80 text-center">
      Big quality,small device
    </p>
    <span className="mt-3 px-3 py-1 text-xs sm:text-sm font-extrabold tracking-wide text-black bg-white/90 rounded-full group-hover:scale-105 transition-transform">
    Click to watch
    </span>
  </div>
</div>

            </div>
          ) : (
            // Opened Card Content
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <button
                  onClick={() => setActiveReelsTab(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition font-semibold"
                >
                  ← Back to Categories
                </button>
                
                {/* Navigation Buttons - Top Right */}
                {activeReelsTab === 'delivered' && (
                  <button
                    onClick={() => setActiveReelsTab('bts')}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-opacity-90 transition"
                  >
                    Next: Behind the Scenes →
                  </button>
                )}
                {activeReelsTab === 'bts' && (
                  <button
                    onClick={() => setActiveReelsTab('reviews')}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-opacity-90 transition"
                  >
                    Next: Client Reviews →
                  </button>
                )}
                {activeReelsTab === 'reviews' && (
                  <button
                    onClick={() => setActiveReelsTab('images')}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm hover:bg-opacity-90 transition"
                  >
                    Next: Photographs →
                  </button>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                {activeReelsTab === 'delivered' && '🎬 Delivered Reels'}
                {activeReelsTab === 'bts' && '🎥 Behind the Scenes'}
                {activeReelsTab === 'reviews' && '⭐ Client Reviews'}
                {activeReelsTab === 'images' && '📸 Images Captured'}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {/* Delivered Reels */}
                {activeReelsTab === 'delivered' && deliveredReels.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => openModal(video.videoUrl, video.title)}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="aspect-[9/16] bg-muted flex items-center justify-center relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 lg:p-4 bg-card border-t border-border">
                      <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{video.title}</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                ))}

                {/* Behind the Scenes */}
                {activeReelsTab === 'bts' && btsReels.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => openModal(video.videoUrl, video.title)}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="aspect-[9/16] bg-muted flex items-center justify-center relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 lg:p-4 bg-card border-t border-border">
                      <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{video.title}</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                ))}

                {/* Client Reviews */}
                {activeReelsTab === 'reviews' && clientReviewReels.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => openModal(video.videoUrl, video.title)}
                    className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-accent transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="aspect-[9/16] bg-muted flex items-center justify-center relative overflow-hidden">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent group-hover:scale-125 transition-transform" />
                      </div>
                    </div>
                    <div className="p-2 sm:p-3 lg:p-4 bg-card border-t border-border">
                      <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-0.5 sm:mb-1 truncate">{video.title}</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                ))}

                {/* Images Captured */}
{activeReelsTab === 'images' && capturedImages.map((item) => (
  <div
  key={item.id}
  onClick={() => openImageModal(item.imageUrl)}
  className="relative bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-border overflow-hidden group cursor-pointer hover:border-accent transition-all aspect-square"
>

    <Image
      src={item.imageUrl}
      alt="Captured Photograph"
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all" />
  </div>
))}

              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-10 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">Why Choose SHOOTS?</h3>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg">
            We bring your vehicle's story to life with premium cinematography
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-3 sm:p-5 lg:p-8 hover:border-accent hover:bg-secondary/50 transition-all duration-300 group"
              >
                <div className="text-accent mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6 lg:[&_svg]:w-8 lg:[&_svg]:h-8">
                  {feature.icon}
                </div>
                <h4 className="text-sm sm:text-base lg:text-xl font-bold mb-1 sm:mb-2 lg:mb-3">{feature.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-10 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center">Client Testimonials</h3>
          <p className="text-center text-muted-foreground mb-6 sm:mb-8 lg:mb-12 text-sm sm:text-base lg:text-lg">
            Loved by car and bike enthusiasts across Karnataka
          </p>

          <div className="relative">
            <div className="flex items-stretch gap-3 sm:gap-4 lg:gap-6 overflow-x-auto snap-x pb-4 sm:pb-6 scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] sm:w-80 lg:w-96 bg-card border border-border rounded-lg p-4 sm:p-6 lg:p-8 cursor-pointer snap-center hover:border-accent transition-all"
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
                    <div className="text-3xl sm:text-4xl lg:text-5xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base lg:text-lg">{testimonial.name}</h4>
                      <div className="flex gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic text-xs sm:text-sm lg:text-base leading-relaxed">"{testimonial.text}"</p>
                </div>
              ))}
            </div>

            {/* Navigation arrows - hidden on small screens */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-accent text-accent-foreground p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition z-10 hidden md:block"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-accent text-accent-foreground p-2 sm:p-3 rounded-full hover:bg-opacity-90 transition z-10 hidden md:block"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-accent mb-2 sm:mb-4">SHOOTS by PRG</h4>
              <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                Premium automotive videography. Cinematic reels for your beloved vehicles.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Quick Links</h5>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Our Reels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">Follow Us</h5>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs sm:text-sm">
                <a href="#" className="text-muted-foreground hover:text-accent transition">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition">
                  YouTube
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition">
                  TikTok
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-4 sm:pt-6 lg:pt-8 text-center text-muted-foreground text-xs sm:text-sm">
            <p>SHOOTS by PRG. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={closeModal}
        videoUrl={modalVideoUrl || ''}
        videoTitle={modalVideoTitle}
      />

      <ImageModal
  isOpen={imageModalOpen}
  onClose={closeImageModal}
  imageUrl={activeImage || ''}
/>

    </div>
  );
}
