import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Format from '@/components/Format';
import WhatToExpect from '@/components/WhatToExpect';
import Coaches from '@/components/Coaches';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Format />
      <WhatToExpect />
      <Coaches />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
