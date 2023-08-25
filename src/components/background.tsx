import BackgroundImg from '../assets/home/background.png';
import React from 'react';
import { Container, ContainerBackground } from '../styled/backgroundStyled';

export const Background = () => {
  return (
    <ContainerBackground>
      <img src={BackgroundImg} alt="background" />
      <Container>
        <h6>New Arrival</h6>
        <h1>Discover Our New Collection</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button>BUY NOW</button>
      </Container>
    </ContainerBackground>
  );
};
