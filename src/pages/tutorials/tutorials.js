import React from 'react';
import { Outlet } from 'react-router-dom';
import { BasePage } from '../../components/base-page';
import { Navbar, NavItem } from '../../components/nav-bar';

import './tutorials.css';

const Tutorials = () => {
  return (
    <BasePage title={'Tutorials'}>
      <div className='toturials-wrapper'>
        <aside className='tutorials-nav'>
          <Navbar>
            <NavItem to={'/tutorials'} content='Introduction' />
            <NavItem to={'module-intro'} content='React Module Intro' />
            <NavItem to={'fc-intro'} content='Function Components' />
            <NavItem to={'cc-intro'} content='Class Components' />
            <NavItem to={'event-state-cc'} content='Event &amp; State in CC' />
            <NavItem to={'cc-lifecycle'} content='CC Lifecycle' />
            <NavItem to={'css-module'} content='CSS Module' />
            <NavItem to={'state-fc'} content='State in fc' />
            <NavItem to={'using-redux'} content='Using Redux' />
            <NavItem to={'using-context'} content='Using Context' />
            
          </Navbar>
        </aside>
        <div className='tutorials-content'>
          <Outlet />
        </div>
      </div>
    </BasePage>
  );
};

export default Tutorials;
