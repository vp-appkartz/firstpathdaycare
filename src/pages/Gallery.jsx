import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/media/DSC06038.jpg',
    '/media/DSC06039.jpg',
    '/media/DSC06042.jpg',
    '/media/DSC06066.jpg',
    '/media/DSC06068.jpg',
    '/media/DSC06070.jpg',
    '/media/DSC06071.jpg',
    '/media/DSC06075.jpg',
    '/media/DSC06080.jpg',
    '/media/DSC06090.jpg',
    '/media/DSC06101.jpg',
    '/media/DSC06109.jpg',
    '/media/DSC06116.jpg',
    '/media/DSC06119.jpg',
    '/media/DSC06124.jpg',
    '/media/DSC06139.jpg',
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Photo Gallery</h1>
          <p>Take a glimpse into the joyful, learning-filled environment at First Path Daycare.</p>
        </div>
      </div>
      
      <div className="container">
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-item" onClick={() => setSelectedImage(idx)}>
              <img src={img} alt={`Gallery ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          
          <button className="lightbox-nav prev" onClick={handlePrev}>
            <ChevronLeft size={48} />
          </button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedImage]} alt={`Gallery enlarged ${selectedImage + 1}`} />
          </div>

          <button className="lightbox-nav next" onClick={handleNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
