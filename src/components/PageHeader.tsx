/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export const PageHeader = ({ label, title, description }: PageHeaderProps) => {
  return (
    <section className="pt-40 pb-20 bg-header-bg text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">{label}</span>
          <h1 className="heading-serif text-5xl md:text-7xl font-bold text-header-text leading-[1.1] max-w-3xl">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
