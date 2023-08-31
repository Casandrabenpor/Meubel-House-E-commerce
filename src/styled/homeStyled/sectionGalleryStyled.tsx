import styled from 'styled-components';
import { colors } from '../theme';

export const Subtitle = styled.h2`
  color: ${colors.gray3};

  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 48px */
`;
export const Gallery = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-top: 5%;
`;
export const TitleGallery = styled.h4`
  color: ${colors.gray3};
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;
export const TextGallery = styled.h4`
  color: ${colors.gray4};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
export const RpGallery = styled.h4`
  color: ${colors.gray3};
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;
