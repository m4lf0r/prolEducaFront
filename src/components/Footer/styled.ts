import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #07075C;
  color: #fff;
  padding: 1.5rem 1rem;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    margin-bottom: 0;
    text-align: left;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #90caf9;
  }
`;
