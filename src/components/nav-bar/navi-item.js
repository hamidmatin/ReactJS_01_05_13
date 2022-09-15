import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, content }) => {
  return (
    <li>
      <NavLink to={to}>{content}</NavLink>
    </li>
  );
};

export default NavItem;
