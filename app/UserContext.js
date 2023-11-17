// UserContext.js
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false); // Nuevo estado

  const resetSearch = () => {
    setSearchData([]);
    setSearchPerformed(false);
  };

  return (
    <UserContext.Provider
      value={{
        searchData,
        setSearchData,
        searchPerformed,
        setSearchPerformed,
        resetSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
