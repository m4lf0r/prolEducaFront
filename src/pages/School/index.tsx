import React from 'react';
import { PageContainer } from './styled';

import GlobalStyle from '../../styles/GlobalStyle';
import Navbar from '../../components/Navbar';

import HeaderSection from '../../components/HeaderSection';
import ImageGallery from '../../components/ImageGallery';
import AboutSection from '../../components/AboutSection';
import Accordion from '../../components/Accordion';
import LocationInfo from '../../components/LocationInfo';
import ContactForm from '../../components/ContactForm';
import SimilarSchoolsCarousel from '../../components/SimilarSchoolsCarousel';

import Footer from '../../components/Footer';

const SchoolPage = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <PageContainer>
        <HeaderSection />
        <ImageGallery />
        <AboutSection />
        <Accordion />
        <LocationInfo />
        <ContactForm />
        <SimilarSchoolsCarousel />
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default SchoolPage;
