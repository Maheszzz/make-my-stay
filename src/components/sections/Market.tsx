import { Building2, TrendingUp } from 'lucide-react';

export function Market() {
    return (
        <section id="market" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-8">Massive & Growing Market</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                                    <Building2 className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-bold text-slate-900">15,000+ Operators</h4>
                                    <p className="text-slate-600">Across Bangalore, Delhi NCR, Pune & Hyderabad.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-bold text-slate-900">₹15,000+ Cr GMV</h4>
                                    <p className="text-slate-600">Growing at 25% year over year.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 p-4 bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-xl">
                            <p className="text-slate-700 font-medium">Focus: Mid-sized operators managing 20-200 beds.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-slate-500 uppercase tracking-wide mb-4">Market Trends</h3>
                        {[
                            "Shift from unorganized to organized coliving",
                            "Rising tenant expectations for digital experience",
                            "Operators desperate to cut broker dependency"
                        ].map((trend, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-4 text-slate-600 font-bold">{i + 1}</div>
                                <p className="text-slate-800 font-medium">{trend}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
