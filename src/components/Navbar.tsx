import { User, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative",
                  location.pathname === "/" && "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                )}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative",
                  location.pathname === "/gallery" && "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                )}
              >
                Gallery
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-secondary hover:bg-muted transition-all duration-300 flex items-center justify-center hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden w-10 h-10 rounded-full bg-secondary hover:bg-muted transition-all duration-300 flex items-center justify-center hover:scale-110">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
