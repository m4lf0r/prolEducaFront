import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #364055;
  margin-bottom: 1rem;
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color:rgb(76, 86, 106);
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.5rem;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;
