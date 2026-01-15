import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProjectStats } from '@/components/ProjectStats';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { ProductivityCards } from '@/components/ProductivityCards';
import { CodeComparison } from '@/components/CodeComparison';
import { ComponentShowcase } from '@/components/ComponentShowcase';
import { FrameworkFeatures } from '@/components/FrameworkFeatures';
import { ReactFeatures } from '@/components/ReactFeatures';
import { CodeShowcase } from '@/components/CodeShowcase';
import { Boilerplates } from '@/components/Boilerplates';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - New split layout with code */}
        <Hero />

        {/* Project Stats - Tech stack + Metrics unified */}
        <ProjectStats />

        {/* Architecture Diagram - Animated visualization */}
        <ArchitectureDiagram />

        {/* Productivity Cards - Measured gains */}
        <ProductivityCards />

        {/* Code Comparison - Before/After */}
        <CodeComparison />

        {/* Framework Features - Java Backend */}
        <FrameworkFeatures />

        {/* React Features - Frontend Components */}
        <ReactFeatures />

        {/* Component Showcase - All components grid */}
        <ComponentShowcase />

        {/* Boilerplates - Starter templates */}
        <Boilerplates />

        {/* Code Showcase - Code examples with tabs */}
        <CodeShowcase />
      </main>
      <Footer />
    </div>
  );
}
