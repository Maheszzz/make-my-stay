import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/modules/services/ServicesGrid';
import { PropertyGrid } from '@/components/modules/listings/PropertyGrid';
import { InvestmentCalculator } from '@/components/modules/calculator/InvestmentCalculator';
import { About } from '@/components/sections/About';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Comparison } from '@/components/sections/Comparison';
import { Market } from '@/components/sections/Market';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <Hero />

                {/* Services / What We Offer */}
                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900">What We Offer</h2>
                        <p className="text-slate-500 mt-2">Comprehensive solutions for every real estate need</p>
                    </div>
                    <ServicesGrid />
                </section>

                {/* Property Listings */}
                <PropertyGrid />

                {/* Investment Calculator */}
                <InvestmentCalculator />

                <About />
                <Problem />
                <Solution />
                <Comparison />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
