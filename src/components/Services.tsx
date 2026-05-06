/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Monitor, Target, Headphones } from 'lucide-react';

const services = [
  {
    title: 'LLC FORMATION',
    description: 'We make it simple to form your LLC and get your business legally registered.',
    icon: ShieldCheck,
  },
  {
    title: 'WEBSITE DESIGN',
    description: 'Professional, modern websites that build trust and convert visitors into customers.',
    icon: Monitor,
  },
  {
    title: 'LEAD GENERATION',
    description: 'Targeted strategies that attract quality leads and help you grow faster.',
    icon: Target,
  },
  {
    title: 'BUSINESS SUPPORT',
    description: 'Ongoing support and guidance so you can focus on running your business.',
    icon: Headphones,
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-slate-100">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 transition-colors"
            >
              <div className="mb-6 p-4 rounded-full bg-slate-50 group-hover:bg-brand-blue/10 transition-colors">
                <service.icon className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-sm font-bold tracking-widest text-brand-dark mb-4 uppercase">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
