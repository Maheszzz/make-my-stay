import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="p-1.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                MakeMyStay<span className="text-emerald-500">.ai</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">
                            The first AI-native revenue engine for co-living and rental operators.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-500 flex items-center justify-center transition-colors cursor-pointer"><Mail size={16} /></div>
                            <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-500 flex items-center justify-center transition-colors cursor-pointer"><Phone size={16} /></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Case Studies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5" /> Bangalore, India</li>
                            <li className="flex items-center"><Mail size={16} className="mr-2" /> hello@makemystay.ai</li>
                            <li className="flex items-center"><Phone size={16} className="mr-2" /> +91 98765 43210</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 MakeMyStay.ai. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
