/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: 'LLC Formation',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setIsSuccess(false);

    try {
      // @ts-ignore
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error('Form configuration is missing. Please check your .env file and restart the dev server.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Contact Request - Blu Line Consulting',
          from_name: formData.name,
          ...formData
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          service: 'LLC Formation',
          goals: ''
        });
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (error: any) {
      setErrorMessage(error.message || 'Failed to submit the form.');
    } finally {
      setIsSubmitting(false);
    }
  };
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
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                {isSuccess && (
                  <div className="sm:col-span-2 p-4 bg-green-50 border border-green-200 text-green-700 rounded-sm">
                    Thank you! Your request has been sent successfully. We will be in touch shortly.
                  </div>
                )}
                {errorMessage && (
                  <div className="sm:col-span-2 p-4 bg-red-50 border border-red-200 text-red-700 rounded-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Business Name</label>
                  <input 
                    type="text" 
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Acme Co."
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-widest text-brand-dark uppercase">Which service interests you?</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white"
                    disabled={isSubmitting}
                  >
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
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="Where are you today, and where do you want to be in 12 months?"
                    className="w-full px-4 py-3 border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all placeholder:text-slate-300 resize-none"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="col-span-1 sm:col-span-2 pt-2">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="!bg-[#1841B8] hover:!bg-[#1841B8]/90 text-white w-full sm:w-auto h-14 px-10 group border-none disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>SENDING... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                    ) : (
                      <>SEND REQUEST <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                    )}
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
