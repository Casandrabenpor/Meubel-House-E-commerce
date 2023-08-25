import React, { useState } from 'react';
import { TopNav } from '../styled/navStyled';
export const Nav = () => {
  return (
    <TopNav>
      <h3>Meubel House</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </TopNav>
  );
};
