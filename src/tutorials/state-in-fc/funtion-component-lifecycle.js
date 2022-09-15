import React, { useEffect, useState } from 'react';

export const FucntionComponentLifecycle = ({ title }) => {
  const [counter, setCounter] = useState(0);
  const [description, setDescription] = useState('My Description');

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  //   console.log(useEffect)
  /*
      useEffect(callback function, dependencies)
      useEffect(() => {
        mounting and after updating each dependencies
        return () => {
          before updateing each dependencies and unmounting
        }
      }, [states or props])
    */

  /* sample 1 */
  //   useEffect(() => {
  //     console.log('1. Mount and After Update for any state or props');
  //     return () => {
  //       console.log('1-1. Unmount and Before Update any state or props');
  //     };
  //   });

  /* sample 2 */
  //   useEffect(() => {
  //     console.log('2. Mount and After Update depend on counter');
  //     return () => {
  //       console.log('2-1. Unmount and Before Update counter');
  //     };
  //   }, [counter]);

  /* sample 3 */
  //   useEffect(() => {
  //     console.log('3. Mount and After Update depend on description');
  //     return () => {
  //       console.log('3-1. Unmount and Before Update description');
  //     };
  //   }, [description]);

  /* sample 4 */
  //   useEffect(() => {
  //     console.log('4. Mount and After Update depend on description or counter');
  //     return () => {
  //       console.log('4-1. Unmount and Before Update description or counter');
  //     };
  //   }, [description, counter]);

  /* sample 5 */
  useEffect(() => {
    console.log('5. Mount');
    return () => {
      console.log('5-1. Unmount');
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{title}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <button
        onClick={() => {
          setDescription(`${description}, add some desc`);
        }}
      >
        Add Descripioon
      </button>
      <p>Counter : {counter}</p>
      <p>
        Description : <b>{description}</b>
      </p>
    </div>
  );
};
