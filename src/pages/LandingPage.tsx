/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { VisionSection } from '../components/VisionSection';
import { BuiltForBusinesses } from '../components/BuiltForBusinesses';
import { Stats } from '../components/Stats';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <VisionSection />
      <BuiltForBusinesses />
      <Stats />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
