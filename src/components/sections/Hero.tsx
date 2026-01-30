import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroStats } from '@/data/content';
import { SmartSearchBar } from '@/components/modules/search/SmartSearchBar';
import { Zap } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-emerald-50/50 to-transparent blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-teal-50/50 to-transparent blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>AI-Powered Revenue Engine</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Find Your Dream <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Property</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Intelligence meets intuition in real estate. Discover properties that match your vision with our AI-powered search.
                        </p>

                        <div className="mb-10">
                            <SmartSearchBar />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="text-center sm:text-left">
                                    <div className="text-2xl font-bold text-slate-900">12k+</div>
                                    <div className="text-xs text-slate-500">Properties Listed</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-2xl font-bold text-slate-900">8k+</div>
                                    <div className="text-xs text-slate-500">Happy Clients</div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <div className="text-2xl font-bold text-slate-900">500+</div>
                                    <div className="text-xs text-slate-500">Expert Agents</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 hidden lg:block h-full min-h-[500px]">
                        {/* Visual Placeholder - Matching the House Image idea */}
                        <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                                alt="Luxury Home"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 mix-blend-overlay"></div>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -z-10 top-1/2 right-1/2 w-96 h-96 bg-emerald-200 rounded-full blur-[100px] opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
