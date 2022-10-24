import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Nav.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';



function Nav() {
  return (
    <nav className="nav_bar">
      <ul>
        <li>
          <NavLink end to="/" className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')}>
            <span><FontAwesomeIcon icon={faUser} /></span>
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')}>
            <span><FontAwesomeIcon icon={faComment} /></span>
            Chats
          </NavLink>
        </li>
        <li>
          <NavLink to="/find" className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')}>
            <span><FontAwesomeIcon icon={faSearch} /></span>
            Find
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" className={({ isActive }) => 'nav_link ' + (isActive ? 'active' : '')}>
            <span><FontAwesomeIcon icon={faEllipsisH} /></span>
            More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;