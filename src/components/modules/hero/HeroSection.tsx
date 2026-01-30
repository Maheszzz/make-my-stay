import { ArrowRight, Play, TrendingUp, BarChart3, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroStats } from '@/lib/data/content';
import { SmartSearchBar } from '@/components/modules/search/SmartSearchBar';
import { Zap } from 'lucide-react';

export function HeroSection() {
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
                            Find Your Perfect Space with <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">AI Precision</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Most property ads attract browsers. Yours will attract buyers. Experience India's first autonomous real estate engine.
                        </p>

                        <div className="mb-10">
                            <SmartSearchBar />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">+2k</div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-sm font-bold text-slate-900">Trusted by 2,000+ Owners</div>
                                <div className="text-xs text-slate-500">4.9/5 Rating</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 hidden lg:block h-full min-h-[500px]">
                        {/* 3D Model / Visual Placeholder */}
                        <div className="absolute inset-0 bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 mix-blend-overlay"></div>
                            {/* Mock UI Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/50">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">Smart Match</h3>
                                        <p className="text-xs text-slate-500">Based on your preferences</p>
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">98% Match</div>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-2">
                                    <div className="h-full bg-emerald-500 w-[98%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
