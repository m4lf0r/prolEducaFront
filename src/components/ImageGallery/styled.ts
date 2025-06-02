import styled from 'styled-components';

export const GalleryWrapper = styled.section`
  display: flex;
  gap: 1rem;
  max-width: 900px;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const LeftImage = styled.img`
  flex: 2;
  border-radius: 12px;
  height: 350px;
  object-fit: cover;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
    max-height: 300px;
  }
`;

export const RightImages = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
  height: 350px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: none;
    height: auto;
  }
`;

export const RightImage = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* Lightbox */

export const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const LightboxContent = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LightboxImage = styled.img`
  width: 95vw;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 12px;
  user-select: none;
`;

export const LightboxClose = styled.button`
  position: fixed;
  top: 20px;
  right: 30px;
  font-size: 2.5rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10000;

  @media (max-width: 480px) {
    font-size: 2rem;
    right: 20px;
  }
`;

export const LightboxArrow = styled.button<{ left?: boolean; right?: boolean }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  ${({ left }) => left && 'left: 30px;'}
  ${({ right }) => right && 'right: 30px;'}
  font-size: 3rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10000;

  @media (max-width: 480px) {
    font-size: 2rem;
    ${({ left }) => left && 'left: 15px;'}
    ${({ right }) => right && 'right: 15px;'}
  }
`;
