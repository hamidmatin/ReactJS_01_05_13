import React, { useRef } from 'react';

// import { helloSlice } from '../../redux/helloSlice'
import { changeMessage, addMessageByPayload, changeMessageByPayload } from '../../redux/helloSlice';

import { useSelector, useDispatch } from 'react-redux';

export const ChangeMessage = () => {
  const inputRef = useRef();
  const message = useSelector((state) => state.hello.message);
  const dispatch = useDispatch();

  const changeMessageHandler = () => {
    // dispatch(helloSlice.actions.changeMessage())
    dispatch(changeMessage());
  };

  const addMessageByPayloadHandler = () => {
    // dispatch(helloSlice.actions.changeMessage())
    dispatch(addMessageByPayload(', added message'));
  };
  const onChangeHamdler = (e) => {
    // console.log(e.target.value);
    console.log(inputRef.current.value)
    dispatch(changeMessageByPayload(inputRef.current.value));
  };
  return (
    <div>
      <p>Message : {message}</p>
      <button onClick={changeMessageHandler}>Change Message</button>
      <button onClick={addMessageByPayloadHandler}>Change Message by payload</button>

      <input
        ref={inputRef}
        type='text'
        style={{ display: 'block', marginTop: '30px', width: '250px' }}
        onChange={onChangeHamdler}
      />
    </div>
  );
};
