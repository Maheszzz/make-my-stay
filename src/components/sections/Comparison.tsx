import { comparisonData } from '@/data/content';

export function Comparison() {
    return (
        <section id="market" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why We Win – <span className="text-emerald-400">Competitive Moat</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Compare us properly. We aren't just a tool, we are an outcome partner.</p>
                </div>

                <div className="overflow-x-auto pb-4">
                    <div className="min-w-[800px] w-full bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                        <div className="grid grid-cols-5 gap-4 mb-8 text-sm font-semibold text-slate-400 border-b border-slate-700 pb-4">
                            <div className="text-lg text-white">Feature</div>
                            <div>Brokers</div>
                            <div>Listing Portals</div>
                            <div>Generic CRM</div>
                            <div className="text-emerald-400 text-lg">MakeMyStay.ai</div>
                        </div>

                        {comparisonData.map((row, idx) => (
                            <div key={idx} className="grid grid-cols-5 gap-4 py-6 border-b border-slate-700/50 items-center text-sm">
                                <div className="font-medium text-white text-base">{row.label}</div>
                                <div className="text-red-400/80">{row.b}</div>
                                <div className="text-orange-400/80">{row.l}</div>
                                <div className="text-blue-400/80">{row.c}</div>
                                <div className="text-emerald-400 font-bold text-base bg-emerald-500/10 py-1 px-3 rounded-lg w-fit -ml-3 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                                    {row.m}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
