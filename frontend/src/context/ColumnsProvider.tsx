import React, { useState, ReactNode, createContext } from "react";

interface IColumnsContext {
  columns: number;
  setColumns: React.Dispatch<React.SetStateAction<number>>;
}

export const ColumnsContext = createContext<IColumnsContext>({
  columns: 4,
  setColumns: () => {},
});

export const ColumnsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [columns, setColumns] = useState<number>(4);

  return (
    <ColumnsContext.Provider value={{ columns, setColumns }}>
      {children}
    </ColumnsContext.Provider>
  );
};
