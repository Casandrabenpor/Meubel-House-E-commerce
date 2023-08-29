import React from 'react';
import Bedroom from '../../assets/home/image101.png';
import Dining from '../../assets/home/image106.png';
import Living from '../../assets/home/image100.png';

export const SectionOne = () => {
  return (
    <section>
      <h2>Browse The Range</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div>
        <img src={Dining} alt="Dining" />
        <img src={Living} alt="Living" />
        <img src={Bedroom} alt="Bedroom" />
      </div>
    </section>
  );
};
