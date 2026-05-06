/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Blu Line took us from idea to incorporated, branded, and booked solid in under 90 days. The blueprint is real.",
    author: "Marcus Whitfield",
    role: "Founder, Whitfield Logistics"
  },
  {
    quote: "Their Facebook and Google ads filled our appointment book within the first month. Easily the best investment we made.",
    author: "Priya Ramaswamy",
    role: "Owner, Lumen Dental Studio"
  },
  {
    quote: "They set up our LLC, built our website, AND helped us get approved for a $75k business loan. Total game-changer.",
    author: "Andre Coleman",
    role: "CEO, Coleman Construction"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">Client Voices</span>
          <h2 className="heading-serif text-5xl font-bold text-brand-dark max-w-3xl mx-auto leading-tight">
            Trusted by founders across industries.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-12 bg-white border border-slate-100 relative group ${index === 2 ? 'ring-2 ring-brand-blue/10 border-brand-blue/20 shadow-xl' : ''}`}
            >
              <Quote className="w-8 h-8 text-brand-blue opacity-20 mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-brand-dark">{t.author}</h4>
                <p className="text-sm text-slate-400 mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
