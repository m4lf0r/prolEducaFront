import React from 'react';
import {
  LocationWrapper,
  SectionTitle,
  InfoList,
  InfoItem,
  IconWrapper,
  InfoText,
  MapContainer,
} from './styled';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const LocationInfo: React.FC = () => {
  return (
    <LocationWrapper>
      <SectionTitle>Onde fica o Colegio?</SectionTitle>

      <InfoList>
        <InfoItem>
          <IconWrapper>
            <FaMapMarkerAlt />
          </IconWrapper>
          <InfoText>
            Rua Real da Torre, 1150 - Cordeiro, Recife - PE
          </InfoText>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <InfoText>(81) 3228-2311</InfoText>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <InfoText>cordeiro@souzaleao.com</InfoText>
        </InfoItem>
      </InfoList>

      <MapContainer>
        <iframe
          title="Mapa do Colégio Souza Leão - Unidade Cordeiro"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3691770240394!2d-34.93014982417113!3d-8.163125291868522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1913ec03f79b%3A0x3e44421d1d71aee2!2sCol%C3%A9gio%20Souza%20Le%C3%A3o%20-%20Unidade%20Cordeiro!5e0!3m2!1spt-BR!2sbr!4v1716221460739!5m2!1spt-BR!2sbr"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </MapContainer>
    </LocationWrapper>
  );
};

export default LocationInfo;