/**
 * Layout.tsx
 * 
 * The main layout component that wraps all pages in the application.
 * Provides consistent structure with navigation, main content area, and footer.
 * Also includes structured data for SEO and scroll restoration functionality.
 */
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { BusinessStructuredData } from "./StructuredData";
import SEO from "./SEO";
import useScrollToTop from "@/hooks/use-scroll-to-top";

/**
 * Props interface for the Layout component
 * @property {ReactNode} children - The content to be rendered within the layout
 * @property {object} seo - Optional SEO properties
 */
interface LayoutProps {
  children: ReactNode;
  seo?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
  };
}

/**
 * Layout component that provides a consistent structure for all pages
 * Includes navigation header, main content area, and footer
 * Applies structured data for SEO and scrolls to top on navigation
 * 
 * @param {LayoutProps} props - Component props containing child elements
 * @returns JSX with the complete page layout structure
 */
const Layout = ({ children, seo }: LayoutProps) => {
  // This hook ensures page scrolls to top on navigation between pages
  useScrollToTop();
  
  return (
    <div className="flex flex-col min-h-screen">
      <SEO {...seo} />
      {/* Structured data for better SEO and rich snippets in search results */}
      <BusinessStructuredData />
      
      {/* Navigation header for site-wide navigation */}
      <Navigation />
      
      {/* Main content area that expands to fill available space */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer with contact info, secondary navigation and copyright */}
      <Footer />
    </div>
  );
};

export default Layout;
