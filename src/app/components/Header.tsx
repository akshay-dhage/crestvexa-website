import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { Menu, ChevronDown, Linkedin, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
} from './ui/sheet';
const logo = '/logo.png';

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/process', label: 'Process' },
    { path: '/security', label: 'Security' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Crestvexa Logo" 
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-white">CRESTVEXA</span>
          </Link>

          {/* Desktop Navigation - All links on right side */}
          <div className="hidden lg:flex items-center space-x-1 ml-auto">
            <Link to="/" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-black border border-gray-800 rounded-lg shadow-lg py-2">
                  <Link to="/services" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    All Services
                  </Link>
                  <Link to="/services/ai-automation" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    AI & Automation
                  </Link>
                  <Link to="/services/cloud-devops" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Cloud & DevOps
                  </Link>
                  <Link to="/services/software-development" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Software Development
                  </Link>
                  <Link to="/services/maintenance" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                    Maintenance & Support
                  </Link>
                </div>
              )}
            </div>

            <Link to="/industries" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              Industries
            </Link>
            <Link to="/process" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              Process
            </Link>
            <Link to="/security" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              Security
            </Link>
            <Link to="/about" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              About
            </Link>
            <Link to="/careers" className="px-4 py-2 rounded-md text-white hover:bg-gray-800 transition-colors">
              Careers
            </Link>
            
            {/* Contact Button - Simple button without dropdown */}
            <Link 
              to="/contact" 
              className="ml-4 px-4 py-2 rounded-md text-white hover:bg-[#1F2937] transition-all duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Sidebar - Sheet */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent 
            side="right"
            className="w-full sm:w-[350px] bg-black border-l border-gray-800 p-0"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header with Logo */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <img 
                    src={logo} 
                    alt="Crestvexa Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-lg text-white">CRESTVEXA</span>
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-6">
                <div className="flex flex-col space-y-1 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`
                        px-4 py-3 rounded-md font-medium transition-colors text-left
                        ${isActive(link.path) 
                          ? 'text-white border-b-2 border-white' 
                          : 'text-white hover:text-[#CFCFCF]'
                        }
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ fontWeight: 500 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Contact Button */}
              <div className="p-4 border-t border-gray-800">
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full">Contact</Button>
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex items-center justify-center space-x-8">
                  <a
                    href="https://www.linkedin.com/in/crestvexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#CFCFCF] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/crestvexa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#CFCFCF] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
