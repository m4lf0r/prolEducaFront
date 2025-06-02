import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  SocialIcons,
  SocialIcon,
} from './styled';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {new Date().getFullYear()} Prol Educa. Todos os direitos reservados.
        </FooterText>

        <SocialIcons>
          <SocialIcon href="#" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
