import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
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
            <main>
                <Hero />
                <About />
                <Problem />
                <Solution />
                <Comparison />
                <CaseStudy />
                <Market />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
