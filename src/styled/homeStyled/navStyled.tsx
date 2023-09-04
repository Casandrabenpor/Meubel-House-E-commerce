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
  box-shadow: 0px 3px 10px #00000005;
  display: flex;
  flex-direction: column;
  background: ${colors.white};
  height: 100vh;
  width: 10%;
  border: 1px solid black;
  padding: 2em;
  top: 0;
  right: 0;
  overflow-x: hidden;
  position: fixed;
  padding: 1em;
  color: red;
`;
export const Content = styled.div<Props>`
  width: ${(props) => (props.$sideBarActivated ? '85%' : '100%')};
  margin-right: ${(props) => (props.$sideBarActivated ? '15%' : '0%')};
`;
export const ButtonClose = styled.button`
  cursor: pointer;
`;
