import React from 'react';
import Bedroom from '../../assets/home/image101.png';
import Dining from '../../assets/home/image106.png';
import Living from '../../assets/home/image100.png';
import {
  Section,
  SectionBedrooms,
  Subtitle,
  Text,
} from '../../styled/homeStyled/sectionOneStyled';

export const SectionOne = () => {
  return (
    <Section>
      <Subtitle>Browse The Range</Subtitle>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      <SectionBedrooms>
        <img src={Dining} alt="Dining" />

        <img src={Living} alt="Living" />
        <img src={Bedroom} alt="Bedroom" />
      </SectionBedrooms>
    </Section>
  );
};
