/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-2 rounded-sm inline-block transition-transform group-hover:scale-105">
                <img 
                  src="/images/logo.jpeg" 
                  alt="Blu Line Consulting Group" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Strategy. Positioning. Growth. Everything you need to launch, grow, and scale your business with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8">Navigate</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Services</Link></li>
              <li><Link to="/federal-growth" className="hover:text-brand-accent transition-colors">Federal Growth</Link></li>
              <li><Link to="/get-started" className="hover:text-brand-accent transition-colors">Get Started</Link></li>
              <li><Link to="#" className="hover:text-brand-accent transition-colors">Client Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Business Growth</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Federal Growth</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">LLC Formation</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Website & Logo Design</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Grants & Business Loans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-widest uppercase mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>hello@blulinegroup.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>(555) 012-4578</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>New York, NY</span>
              </li>
            </ul>
            <div className="flex gap-6 mt-10">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 Blu Line Consulting Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
