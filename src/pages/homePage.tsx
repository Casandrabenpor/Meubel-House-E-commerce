import React from 'react';
import { Nav } from '../components/homeComponents/nav';
import { Background } from '../components/homeComponents/background';
import { SectionOne } from '../components/homeComponents/sectionOne';
import { SectionGallery } from '../components/homeComponents/sectionGallery';

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <Background />
      <SectionOne />
      <SectionGallery />
    </>
  );
};

export default HomePage;
