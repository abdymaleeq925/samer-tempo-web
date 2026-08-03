import HeroCollage from '@/components/homepage/hero-collage';
import FeatureCards from '@/components/homepage/feature-card';
import About from '@/components/homepage/about';
import CategoryShowcase from '@/components/homepage/category-showcase';

export default function HomePage() {

  return (
    <div>
      <HeroCollage/>
      <FeatureCards/> 
      <About/>
      <CategoryShowcase/>
    </div>
  );
}