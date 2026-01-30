import { motion } from 'framer-motion';
import { SmartSearchBar } from '@/components/modules/search/SmartSearchBar';
import { TrendingUp, Star, Users, MapPin } from 'lucide-react';

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen bg-brand-navy overflow-hidden flex items-center pt-20">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-teal/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-purple/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent-coral/10 rounded-full blur-[100px] animate-pulse delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <Star className="w-4 h-4 text-brand-teal mr-2 fill-brand-teal" />
                            <span className="text-sm font-medium text-slate-300">New: AI Revenue Engine v2.0</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-heading">
                            Maximize Yields. <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-emerald-400">Zero Commissions.</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                            The first AI-native operating system for modern rental brands.
                            Automate leasing, tenant experience, and revenue management.
                        </p>

                        <div className="pt-4 relative z-20">
                            <SmartSearchBar />
                        </div>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-slate-700 flex items-center justify-center text-xs text-white">
                                        <Users size={14} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-slate-400">
                                <span className="text-white font-bold block">10,000+</span>
                                Happy Tenants
                            </div>
                            <div className="w-px h-10 bg-white/10"></div>
                            <div className="text-sm text-slate-400">
                                <span className="text-white font-bold block flex items-center gap-2">
                                    4.9/5 <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                </span>
                                Agent Rating
                            </div>
                        </div>
                    </div>

                    {/* Right Content - 3D Card Stack */}
                    <div className="relative hidden lg:block h-[600px] perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotateY: -20 }}
                            animate={{ opacity: 1, x: 0, rotateY: -10 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute top-10 right-10 w-80 h-[450px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 shadow-2xl z-10 p-6 transform hover:rotate-y-0 transition-transform duration-500"
                        >
                            {/* Glass overlay details */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-3xl z-20"></div>
                            <img src="https://images.unsplash.com/photo-1600596542815-e36cb06c3743?auto=format&fit=crop&w=800&q=80" alt="Luxury Villa" className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80" />

                            <div className="absolute bottom-6 left-6 z-30">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 rounded-md bg-brand-teal text-brand-navy text-xs font-bold">VERIFIED</span>
                                    <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-xs">VILLA</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Elysium Estate</h3>
                                <p className="text-slate-300 text-sm flex items-center"><MapPin size={14} className="mr-1" /> Bangalore, India</p>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute bottom-20 left-0 glass-panel p-4 rounded-xl flex items-center gap-4 z-40 max-w-xs border border-white/10 bg-slate-900/50 backdrop-blur-xl"
                        >
                            <div className="p-2 bg-brand-teal/20 rounded-lg">
                                <TrendingUp className="text-brand-teal" />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400">Revenue Growth</div>
                                <div className="text-lg font-bold text-white">+24.5% <span className="text-xs font-normal text-slate-400">vs last mo</span></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="absolute top-40 -left-10 glass-panel p-3 rounded-xl flex items-center gap-3 z-30 border border-white/10 bg-slate-900/50 backdrop-blur-xl"
                        >
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                            <div className="text-sm font-semibold text-white">4 New Leads</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

