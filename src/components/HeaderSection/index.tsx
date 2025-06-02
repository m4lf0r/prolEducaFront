import React from 'react';
import { HeaderWrapper, Logo, Info, SchoolName, Location, Rating } from './styled';
import LogoImage from '../../assets/SchoolsLogo/souza-leao-logo.png';

const HeaderSection: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={LogoImage} alt="Logo Colégio Souza Leão" />
      </Logo>
      <Info>
        <SchoolName>Colégio Souza Leão - Unidade Cordeiro</SchoolName>
        <Location>R. Gomes Taborda, 677 - Cordeiro, Recife - PE</Location>
        <Rating>⭐ 4.4 - Avaliações dos pais e alunos</Rating>
      </Info>
    </HeaderWrapper>
  );
};

export default HeaderSection;