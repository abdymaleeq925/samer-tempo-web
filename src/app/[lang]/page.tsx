"use client"

import HeroCollage from '@/components/homepage/hero-collage';
import FeatureCards from '@/components/homepage/feature-card';
import About from '@/components/homepage/about';

export default function HomePage() {

  return (
    <div className="space-y-16 pb-16">
      <HeroCollage/>
      <FeatureCards/> 
      <About/>
    </div>
  );
}