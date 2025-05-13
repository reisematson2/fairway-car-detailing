import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { BusinessStructuredData } from "./StructuredData";
import useScrollToTop from "@/hooks/use-scroll-to-top";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // This hook ensures page scrolls to top on navigation
  useScrollToTop();
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
