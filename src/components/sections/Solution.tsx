"use client";

import { useState, useEffect } from 'react';
import { solutionFeatures } from '@/data/content';
import { CheckCircle2 } from 'lucide-react';

export function Solution() {
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 4);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="solution" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Our Solution</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">Full-Stack AI Growth Engine</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Features Menu */}
                    <div className="lg:w-1/3 flex flex-col space-y-4">
                        {solutionFeatures.map((feature, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveFeature(idx)}
                                className={`text-left p-6 rounded-2xl transition-all duration-300 border ${activeFeature === idx
                                    ? 'bg-slate-50 border-slate-200 shadow-md scale-105'
                                    : 'bg-white border-transparent hover:bg-slate-50'
                                    }`}
                            >
                                <h3 className={`text-lg font-bold mb-1 ${activeFeature === idx ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-500">{feature.desc}</p>
                            </button>
                        ))}
                    </div>

                    {/* Feature Display */}
                    <div className="lg:w-2/3">
                        <div className="relative h-full min-h-[400px] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl opacity-50"></div>

                            <div className="relative p-12 h-full flex flex-col justify-center">
                                <div className="transition-all duration-500">
                                    {solutionFeatures.map((item, idx) => (
                                        activeFeature === idx && (
                                            <div key={idx} className="animate-in fade-in slide-in-from-right-8 duration-500">
                                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                                                    <item.icon className="w-8 h-8 text-emerald-400" />
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-6">{item.title}</h3>
                                                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">{item.text}</p>
                                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-medium">
                                                    <CheckCircle2 className="w-4 h-4 mr-2" />
                                                    {item.stats}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
