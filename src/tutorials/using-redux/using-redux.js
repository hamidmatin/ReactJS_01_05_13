import React from 'react';
import { BaseTutorialsPage } from '../../components/base-tutorials-page';

import { useSelector, useDispatch } from 'react-redux';
import { ChangeMessage } from './change-message';

import { increment, decrement, reset } from '../../redux/counterSlice';

const UsingRedux = () => {
  //   const state = useSelector((state) => state);
  //   console.log(state);

  //   const hello = useSelector((state)=>state.hello)

  const message = useSelector((state) => state.hello.message);
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const resetHandler = () => {
    dispatch(reset());
  };
  return (
    <BaseTutorialsPage title={'Using Redux in ReactJS'}>
      {/* <h3>{state.hello.message}</h3> */}
      {/* <h3>{hello.message}</h3> */}
      <h3>{message}</h3>
      <ChangeMessage />
      <hr />
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={resetHandler}>reset</button>
      <p>Counter : {counter}</p>
    </BaseTutorialsPage>
  );
};

export default UsingRedux;
