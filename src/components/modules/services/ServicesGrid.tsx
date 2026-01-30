import { motion } from 'framer-motion';
import { ArrowRight, Building2, Wallet, Users, BarChart3 } from 'lucide-react';

const services = [
    {
        title: "Property Management",
        desc: "End-to-end management for premium assets",
        icon: Building2,
        color: "text-blue-400"
    },
    {
        title: "Revenue Optimization",
        desc: "AI-driven pricing to maximize yields",
        icon: Wallet,
        color: "text-brand-teal"
    },
    {
        title: "Tenant Acquisition",
        desc: "Automated leasing and background checks",
        icon: Users,
        color: "text-accent-purple"
    },
    {
        title: "Market Intelligence",
        desc: "Real-time data on rental trends",
        icon: BarChart3,
        color: "text-accent-coral"
    }
];

export function ServicesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto h-full items-stretch">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    {/* Gradient Border Effect */}
                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-teal to-accent-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className={`w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors">{service.title}</h3>
                            <p className="text-slate-500 group-hover:text-slate-600 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </div>

                        <div className="pt-6 mt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <span className="flex items-center text-sm font-bold text-brand-teal cursor-pointer">
                                Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
