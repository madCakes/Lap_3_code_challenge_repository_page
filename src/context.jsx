import { createContext, useState } from "react";

const RepoContext = createContext();

export function RepoProvider({ children }) {
  const [repos, setRepos] = useState();
  return (
    <RepoContext.Provider
      value={{
        repos,
        setRepos,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}
