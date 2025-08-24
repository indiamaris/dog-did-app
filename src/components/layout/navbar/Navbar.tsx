import React from 'react';

import Icon from '@components/layout/icon/Icon.tsx';

import  settings from './icons/settings.svg';
import home  from './icons/home.svg';
import NavbarContainer from './NavbarContainer';
export const Navbar = () => {
  const variant = 'md';
  return (
    <NavbarContainer>
      <Icon icon={home} variant={variant} to="/packs/" />
      <Icon icon={settings} variant={variant} to="/settings/" />
    </NavbarContainer >
  );
};
