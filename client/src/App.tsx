/**
 * App.tsx
 * 
 * Main application component that sets up the routing, layout, and global providers.
 * This is the entry point for the Fairway Car Detailing client application.
 */

import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Ceramic from "@/pages/Ceramic";
import PPF from "@/pages/PPF";
import LiquidWrap from "@/pages/LiquidWrap";
import Blog from "@/pages/Blog";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

/**
 * Router component that defines all application routes
 * Uses wouter for lightweight routing (alternative to react-router)
 * Wraps all routes in the Layout component for consistent page structure
 * 
 * @returns JSX with all defined routes for the application
 */
function Router() {
  return (
    <Layout>
      <Switch>
        {/* Main site pages */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        
        {/* Specialty service pages */}
        <Route path="/ceramic" component={Ceramic} />
        <Route path="/ppf" component={PPF} />
        <Route path="/liquid-wrap" component={LiquidWrap} />
        
        {/* Media and information pages */}
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        
        {/* Redirects for legacy or renamed routes */}
        <Route path="/before-after">
          <Redirect to="/gallery" />
        </Route>
        <Route path="/booking">
          <Redirect to="/contact" />
        </Route>
        
        {/* Fallback for undefined routes */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

/**
 * Main App component that wraps the application with necessary providers:
 * - QueryClientProvider: For handling API requests and caching with React Query
 * - TooltipProvider: For managing tooltips throughout the application
 * - Toaster: For displaying toast notifications
 * 
 * @returns The complete application with all providers and routing configured
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
