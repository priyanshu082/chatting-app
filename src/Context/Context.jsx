'use client'
import { createContext, useState, useEffect } from "react";

export const SectionContext = createContext();
export const AuthContext = createContext();

export const SectionProvider = ({ children }) => {
  const [section, setSection] = useState("chat");
  const [active,setActive]=useState()

  return (
    <SectionContext.Provider value={{ section,active, setSection,setActive }}>
      {children}
    </SectionContext.Provider>
  );
};

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
