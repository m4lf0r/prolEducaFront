import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const Logo = styled.div`
  img {
    width: 80px;
    height: auto;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SchoolName = styled.h1`
  font-size: 1.75rem;
  color: #364055;
  margin: 0;
`;

export const Location = styled.p`
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.95rem;
`;

export const Rating = styled.div`
  color: #f57c00;
  font-weight: bold;
  font-size: 0.95rem;
`;
