import React from 'react';
import { Link } from 'react-router-dom';

import './css-module.css';
import camelCaseStyles from './camelCase.module.css';
import cssNameStyles from './css-name.module.css';
import { BaseTutorialsPage } from '../../components/base-tutorials-page';

const UseCssModule = () => {
  console.log(camelCaseStyles);
  console.log(cssNameStyles);

  console.log(cssNameStyles['btn'])
  console.log(cssNameStyles['btn-primary'])

  return (
    <BaseTutorialsPage title={'CSS Modules'}>
      <Link to='/' className='btn btn-primary'>
        <span>With CSS</span>
      </Link>
      <hr />
      <Link to='/' className={`${camelCaseStyles.btn} ${camelCaseStyles.btnPrimary}`}>
        <span>With CSS Module</span>
      </Link>
      <Link to='/' className={[camelCaseStyles.btn, camelCaseStyles.btnPrimary].join(' ')}>
        <span>With CSS Module</span>
      </Link>
      <hr />
      <Link to='/' className={`${cssNameStyles['btn']} ${cssNameStyles['btn-primary']}`}>
        <span>With CSS Module</span>
      </Link>
      <Link to='/' className={[cssNameStyles['btn'], cssNameStyles['btn-primary']].join(' ')}>
        <span>With CSS Module</span>
      </Link>
      <hr />
      <Link
        to='/'
        className={`${cssNameStyles['btn']} ${cssNameStyles['btn-primary']} ${cssNameStyles.active} active`}
      >
        <span>With CSS Module</span>
      </Link>
      <Link
        to='/'
        className={`${cssNameStyles['btn']} ${cssNameStyles['btn-danger']} active ${cssNameStyles.active}`}
      >
        <span>With CSS Module</span>
      </Link>
    </BaseTutorialsPage>
  );
};

export default UseCssModule;