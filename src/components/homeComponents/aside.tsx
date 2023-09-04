import React from 'react';
import { Aside, ButtonClose, Content } from '../../styled/homeStyled/navStyled';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import { toggle } from '../../features/sideBarSlice';

export const AsideCart = () => {
  const dispatch = useTypedDispatch();

  const toggleSideBar = (event: any) => {
    event.preventDefault();
    dispatch(toggle());
  };
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);

  return sideBarActivated ? (
    <Aside>
      <Content $sideBarActivated={sideBarActivated}>
        <ButtonClose onClick={toggleSideBar}>X</ButtonClose>
        <h3>Shopping Cart</h3>
      </Content>
    </Aside>
  ) : (
    <></>
  );
};
