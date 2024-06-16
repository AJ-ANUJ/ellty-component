import React, { createContext, useContext, useRef } from 'react';

const ClickableContext = createContext({ refs: { current: [] }, triggerClicks: () => {} });

export const ClickableProvider = ({ children }) => {
  const refs = useRef([]);

  const triggerClicks = () => {
    for (let i = 1; i < refs.current.length; i++) {
      if (refs.current[i]) {
            refs.current[i].click();
      }
    }
  };

  return (
    <ClickableContext.Provider value={{ refs, triggerClicks }}>
      {children}
    </ClickableContext.Provider>
  );
};

export const useClickable = () => {
  return useContext(ClickableContext);
};
