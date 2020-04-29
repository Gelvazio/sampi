import React, { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  function SignIn() {
    setSigned(true);
  }

  return (
    <AuthContext.Provider value={{ signed: signed, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
