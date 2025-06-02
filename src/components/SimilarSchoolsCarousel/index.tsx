import Slider from 'react-slick';
import type { CustomArrowProps } from 'react-slick';

import {
  CarouselWrapper,
  SectionTitle,
  Card,
  CardImage,
  CardInfo,
  CardName,
  CardLocation,
  ArrowButtonWrapper,
  ArrowButton,
} from './styled';

import souzaLeaoLogo from '../../assets/SchoolsLogo/souza-leao-logo.png';

const schools = [
  {
    name: 'Colégio Boa Esperança',
    location: 'Boa Viagem, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Escola Nova Geração',
    location: 'Casa Forte, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Centro Educacional Recife',
    location: 'Imbiribeira, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Instituto Saber Viver',
    location: 'Graças, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Instituto Bom Futuro',
    location: 'Graças, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Centro Educacional Viver',
    location: 'Graças, Recife - PE',
    image: souzaLeaoLogo,
  },
  {
    name: 'Escola Viver',
    location: 'Graças, Recife - PE',
    image: souzaLeaoLogo,
  },
];

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <ArrowButtonWrapper right>
    <ArrowButton onClick={onClick}>
      <svg width="24" height="24" fill="none" stroke="#364055" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </ArrowButton>
  </ArrowButtonWrapper>
);

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <ArrowButtonWrapper left>
    <ArrowButton onClick={onClick}>
      <svg width="24" height="24" fill="none" stroke="#364055" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </ArrowButton>
  </ArrowButtonWrapper>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const SimilarSchoolsCarousel = () => {
  return (
    <CarouselWrapper>
      <SectionTitle>Escolas semelhantes</SectionTitle>
      <Slider {...settings}>
        {schools.map((school, index) => (
          <Card key={index}>
            <CardImage src={school.image} alt={school.name} />
            <CardInfo>
              <CardName>{school.name}</CardName>
              <CardLocation>{school.location}</CardLocation>
            </CardInfo>
          </Card>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default SimilarSchoolsCarousel;
