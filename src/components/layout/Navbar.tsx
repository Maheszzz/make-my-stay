"use client";

import { useState, useEffect } from 'react';
import { Building2, X, Menu } from 'lucide-react';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                            <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            MakeMyStay<span className="text-emerald-600">.ai</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigationLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <Link href="/contact-us">
                            <Button variant="dark" className="px-5 py-2.5 text-sm">Contact Us</Button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        {navigationLinks.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="text-base font-medium text-slate-600 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <Link href="/contact-us">
                            <Button variant="dark" className="w-full">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
