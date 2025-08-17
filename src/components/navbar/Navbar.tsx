import { Link } from '@tanstack/react-router';

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homese</Link>
        </li>
        <li>
          <Link to="/about">Aboutes</Link>
        </li>
      </ul>
    </nav>
  );
};
