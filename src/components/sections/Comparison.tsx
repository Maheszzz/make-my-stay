import { comparisonData } from '@/data/content';
import { Check, X } from 'lucide-react';

export function Comparison() {
    const getValueIcon = (value: string) => {
        if (value === 'No' || value === 'None' || value === 'N/A') {
            return <X className="w-4 h-4 text-red-400" />;
        }
        if (value === 'Full' || value === 'Yes') {
            return <Check className="w-4 h-4 text-emerald-400" />;
        }
        return null;
    };

    return (
        <section id="market" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Competitive Analysis</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                        Why We Win – <span className="text-gradient">Competitive Moat</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Compare us properly. We aren't just a tool, we are an outcome partner.
                    </p>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="min-w-[800px] w-full bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                        {/* Header Row */}
                        <div className="grid grid-cols-5 gap-4 mb-4 pb-6 border-b border-slate-700/50">
                            <div className="text-lg font-bold text-white">Feature</div>
                            <div className="text-center">
                                <div className="text-sm font-medium text-slate-400">Brokers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-medium text-slate-400">Listing Portals</div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm font-medium text-slate-400">Generic CRM</div>
                            </div>
                            <div className="text-center">
                                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30 inline-block">
                                    <span className="text-emerald-400 font-bold text-sm">MakeMyStay.ai</span>
                                </div>
                            </div>
                        </div>

                        {/* Data Rows */}
                        {comparisonData.map((row, idx) => (
                            <div
                                key={idx}
                                className="grid grid-cols-5 gap-4 py-5 border-b border-slate-700/30 items-center hover:bg-slate-700/20 transition-colors rounded-lg px-2 -mx-2"
                            >
                                <div className="font-semibold text-white">{row.label}</div>
                                <div className="text-center">
                                    <span className="text-red-400 text-sm flex items-center justify-center gap-2">
                                        {getValueIcon(row.b)}
                                        {row.b}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="text-orange-400 text-sm flex items-center justify-center gap-2">
                                        {getValueIcon(row.l)}
                                        {row.l}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="text-blue-400 text-sm flex items-center justify-center gap-2">
                                        {getValueIcon(row.c)}
                                        {row.c}
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="inline-flex items-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 py-2 px-4 rounded-full border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                                        {getValueIcon(row.m)}
                                        {row.m}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
