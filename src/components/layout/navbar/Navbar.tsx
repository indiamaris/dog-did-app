import React from 'react';

import Icon from '../../icon/Icon';
import  settings from './icons/settings.svg';
import home  from './icons/home.svg';
import NavbarContainer from './NavbarContainer';
export const Navbar = () => {
  return (
    <NavbarContainer>
      <Icon icon={home} to="/packs/" />
      <Icon icon={settings} to="/settings/" />
    </NavbarContainer >
  );
};
