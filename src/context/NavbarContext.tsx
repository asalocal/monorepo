import { createContext, useCallback, useContext, useState } from 'react';

interface INavbarContextData {
  handleNavbarVisibility: () => void;
  navbarVisibility: boolean;
}

interface INavbarProvider {
  children: React.ReactNode;
}

const NavbarContext = createContext<INavbarContextData>(
  {} as INavbarContextData
);

export const NavbarProvider = ({ children }: INavbarProvider) => {
  const [navbarVisibility, setNavbarVisibility] = useState(false);

  const handleNavbarVisibility = useCallback(() => {
    setNavbarVisibility(!navbarVisibility);
  }, [navbarVisibility]);

  return (
    <>
      <NavbarContext.Provider
        value={{ handleNavbarVisibility, navbarVisibility }}
      >
        {children}
      </NavbarContext.Provider>
    </>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  return context;
};
