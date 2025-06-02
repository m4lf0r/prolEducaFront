import React, { useState } from 'react';
import {
  GalleryWrapper,
  LeftImage,
  RightImages,
  RightImage,
  Overlay,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxArrow,
} from './styled';

import img1 from '../../assets/Images/transferir.jpg';
import img2 from '../../assets/Images/transferir2.jpg';
import img3 from '../../assets/Images/transferir3.jpg';
import img4 from '../../assets/Images/transferir4.jpg';
import img5 from '../../assets/Images/transferir5.jpg';
import img6 from '../../assets/Images/transferir6.jpg';
import img7 from '../../assets/Images/transferir7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const ImageGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const leftImage = images[0];
  const rightImages = images.slice(1, 5);
  const extraCount = images.length - 5;

  return (
    <>
      <GalleryWrapper>
        <LeftImage
          src={leftImage}
          alt="Imagem principal"
          onClick={() => openLightbox(0)}
          style={{ cursor: 'pointer' }}
        />
        <RightImages>
          {rightImages.map((img, idx) => {
            const isLast = idx === rightImages.length - 1;
            return (
              <RightImage key={idx} onClick={() => openLightbox(idx + 1)} style={{ cursor: 'pointer' }}>
                <img src={img} alt={`Imagem ${idx + 2}`} />
                {isLast && extraCount > 0 && <Overlay>+{extraCount} Fotos</Overlay>}
              </RightImage>
            );
          })}
        </RightImages>
      </GalleryWrapper>

      {lightboxIndex !== null && (
        <LightboxOverlay onClick={closeLightbox}>
          <LightboxContent onClick={e => e.stopPropagation()}>
            <LightboxClose onClick={closeLightbox}>&times;</LightboxClose>
            <LightboxArrow left onClick={prevImage}>&#10094;</LightboxArrow>
            <LightboxImage src={images[lightboxIndex]} alt={`Imagem ${lightboxIndex + 1}`} />
            <LightboxArrow right onClick={nextImage}>&#10095;</LightboxArrow>
          </LightboxContent>
        </LightboxOverlay>
      )}
    </>
  );
};

export default ImageGallery;
