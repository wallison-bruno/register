import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";


export interface Information{
  
}

export interface Patrolling{
 
}

export interface Seizures{
 
}

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterData {
  
}

export const RegisterContext = createContext<RegisterData>({} as RegisterData);

export function RegisterProvider({ children }: RegisterProviderProps) {



  return (
    <RegisterContext.Provider
      value={{
        
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegisters() {
  const context = useContext(RegisterContext);
  return context;
}
