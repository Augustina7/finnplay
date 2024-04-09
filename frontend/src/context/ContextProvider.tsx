import { ReactNode } from "react";
import { ColumnsProvider } from "./ColumnsProvider";
import MenuProvider from "./MenuProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ColumnsProvider>
      <MenuProvider>{children}</MenuProvider>
    </ColumnsProvider>
  );
};

export default Providers;
