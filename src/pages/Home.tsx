import { useState } from 'react';
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
import { CTA } from '@/components/sections/CTA';
import { CaseStudy } from '@/components/sections/CaseStudy';

export default function Home() {
    const [category, setCategory] = useState<'buy' | 'rent'>('buy');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white">
                <section id="home">
                    <Hero
                        category={category}
                        setCategory={setCategory}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </section>

                {/* Services / What We Offer */}
                <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
                        <p className="text-slate-500 mt-2">Comprehensive solutions for every real estate need</p>
                    </div>
                    <ServicesGrid />
                </section>

                {/* Property Listings */}
                <PropertyGrid category={category} searchQuery={searchQuery} />

                {/* Investment Calculator */}
                <InvestmentCalculator />

                <About />
                <Problem />
                <Solution />
                <Comparison />
                <CaseStudy />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
