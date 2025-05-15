import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import Icons from '../../../public/icons.svg';
import clsx from 'clsx';
const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.headerLink, isActive && s.active);
  };

  return (
    <header className={s.sectionHeader}>
      <div className="container">
        <nav className={s.navigation}>
          <a href="/" className={s.logoLink}>
            <svg width="102" height="16">
              <use href={`${Icons}#icon-logo`}></use>
            </svg>
          </a>
          <ul className={s.navigationList}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={buildLinkClass}>
              Catalog
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
