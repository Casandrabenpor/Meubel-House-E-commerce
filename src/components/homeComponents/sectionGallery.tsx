import React from 'react';
import {
  Gallery,
  RpGallery,
  Subtitle,
  TextGallery,
  TitleGallery,
} from '../../styled/homeStyled/sectionGalleryStyled';
import Syltherine from '../../assets/home/image1.png';
import Leviosa from '../../assets/home/image2.png';

export const SectionGallery = () => {
  return (
    <div>
      <Subtitle>Our Products</Subtitle>
      <Gallery>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Syltherine</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
        <div>
          <img src={Leviosa} alt="Leviosa" />
          <TitleGallery>Leviosa</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Lolito</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 7.000.000</RpGallery>
        </div>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Respira</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 500.000</RpGallery>
        </div>
      </Gallery>
      <Gallery>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Grifo</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Muggo</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Pingky</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
        <div>
          <img src={Syltherine} alt="Syltherine" />
          <TitleGallery>Potty</TitleGallery>
          <TextGallery>Stylish cafe chair</TextGallery>
          <RpGallery>Rp 2.500.000</RpGallery>
        </div>
      </Gallery>
    </div>
  );
};
