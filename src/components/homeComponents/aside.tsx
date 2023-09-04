import React from 'react';
import { Aside } from '../../styled/homeStyled/navStyled';
import { useTypedSelector } from '../../app/store';

export const AsideCart = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);

  return sideBarActivated ? (
    <Aside>
      <h3>Shopping Cart</h3>
    </Aside>
  ) : (
    <></>
  );
};
