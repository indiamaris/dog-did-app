import { Link } from '@tanstack/react-router';
import Icon from '../../icon/Icon';
import { settings, home } from './icons';

export const Navbar = () => {
  return (
    <nav>
      <Icon icon={home} to="/packs/" />
      <Icon icon={settings} to="/settings/" />
    </nav>
  );
};
