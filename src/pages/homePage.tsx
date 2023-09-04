import React from 'react';
import { Nav } from '../components/homeComponents/nav';
import { Background } from '../components/homeComponents/background';
import { SectionOne } from '../components/homeComponents/sectionOne';
import { SectionGallery } from '../components/homeComponents/sectionGallery';
import { AsideCart } from '../components/homeComponents/aside';

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <AsideCart />
      <Background />
      <SectionOne />
      <SectionGallery />
    </>
  );
};

export default HomePage;
