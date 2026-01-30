import { ArrowRight, Play, TrendingUp, BarChart3, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { heroStats } from '@/data/content';
import { Zap } from 'lucide-react';

export function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-b from-emerald-50/50 to-transparent blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-t from-teal-50/50 to-transparent blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6 border border-emerald-100">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span>AI-Powered Revenue Engine</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                            Transform Your Rental Business with <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">AI Intelligence</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Unlock 4x conversions and cut CAC by 41% with the first autonomous revenue engine designed for coliving and rental operators.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button variant="primary" icon={ArrowRight}>Start Growing Today</Button>
                            <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm">
                                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                                <span>Watch Demo</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {heroStats.map((stat, i) => (
                                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-100 transition-colors">
                                    <stat.icon className="w-5 h-5 text-emerald-500 mb-2" />
                                    <div className="font-bold text-xl text-slate-900">{stat.value}</div>
                                    <div className="text-xs text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 hidden lg:block">
                        {/* Abstract placeholder for hero visual */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50 aspect-square max-w-lg ml-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white">
                                {/* Mock Dashboard UI */}
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                        <div className="h-8 w-8 rounded-full bg-emerald-100"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        {[1, 2, 3].map(i => <div key={i} className="h-20 bg-white rounded-xl shadow-sm border border-slate-100"></div>)}
                                    </div>
                                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-4">
                                        <div className="h-4 w-1/3 bg-slate-200 rounded mb-4"></div>
                                        <div className="space-y-2">
                                            {[1, 2, 3, 4].map(i => <div key={i} className="h-2 w-full bg-slate-50 rounded"></div>)}
                                        </div>

                                        {/* Floating Overlay Card */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-emerald-100 w-64 animate-bounce-slow">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className="p-2 bg-emerald-100 rounded-lg">
                                                    <Zap className="w-5 h-5 text-emerald-600" />
                                                </div>
                                                <div>
                                                    <div className="text-xs text-slate-500">New Lead</div>
                                                    <div className="text-sm font-bold text-slate-900">+12 this hour</div>
                                                </div>
                                            </div>
                                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                                <div className="bg-emerald-500 h-full w-[85%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
