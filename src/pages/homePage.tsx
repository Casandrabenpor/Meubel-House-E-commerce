import React from 'react';
import { Nav } from '../components/homeComponents/nav';
import { Background } from '../components/homeComponents/background';
import { SectionOne } from '../components/homeComponents/sectionOne';

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <Background />
      <SectionOne />
    </>
  );
};

export default HomePage;
