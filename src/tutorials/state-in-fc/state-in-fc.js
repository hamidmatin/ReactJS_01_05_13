import React, { useState } from 'react';
import { BaseTutorialsPage } from '../../components/base-tutorials-page';
import { FucntionComponentLifecycle } from './funtion-component-lifecycle';

const SateInFC = () => {
  // console.log(useState('Init'))
  /**
   * const [state, setState] = useState(init)
   *
   * {state}
   * setState(new value)
   */
  const [title, setTitle] = useState('Function Component Lifecycle');
  const [isVisible, setIsVisible] = useState(false);

  const changetitleHandler = () => {
    setTitle(title + ', title changed');
  };

  const toggleShowHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <BaseTutorialsPage title={'State and lifecycle in FC'}>
      <button onClick={changetitleHandler}>Change Title</button>
      <button onClick={toggleShowHandler}>Toggle Show</button>
      <button
        onClick={() => {
          console.clear();
        }}
      >
        Clear Console
      </button>
      <hr />
      {isVisible && <FucntionComponentLifecycle title={title} />}
    </BaseTutorialsPage>
  );
};

export default SateInFC;
