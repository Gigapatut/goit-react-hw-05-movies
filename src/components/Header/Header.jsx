import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'black',
            })}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
