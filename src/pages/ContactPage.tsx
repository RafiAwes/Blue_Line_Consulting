/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        label="Get Started" 
        title="Let's build your blueprint together." 
        description="Tell us a little about your business and goals. One of our strategists will reach out within one business day."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="heading-serif text-3xl font-bold text-brand-dark">Prefer to talk directly?</h2>
                <p className="text-slate-500 leading-relaxed">
                  We're happy to jump on a quick call or answer questions by email. Reach us however works best for you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 rounded-sm flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-dark uppercase mb-1">Email</h4>
                    <p className="text-slate-500 font-medium">hello@blulinegroup.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-dark uppercase mb-1">Phone</h4>
                    <p className="text-slate-500 font-medium">(555) 012-4578</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/5 rounded-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-brand-dark uppercase mb-1">Office</h4>
                    <p className="text-slate-500 font-medium">New York, NY</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 rounded-sm border border-slate-100">
                <h4 className="heading-serif text-xl font-bold text-brand-dark mb-4">Our promise</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  No hidden fees. No 40-page proposals. Just a clear plan, fair pricing, and a partner who ships.
                </p>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 border border-slate-100 shadow-2xl bg-white"
            >
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Email *</label>
                  <input 
                    type="email" 
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Business Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Co."
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Which service interests you?</label>
                  <select className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white">
                    <option>LLC Formation</option>
                    <option>Website Design & Development</option>
                    <option>Logo & Brand Identity</option>
                    <option>Social Media Marketing</option>
                    <option>Lead Generation</option>
                    <option>Federal Growth Services</option>
                  </select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Tell us about your goals</label>
                  <textarea 
                    rows={4}
                    placeholder="Where are you today, and where do you want to be in 12 months?"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300 resize-none"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 pt-2">
                  <Button className="!bg-[#1841B8] hover:!bg-[#1841B8]/90 text-white w-full sm:w-auto h-14 px-10 group border-none">
                    SEND REQUEST <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
