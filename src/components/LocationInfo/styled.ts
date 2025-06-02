import styled from 'styled-components';

export const LocationWrapper = styled.section`
  margin-top: 2.5rem;
  padding: 1.5rem;
  background-color: #f5f7fa;
  border-radius: 10px;
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: color: #364055;
  margin-bottom: 1rem;
`;

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.span`
  font-size: 1rem;
  color: color: #364055;
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
`;

export const InfoText = styled.span`
  font-size: 0.95rem;
  color: #333;
`;

export const MapContainer = styled.div`
  margin-top: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);

  iframe {
    width: 100%;
    height: 200px;
    border: none;
  }
`;
