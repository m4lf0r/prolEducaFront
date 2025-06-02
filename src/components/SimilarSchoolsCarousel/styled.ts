import styled from 'styled-components';

export const CarouselWrapper = styled.section`
  margin-top: 3rem;
  position: relative;
  margin-bottom: 2.5rem;

  .slick-list {
    margin: 0 -0.35rem;
  }

  .slick-dots {
    bottom: -30px;

    li button:before {
      color: #bbb;
      font-size: 10px;
    }

    li.slick-active button:before {
      color: #364055;
    }
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #364055;
  margin-bottom: 1.8rem;
  letter-spacing: 0.03em;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgb(54 64 85 / 0.1);
  overflow: hidden;
  margin: 0 0.35rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 280px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgb(54 64 85 / 0.15);
  }

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
  background-color: #f7f9fc;
  padding: 1rem;
`;

export const CardInfo = styled.div`
  padding: 1rem 1.25rem;
`;

export const CardName = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #212b48;
  margin-bottom: 0.4rem;
`;

export const CardLocation = styled.p`
  font-size: 0.9rem;
  color: #7a8194;
  line-height: 1.3;
`;

export const ArrowButtonWrapper = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  top: 40%;
  ${(p) => p.left && 'left: -20px;'}
  ${(p) => p.right && 'right: -20px;'}
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ArrowButton = styled.button`
  background: #fff;
  border: 1px solid #d1d9e6;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgb(54 64 85 / 0.1);
  transition: background-color 0.25s ease, border-color 0.25s ease;

  &:hover {
    background-color: #364055;
    border-color: #364055;

    svg {
      stroke: #fff;
    }
  }

  &::before {
    content: none;
  }
`;
