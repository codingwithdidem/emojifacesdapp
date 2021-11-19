import React, { useContext, createContext, useState } from "react";

const StatusContext = createContext();

const StatusProvider = ({ children }) => {
  const [status, setStatus] = useState("");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

const useStatus = () => useContext(StatusContext);

export { StatusProvider, useStatus };
