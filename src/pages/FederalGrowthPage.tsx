/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Search, 
  FileText, 
  Trophy, 
  TrendingUp, 
  ShieldCheck, 
  Target, 
  Handshake, 
  Mail, 
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { Button } from '../components/Button';

export default function FederalGrowthPage() {
  const pillarServices = [
    {
      title: 'REGISTRATION & SETUP',
      desc: 'Get registered and compliant to do business with the federal government.',
      icon: UserCheck
    },
    {
      title: 'OPPORTUNITY RESEARCH',
      desc: 'We identify the right opportunities that match your capabilities and goals.',
      icon: Search
    },
    {
      title: 'PROPOSAL SUPPORT',
      desc: 'Professional proposal writing and editing that helps you stand out and win.',
      icon: FileText
    },
    {
      title: 'CAPABILITY BUILDING',
      desc: 'Strengthen your systems, processes, and partnerships to become contract ready.',
      icon: ShieldCheck
    },
    {
      title: 'CONTRACT GROWTH',
      desc: 'Strategic support to help you perform, grow, and win more over time.',
      icon: TrendingUp
    }
  ];

  const valueProps = [
    { label: 'EXPERT GUIDANCE', icon: Target },
    { label: 'PROVEN STRATEGIES', icon: Handshake },
    { label: 'TRUSTED PARTNER', icon: Trophy }
  ];

  return (
    <div className="bg-white">
      {/* Custom Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4 justify-start">
                  <div className="h-[2px] w-12 bg-[#A00D24]" />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#A00D24] uppercase">A BLULINE CONSULTING GROUP COMPANY</span>
                  <div className="h-[2px] w-12 bg-[#A00D24]" />
                </div>
                <h1 className="heading-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.9] tracking-tight">
                  <span className="text-[#0A1F4C] block">FEDERAL</span>
                  <span className="text-[#A00D24] block">GROWTH.</span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-medium mx-0 text-left">
                Federal Growth helps businesses navigate, compete, and win federal government contracts. From registration to proposal support — we're with you every step of the way.
              </p>

              <div className="pt-4 text-left">
                <Link to="/get-started">
                  <Button className="!bg-[#A00D24] hover:!bg-[#A00D24]/90 text-white px-6 sm:px-8 py-4 h-auto text-xs sm:text-sm font-bold tracking-widest uppercase rounded-sm shadow-xl shadow-[#A00D24]/20 group transition-all">
                    GET STARTED TODAY <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-[#A00D24]/30" />
              <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-[#0A1F4C]/30" />
              <div className="relative rounded-sm overflow-hidden shadow-2xl skew-x-[-2deg]">
                <img 
                  src="/images/federal-capitol.png" 
                  alt="US Capitol Building" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541872703-74c5e440d126?auto=format&fit=crop&q=80&w=1200&h=1200";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-24 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-center md:text-left">
            {pillarServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`space-y-4 group ${i === pillarServices.length - 1 && pillarServices.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="flex justify-center md:justify-start">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-[#A00D24]" />
                </div>
                <h3 className="text-[10px] md:text-xs font-bold tracking-widest text-[#0A1F4C] uppercase">{service.title}</h3>
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Banner Section */}
      <section className="py-24 bg-[#0A1F4C] relative overflow-hidden">
        {/* Simple SVG Star Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-serif text-4xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
                <span className="text-white block">STRONGER BUSINESSES.</span>
                <span className="text-[#A00D24] block">STRONGER NATION.</span>
              </h2>
              <p className="text-slate-400 max-w-md">
                We help businesses like yours succeed in the federal marketplace.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8 md:gap-12 justify-center lg:justify-end">
              {valueProps.map((prop) => (
                <div key={prop.label} className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-[#A00D24]">
                    <prop.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase text-center w-20">{prop.label}</span>
                </div>
              ))}
              <Link to="/get-started">
                <Button className="!bg-[#A00D24] hover:!bg-[#A00D24]/90 text-white rounded-sm px-6 py-4 h-auto font-bold tracking-widest text-[10px] md:text-[11px] uppercase shadow-lg shadow-[#A00D24]/20 transition-all">
                  LET'S WIN TOGETHER →
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A00D24]" />
      </section>

      {/* Why Federal Growth Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] text-[#A00D24] uppercase">Why Federal Growth</span>
                <h2 className="heading-serif text-4xl md:text-5xl font-bold text-[#0A1F4C] leading-tight max-w-xl">
                  The federal market is massive. Getting in shouldn't require a decade of trial and error.
                </h2>
              </div>
              
              <p className="text-slate-600 leading-relaxed font-medium">
                The federal government spends hundreds of billions of dollars every year with small and mid-sized businesses. Federal Growth exists to help you get in the door, get compliant, and get awarded.
              </p>

              <ul className="space-y-4">
                {[
                  'End-to-end SAM.gov & UEI registration',
                  'Capability statement & past performance docs',
                  'Targeted opportunity matching',
                  'Proposal writing, editing & compliance review',
                  'Teaming, subcontracting & JV strategy'
                ].map(bullet => (
                  <li key={bullet} className="flex items-center gap-4 text-sm font-bold text-[#0A1F4C]">
                    <div className="w-5 h-5 text-[#A00D24] shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/get-started">
                  <Button className="!bg-[#A00D24] hover:!bg-[#A00D24]/90 text-white px-8 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-sm group transition-all">
                    GET STARTED <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
                <Button variant="outline" className="border-slate-300 text-[#0A1F4C] px-8 py-4 h-auto text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-slate-50">
                  <PhoneCall className="w-4 h-4 mr-2" /> (555) 012-4578
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative isolate"
            >
              <div className="absolute top-6 left-6 w-full h-full border-2 border-[#A00D24] -z-10" />
              <div className="relative rounded-sm overflow-hidden shadow-2xl">
                <img 
                  src="/images/federal-bottom.jpeg" 
                  alt="US Capitol" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541872703-74c5e440d126?auto=format&fit=crop&q=80&w=1000&h=800";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="py-20 bg-[#A00D24] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="heading-serif text-3xl md:text-4xl font-bold leading-tight">
                Ready to compete for federal contracts?
              </h2>
              <p className="text-white/70 max-w-md font-medium">
                Book a free consult and we'll tell you exactly where to start.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white !text-[#A00D24] hover:bg-slate-100 flex items-center gap-2 px-10 h-14 font-bold border border-[#A00D24]/20">
                <Mail className="w-4 h-4" /> EMAIL US
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 flex items-center gap-2 px-10 h-14 font-bold">
                BOOK A CALL <span className="ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
