/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Button } from './Button';

export const CTA = () => {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <h2 className="heading-serif text-5xl md:text-6xl font-bold text-brand-dark leading-tight">
          Ready to build something that lasts?
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Book a free discovery call and we'll map out your blueprint together — no pressure, no jargon.
        </p>
        <div>
          <Link to="/get-started">
            <Button size="lg">GET STARTED TODAY →</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
