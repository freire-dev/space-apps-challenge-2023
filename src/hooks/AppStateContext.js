import React, { createContext, useContext, useState } from "react";

// Cria o contexto do estado global
export const AppStateContext = createContext();

// Provedor do estado global
export function AppStateProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    latitude: -22.896998,
    longitude: -43.106464,
    details: false
  });

  return (
    <AppStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppStateContext.Provider>
  );
}

// Hook para acessar o estado global
export function useAppState() {
  return useContext(AppStateContext);
}