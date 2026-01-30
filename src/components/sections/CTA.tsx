import { Button } from '@/components/ui/Button';

export function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Rental Business?</h2>
                <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">Join 50+ operators who have already automated their growth and reclaimed their profits.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <button className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl shadow-xl hover:scale-105 transition-transform">
                        Schedule Demo
                    </button>
                    <Button variant="outline" className="text-lg px-8 py-4">Contact Sales</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { title: "Quick Setup", desc: "Live in < 5 days" },
                        { title: "Proven Results", desc: "4x ROI avg" },
                        { title: "Risk-Free", desc: "14-day trial" }
                    ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-emerald-100 text-sm">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
