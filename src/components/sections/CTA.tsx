import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, Mail, MessageCircle, Calendar } from 'lucide-react';

export function CTA() {
    const [showContactCard, setShowContactCard] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Rental Business?</h2>
                <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">Join 50+ operators who have already automated their growth and reclaimed their profits.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/contact-us?type=demo"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
                    >
                        <Calendar className="w-5 h-5" />
                        Schedule Demo
                    </Link>
                    <button
                        onClick={() => setShowContactCard(true)}
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Contact Card Modal */}
            {showContactCard && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-center relative">
                            <button
                                onClick={() => setShowContactCard(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <span className="text-2xl font-bold text-emerald-600">MS</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">MakeMyStay Sales</h3>
                            <p className="text-emerald-100 mt-1">We're here to help you grow</p>
                        </div>

                        {/* Contact Details */}
                        <div className="p-6 space-y-4">
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Call us</div>
                                    <div className="font-bold text-slate-900">+91 98765 43210</div>
                                </div>
                            </a>

                            <a
                                href="mailto:sales@makemystay.ai"
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email us</div>
                                    <div className="font-bold text-slate-900">sales@makemystay.ai</div>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/919876543210?text=Hi, I'm interested in MakeMyStay"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-green-50 hover:border-green-200 border border-slate-100 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">WhatsApp</div>
                                    <div className="font-bold text-slate-900">Chat with us</div>
                                </div>
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="px-6 pb-6">
                            <button
                                onClick={() => setShowContactCard(false)}
                                className="w-full py-3 text-slate-500 hover:text-slate-700 font-medium transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
