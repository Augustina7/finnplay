import { useState, ReactNode, createContext } from "react";

interface IMenuProvider {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg: boolean) => void;
}

export const MenuContext = createContext<IMenuProvider>({
  isMenuOpen: false,
  setIsMenuOpen: (arg: boolean) => arg,
});

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
