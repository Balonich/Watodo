import React, { createContext, useState, useContext, useCallback } from 'react';

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = useCallback((message) => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000);
  }, []);

  return (
    <ErrorContext.Provider value={{ error, showError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => {
  return useContext(ErrorContext);
};