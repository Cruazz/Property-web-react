import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = 'auto';
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % images.length);
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className={`cursor-pointer overflow-hidden rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-secondary/20 transition-all duration-500 group ${
              i === 0 && images.length > 1 ? 'md:col-span-2 md:row-span-1' : ''
            }`}
            onClick={() => openLightbox(i)}
          >
            <img
              src={img}
              alt={`Gallery Image ${i + 1}`}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700 select-none"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center animate-fade-in select-none"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-secondary bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300 z-50"
            onClick={closeLightbox}
          >
            <X size={28} />
          </button>
          
          <button
            className="absolute left-6 text-white hover:text-secondary bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-50"
            onClick={prevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={images[activeIndex]}
            alt={`Gallery view ${activeIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain select-none animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-6 text-white hover:text-secondary bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 z-50"
            onClick={nextImage}
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 text-white font-sans font-light tracking-wide text-sm bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};
