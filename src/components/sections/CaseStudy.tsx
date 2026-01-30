import { MapPin, Building2, UserCheck } from 'lucide-react';
import { caseStudyStats } from '@/data/content';

export function CaseStudy() {
    return (
        <section id="case-study" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/2">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider mb-6">Real Results</div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Study: <span className="text-emerald-600">UrbanNest PG</span></h2>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-slate-400" /> Bangalore</span>
                                <span className="flex items-center"><Building2 className="w-4 h-4 mr-1 text-slate-400" /> 4 Properties</span>
                                <span className="flex items-center"><UserCheck className="w-4 h-4 mr-1 text-slate-400" /> 80 Beds</span>
                            </div>
                        </div>
                        <p className="text-lg text-slate-600 mb-6 font-medium">From 78% occupancy to 94% in just 18 days.</p>
                        <p className="text-slate-500 mb-8 leading-relaxed">
                            "Before MakeMyStay, we were dependent on brokers who took one month's rent as commission. We had no data on our leads. Within a week of switching, our lead volume tripled and we stopped paying broker commissions entirely."
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                                {/* Placeholder avatar */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Rajesh Kumar</div>
                                <div className="text-sm text-slate-500">Owner, UrbanNest PG</div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Impact Summary</h3>
                            <div className="grid grid-cols-2 gap-6 relative z-10">
                                {caseStudyStats.map((stat, i) => (
                                    <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-emerald-100 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/20 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-emerald-100 text-sm mb-1">Additional Revenue</div>
                                        <div className="text-3xl font-bold">₹4.2 Lakhs</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-emerald-100 text-sm mb-1">ROI Timeline</div>
                                        <div className="text-xl font-bold">18 Days</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
