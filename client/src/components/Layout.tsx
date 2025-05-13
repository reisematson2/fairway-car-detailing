import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { BusinessStructuredData } from "./StructuredData";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <BusinessStructuredData />
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
