import { problemCards } from '@/data/content';

export function Problem() {
    const getBorderColor = (theme: string) => {
        if (theme === 'red') return 'border-red-500';
        if (theme === 'orange') return 'border-orange-500';
        return 'border-purple-500';
    }

    const getBgColor = (theme: string) => {
        if (theme === 'red') return 'bg-red-50 text-red-500';
        if (theme === 'orange') return 'bg-orange-50 text-orange-500';
        return 'bg-purple-50 text-purple-500';
    }

    return (
        <section id="problem" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Problem in India's Rental Market</h2>
                    <p className="text-lg text-slate-600">A ₹5,000+ Cr market growing 25% YoY, yet plagued by inefficiencies.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problemCards.map((card, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 shadow-sm border-t-4 ${getBorderColor(card.theme || '')} hover:shadow-xl transition-all`}>
                            <div className={`${getBgColor(card.theme || '')} w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
                                {card.val ? <span className="font-bold text-xl">{card.val}</span> : card.icon && <card.icon className="w-6 h-6" />}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                            <p className="text-slate-600 mb-4" dangerouslySetInnerHTML={{ __html: card.desc.replace(/(₹\d+-\d+K|\d+%)/g, '<span class="font-semibold text-slate-900">$1</span>') }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
