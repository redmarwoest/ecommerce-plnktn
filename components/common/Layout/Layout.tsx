import s from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ApiProvider } from "@framework";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar></Navbar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
