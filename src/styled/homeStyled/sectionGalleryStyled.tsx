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

export const Card = styled.div`
  cursor: pointer;

  /* &:hover {
    opacity: 0.72;
    background-color: ${colors.gray3};
  } */
`;
export const ButtonCard = styled.button`
  width: 10em;
  height: 3em;
  cursor: pointer;
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
export const Gallery = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  justify-items: center;
  margin-top: 5%;
`;
export const TitleGallery = styled.h4`
  color: ${colors.black};
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
export const ButtonGallery = styled.button`
  color: ${colors.yellow};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  border: 1px solid ${colors.yellow};
  background: #fff;
  margin-left: 45%;
  margin-top: 5%;
  width: 15em;
  height: 5em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.white};
  }
`;
