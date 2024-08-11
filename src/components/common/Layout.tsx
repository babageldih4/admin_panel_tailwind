import { ReactNode, type FC } from "react";
import Header from "../ui/header/Header";
import Sidebar from "../ui/sidebar/Sidebar";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex min-w-full flex-auto min-h-screen">
        <Sidebar />
        <div className="grow">
          <Header />
          <div className="m-5 ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
