import { Link } from '@tanstack/react-router';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homes</Link>
        </li>
        <li>
          <Link to="/packs">Packs</Link>
        </li>
      </ul>
    </nav>
  );
};
