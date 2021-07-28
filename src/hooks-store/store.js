import { useState, useEffect } from 'react';

// share in entire project
// defined outside hook to share data
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    // setState calls
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    // register one component when rendered
    listeners.push(setState);

    // unregister component when destroyed
    return () => {
      listeners = listeners.filter(li => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

// way to initialize our store and call multiple times
// create concrete store slices similar to redux
export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }

  actions = { ...actions, ...userActions };
};