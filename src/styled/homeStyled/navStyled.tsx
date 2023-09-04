import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

interface Props {
  $sideBarActivated: boolean;
}
export const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
`;
export const CustomList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  gap: 3em;
`;
export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  font-family: 'Poppins';

  &:hover {
    border-bottom: 2px solid #b88e2f;
  }
`;
export const IconsNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  cursor: pointer;
`;

// ASIDE

export const Aside = styled.aside`
  box-shadow: 0 0 10px rgba(0, 0, 0, 1.2);
  background: ${colors.white};
  height: 80vh;
  width: 35%;
  border: 1px solid black;
  top: 0;
  right: 0;
  position: fixed;
  padding: 1em;
  color: ${colors.black};
  z-index: 1;
`;
export const Content = styled.div<Props>`
  width: ${(props) => (props.$sideBarActivated ? '85%' : '100%')};
  margin-right: ${(props) => (props.$sideBarActivated ? '15%' : '0%')};
`;
export const AsideContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
