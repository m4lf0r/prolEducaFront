import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const Subheading = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 1.2rem;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;
