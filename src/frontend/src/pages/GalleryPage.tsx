import { useState } from 'react';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryLightbox from '../components/gallery/GalleryLightbox';

const galleryImages = [
  { src: '/assets/generated/gallery-01.dim_1200x800.png', alt: 'Audio system installation' },
  { src: '/assets/generated/gallery-02.dim_1200x800.png', alt: 'Backup camera fitting' },
  { src: '/assets/generated/gallery-03.dim_1200x800.png', alt: 'LED lighting upgrade' },
  { src: '/assets/generated/gallery-04.dim_1200x800.png', alt: 'Dashboard accessory installation' },
  { src: '/assets/generated/gallery-05.dim_1200x800.png', alt: 'Speaker system setup' },
  { src: '/assets/generated/gallery-06.dim_1200x800.png', alt: 'Security system installation' },
  { src: '/assets/generated/gallery-07.dim_1200x800.png', alt: 'Sensor fitting work' },
  { src: '/assets/generated/gallery-08.dim_1200x800.png', alt: 'Custom lighting installation' },
];

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent installations. From audio systems to advanced safety features, 
            we take pride in delivering clean, professional results every time.
          </p>
        </div>

        {/* Gallery Grid */}
        <GalleryGrid images={galleryImages} onImageClick={handleImageClick} />

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <GalleryLightbox
            images={galleryImages}
            currentIndex={selectedImageIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </div>
  );
}
