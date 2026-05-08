/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Monitor, 
  Palette, 
  Users2, 
  Megaphone, 
  HandCoins 
} from 'lucide-react';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';

const detailedServices = [
  {
    title: 'LLC Formation',
    icon: Scale,
    desc: 'From name reservation to EIN and operating agreements, we handle the entire LLC setup process so your business is legally protected from day one.',
    features: ['State filing & name reservation', 'EIN (Tax ID) registration', 'Operating agreement drafting', 'Registered agent service']
  },
  {
    title: 'Website Design & Development',
    icon: Monitor,
    desc: 'Custom, mobile-responsive websites designed to look professional, rank on Google, and turn visitors into paying customers.',
    features: ['Custom UI/UX design', 'Mobile-first responsive build', 'SEO-ready architecture', 'Ongoing maintenance & hosting']
  },
  {
    title: 'Logo & Brand Identity',
    icon: Palette,
    desc: 'A polished, memorable logo plus a complete brand kit that makes your business look established from day one.',
    features: ['Custom logo design', 'Color palette & typography', 'Business card & letterhead', 'Social media brand kit']
  },
  {
    title: 'Social Media Marketing',
    icon: Megaphone,
    desc: 'Done-for-you Facebook, Instagram, and Google advertising campaigns built to put your business in front of the right customers.',
    features: ['Facebook & Instagram ads', 'Google Search & Display ads', 'Ad creative & copywriting', 'Monthly performance reports']
  },
  {
    title: 'Lead Generation',
    icon: Users2,
    desc: 'We don\'t just run ads — we deliver qualified, ready-to-buy leads directly to your inbox or CRM so you can focus on closing.',
    features: ['Exclusive, qualified leads', 'Landing page funnels', 'Email & SMS nurture sequences', 'CRM setup & integration']
  },
  {
    title: 'Business Grants & Loans',
    icon: HandCoins,
    desc: 'We help you identify and apply for small business grants and loan programs so you can fund operations, inventory, or expansion.',
    features: ['Grant research & matching', 'Loan pre-qualification', 'Application preparation', 'Funding strategy consult']
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        label="Services" 
        title="Two divisions. One blueprint for growth." 
        description="Whether you're building in the commercial market or pursuing federal contracts, we have a dedicated team and playbook for you."
      />

      {/* Divisions Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 border-2 border-slate-100 bg-white hover:shadow-2xl transition-all group hover:border-[#1841B8]"
            >
              <div className="w-12 h-12 bg-slate-50 flex items-center justify-center mb-8 rounded-sm text-brand-blue">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">Division</span>
              <h3 className="heading-serif text-3xl font-bold text-brand-dark mt-2 mb-4 tracking-tight">BUSINESS GROWTH</h3>
              <p className="font-serif italic text-lg text-brand-dark opacity-80 mb-6 font-medium italic">
                Launch, brand, market, and fund your business.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Everything you need to start and scale in the commercial marketplace — LLC setup, branding, marketing, leads, grants, and loans, all under one roof.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['LLC Formation & Compliance', 'Website & Logo Design', 'Social Media Marketing (FB / IG / Google)', 'Lead Generation', 'Business Grants & Loans'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/get-started">
                <Button className="w-full sm:w-auto !bg-[#1841B8] border-none hover:!bg-[#1841B8]/90">GET STARTED →</Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-[#0A1F4C] text-white hover:shadow-2xl transition-all group border-b-4 border-brand-blue border-2 border-transparent hover:border-[#A00D24]"
            >
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-8 rounded-sm text-[#D33553]">
                <Landmark className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#D33553] uppercase">Division</span>
              <h3 className="heading-serif text-3xl font-bold text-white mt-2 mb-4 tracking-tight">FEDERAL GROWTH</h3>
              <p className="font-serif italic text-lg text-white opacity-80 mb-6 font-medium">
                Win federal government contracts.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Federal Growth is our specialized division helping businesses register, pursue, and win federal government contracts — from SAM registration and capability statements to proposal support and contract performance.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['Registration & Setup (SAM / UEI)', 'Opportunity Research', 'Proposal Support', 'Capability Building', 'Contract Growth'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D33553]" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link to="/federal-growth">
                <Button className="w-full sm:w-auto !bg-[#D33553] hover:!bg-[#D33553]/90 text-white border-none shadow-none uppercase">
                  EXPLORE FEDERAL GROWTH →
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">Business Growth</span>
            <h2 className="mt-4 heading-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark max-w-2xl leading-tight mx-auto md:mx-0">
              Everything your new or growing business needs.
            </h2>
          </div>

          <div className="grid md:grid-cols-2">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-8 md:p-10 bg-white hover:shadow-2xl transition-all group relative border-slate-100 ${
                  index % 2 === 0 ? 'md:border-r md:border-b' : 'md:border-b'
                } ${index >= detailedServices.length - 2 ? 'md:border-b-0' : ''} border-b md:border-b-inherit`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="heading-serif text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {service.features.map(f => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-brand-blue/40" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-blue text-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-150 origin-center">
            <path d="M0 400C300 350 500 450 800 350C1100 250 1300 350 1440 300V400H0Z" fill="white" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 md:space-y-10">
          <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Not sure where to start?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book a free 30-minute consultation and we’ll recommend the right division and starting point for your business.
          </p>
          <div>
            <Link to="/get-started">
              <Button size="lg" className="!bg-[#1841B8] border-none hover:!bg-[#1841B8]/90 shadow-xl shadow-black/20 uppercase">
                GET STARTED →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
