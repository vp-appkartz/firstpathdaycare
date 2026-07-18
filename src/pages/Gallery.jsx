import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/media/DSC06038-opt.jpg',
    '/media/DSC06039-opt.jpg',
    '/media/DSC06040-opt.jpg',
    '/media/DSC06042-opt.jpg',
    '/media/DSC06047-opt.jpg',
    '/media/DSC06048-opt.jpg',
    '/media/DSC06055-opt.jpg',
    '/media/DSC06056-opt.jpg',
    '/media/DSC06066-opt.jpg',
    '/media/DSC06068-opt.jpg',
    '/media/DSC06070-opt.jpg',
    '/media/DSC06071-opt.jpg',
    '/media/DSC06075-opt.jpg',
    '/media/DSC06079-opt.jpg',
    '/media/DSC06080-opt.jpg',
    '/media/DSC06086-opt.jpg',
    '/media/DSC06090-opt.jpg',
    '/media/DSC06097-opt.jpg',
    '/media/DSC06100-opt.jpg',
    '/media/DSC06101-opt.jpg',
    '/media/DSC06105-opt.jpg',
    '/media/DSC06109-opt.jpg',
    '/media/DSC06116-opt.jpg',
    '/media/DSC06119-opt.jpg',
    '/media/DSC06124-opt.jpg',
    '/media/DSC06131-opt.jpg',
    '/media/DSC06136-opt.jpg',
    '/media/DSC06139-opt.jpg',
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
    <div className="gallery-page animate-up" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Floating Icons */}
      <img src="/media/story_animation_1-1.png" alt="" className="floating-icon delay-1" style={{ position: 'absolute', top: '15%', left: '3%', width: '80px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_2-1.png" alt="" className="floating-icon delay-2" style={{ position: 'absolute', top: '40%', right: '4%', width: '75px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_3-1.png" alt="" className="floating-icon delay-3" style={{ position: 'absolute', bottom: '25%', left: '4%', width: '90px', opacity: 0.35, zIndex: 0 }} />
      <img src="/media/story_animation_4.png" alt="" className="floating-icon delay-4" style={{ position: 'absolute', top: '65%', right: '5%', width: '85px', opacity: 0.35, zIndex: 0 }} />
      
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
