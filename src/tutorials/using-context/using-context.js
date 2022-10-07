import React, { useRef } from 'react';
// import { useContext } from 'react';
import { BaseTutorialsPage } from '../../components/base-tutorials-page';

// import { HelloContext } from '../../context/hello-context';
import { useHelloContext } from '../../context/hello-context';
import {
  changeMessageAction,
  changeMessageByPayloadAction,
  addMessageByPayloadAction,
} from '../../context/hello-actions';

const UsingContext = () => {
  const inputRef = useRef();

  //   const context = useContext(HelloContext);
  //   const context = useHelloContext();
  // console.log(context);

  const { helloState, dispatch } = useHelloContext();

  const changeMessageHandler = () => {
    // context.dispatch({ type: 'change_message', payload: 'Message Changed' });
    // dispatch({ type: 'change_message', payload: 'Message Changed' });
    dispatch(changeMessageAction());
  };

  const changeMessageByPayloadHandler = () => {
    dispatch(changeMessageByPayloadAction(inputRef.current.value));
  };

  const addMessageByPayloadHandler = () => {
    dispatch(addMessageByPayloadAction(inputRef.current.value));
  };
  return (
    <BaseTutorialsPage title={'Using Context in ReactJs'}>
      {/* <HelloContext.Consumer>
        {(state) => {
          console.log(state);
          return <p>message: {state.helloState}</p>;
        }}
      </HelloContext.Consumer> */}

      <button onClick={changeMessageHandler}>Change Message</button>
      <button onClick={changeMessageByPayloadHandler}>Change Message by Payload</button>
      <button onClick={addMessageByPayloadHandler}>Add Message by Payload</button>
      {/* <p>Message : {context.helloState}</p> */}
      <p>Message : {helloState}</p>
      <input type='text' ref={inputRef} />
    </BaseTutorialsPage>
  );
};

export default UsingContext;
