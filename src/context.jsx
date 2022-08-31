import { createContext, useState } from "react";

const RepoContext = createContext();

export function RepoProvider({ children }) {
  return (
    <RepoContext.Provider
      value={{
        item: 1,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export default RepoProvider;
