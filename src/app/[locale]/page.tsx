import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { FrameworkFeatures } from '@/components/FrameworkFeatures';
import { ReactFeatures } from '@/components/ReactFeatures';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { Boilerplates } from '@/components/Boilerplates';
import { CodeShowcase } from '@/components/CodeShowcase';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FrameworkFeatures />
        <ReactFeatures />
        <ComponentShowcase />
        <Boilerplates />
        <CodeShowcase />
      </main>
      <Footer />
    </div>
  );
}
