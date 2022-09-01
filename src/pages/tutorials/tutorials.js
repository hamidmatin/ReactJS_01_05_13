import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './tutorials.css';

const Tutorials = () => {
  return (
    <div>
      <h2>Tutorials</h2>
      <div className='toturials-wrapper'>
        <aside className='tutorials-nav'>
          <ul>
            <li>
              <NavLink to='/tutorials' end>Introduction</NavLink>
            </li>
            <li>
              <NavLink to='module-intro'>React Module Intro</NavLink>
            </li>
            <li>
              <NavLink to='fc-intro'>Function Components</NavLink>
            </li>
            <li>
              <NavLink to='cc-intro'>Class Components</NavLink>
            </li>
            <li>
              <NavLink to='event-state-cc'>Event &amp; State in CC</NavLink>
            </li>
            <li>
              <NavLink to='cc-lifecycle'>CC Lifecycle</NavLink>
            </li>
            <li>
              <NavLink to='css-module'>CSS Module</NavLink>
            </li>
          </ul>
        </aside>
        <div className='tutorials-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
