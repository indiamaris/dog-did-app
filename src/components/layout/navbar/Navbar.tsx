import React from 'react';

import Icon from '../../icon/Icon';
import  settings from './icons/settings.svg';
import home  from './icons/home.svg';


export const Navbar = () => {
  return (
    <nav>
      <Icon icon={home} to="/packs/" />
      <Icon icon={settings} to="/settings/" />
    </nav>
  );
};
