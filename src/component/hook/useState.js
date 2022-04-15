import React, { useReducer } from 'react';

export default function useState(initState = {}) {
  const [state, setState] = useReducer((state, action) => {
    console.log(state, action, initState);
    return {
      ...state,
      ...action,
    };
  }, initState);
  return { state, setState };
}
