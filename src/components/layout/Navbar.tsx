"use client";

import { useState, useEffect } from 'react';
import { Building2, X, Menu } from 'lucide-react';
import { navigationLinks } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle scroll after navigation to home
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const sectionId = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleNavClick = (item: string, e: React.MouseEvent) => {
        const sectionId = item.toLowerCase().replace(' ', '-');

        if (item === 'Home') {
            e.preventDefault();
            if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate('/');
            }
            setIsMenuOpen(false);
            return;
        }

        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home with hash
            navigate(`/#${sectionId}`);
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-glass py-4' : 'bg-brand-navy/80 backdrop-blur-sm py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gradient-to-br from-brand-teal to-accent-purple rounded-lg shadow-glow">
                            <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <Link to="/" className="text-2xl font-bold tracking-tight text-white font-heading">
                            MakeMyStay<span className="text-brand-teal">.ai</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navigationLinks.map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={(e) => handleNavClick(item, e)}
                                className="text-sm font-medium text-slate-300 hover:text-brand-teal transition-colors cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                        <Link to="/contact-us">
                            <Button variant="primary" className="px-6 py-2.5 text-sm shadow-glow">Contact Us</Button>
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 p-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        {navigationLinks.map((item) => (
                            <a
                                key={item}
                                href={item === 'Home' ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`}
                                onClick={(e) => handleNavClick(item, e)}
                                className="text-base font-medium text-slate-300 py-2 hover:text-brand-teal cursor-pointer"
                            >
                                {item}
                            </a>
                        ))}
                        <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="primary" className="w-full shadow-glow">Contact Us</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
