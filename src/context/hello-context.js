import { createContext, useReducer, useContext } from 'react';
import { helloReducer } from './helloReducer';

export const HelloContext = createContext('Hello');

export const HelloContextProvider = ({ children }) => {
  const [helloState, dispatch] = useReducer(helloReducer, 'Hello Context');

  return <HelloContext.Provider value={{ helloState, dispatch }}>{children}</HelloContext.Provider>;
};

export const useHelloContext = () => useContext(HelloContext);
