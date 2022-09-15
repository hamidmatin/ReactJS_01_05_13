import React from 'react';
import { Navbar, NavItem } from '../nav-bar';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1>React Case Study</h1>
      <nav>
        <Navbar>
          <NavItem to='/' content={'Home'} />
          <NavItem to='/tutorials' content={'Tutorials'} />
          <NavItem to='/calculator' content={'Calculator'} />
          <NavItem to='/calculator-fc' content={'Calculator (FC)'} />
          <NavItem to='/users' content={'Users'} />
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
