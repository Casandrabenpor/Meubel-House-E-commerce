import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

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
