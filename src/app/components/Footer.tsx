import { Link } from 'react-router';
import { Linkedin, X, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-[#2A2A2A]">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-90 hover:opacity-100">About</Link></li>
              <li><Link to="/careers" className="text-sm opacity-90 hover:opacity-100">Careers</Link></li>
              <li><Link to="/contact" className="text-sm opacity-90 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-automation" className="text-sm opacity-90 hover:opacity-100">AI & Automation</Link></li>
              <li><Link to="/services/cloud-devops" className="text-sm opacity-90 hover:opacity-100">Cloud & DevOps</Link></li>
              <li><Link to="/services/software-development" className="text-sm opacity-90 hover:opacity-100">Software Development</Link></li>
              <li><Link to="/services/maintenance" className="text-sm opacity-90 hover:opacity-100">Maintenance</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><Link to="/industries#legal" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Legal</Link></li>
              <li><Link to="/industries#fintech" className="text-sm opacity-90 hover:opacity-100 transition-opacity">FinTech</Link></li>
              <li><Link to="/industries#saas" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Enterprise SaaS</Link></li>
              <li><Link to="/industries#professional" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Professional Services</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/crestvexa" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://x.com/crestvexa" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
                <X className="h-5 w-5" />
              </a>
              <a href="mailto:info@crestvexa.com" className="opacity-90 hover:opacity-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-90 mb-2">info@crestvexa.com</p>
            <p className="text-sm opacity-90">
              Sector No 7, Indrayani Nagar<br />
              Bhosari, Pune 411026<br />
              Maharashtra, India
            </p>
          </div>
        </div>

        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90 mb-4 md:mb-0">
            © 2026 Crestvexa. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm opacity-90 ml-0">
            <Link to="/privacy" className="hover:opacity-100">Privacy</Link>
            <span className="opacity-70">|</span>
            <Link to="/disclaimer" className="hover:opacity-100">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
