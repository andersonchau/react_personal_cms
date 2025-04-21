import React, { useMemo, useReducer, createContext, useContext } from 'react';
import { initialState, contextReducer } from './reducer';
import contextActions from './action';

 // REF : https://dev.to/idurar/mastering-advanced-complex-react-usecontext-with-usereducer-redux-style-2jl0
/*
const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  const [state, dispatch] = context;
  const appContextAction = contextActions(dispatch);
  // const appContextSelector = contextSelectors(state);
  return { state, appContextAction };
}

export { AppContextProvider, useAppContext };
*/