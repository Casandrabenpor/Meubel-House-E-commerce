import React, { useState } from 'react';
import { TopNav } from '../styled/navStyled';
import Logo from '../assets/home/Logo.png';
export const Nav = () => {
  return (
    <TopNav>
      <div>
        <img src={Logo} alt="Logo" width={50} height={50} />
      </div>
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
