import React, { useState, useContext } from "react";
import sublinks from "../data/Header_data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebaeOpen, setisSidebaeOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setisSidebaeOpen(true);
  };

  const closeSidebar = () => {
    setisSidebaeOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);

    setisSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebaeOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
