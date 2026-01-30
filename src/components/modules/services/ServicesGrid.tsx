import { Home, Key, Building2, GraduationCap } from 'lucide-react';

export function ServicesGrid() {
    const services = [
        { label: "Buy", icon: Home, color: "bg-emerald-100 text-emerald-600", col: "col-span-1", row: "row-span-2" },
        { label: "Rent", icon: Key, color: "bg-blue-100 text-blue-600", col: "col-span-1", row: "row-span-1" },
        { label: "Plots", icon: Building2, color: "bg-purple-100 text-purple-600", col: "col-span-1", row: "row-span-1" },
        { label: "Student Housing", icon: GraduationCap, color: "bg-orange-100 text-orange-600", col: "col-span-2", row: "row-span-1" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto h-full min-h-[400px]">
            {/* Custom Bento Layout */}

            {/* Buy Property - Tall Card */}
            <div className="md:row-span-2 bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 cursor-pointer group hover:border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-emerald-100/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-100/40 transition-colors"></div>

                <div className="relative z-10 w-full mb-8">
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Home className="w-7 h-7" />
                    </div>
                </div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Buy Property</h3>
                    <p className="text-base text-slate-500 mt-3 leading-relaxed">Discover your perfect property with our AI-powered valuation tools and immersive virtual tours.</p>
                </div>
            </div>

            {/* Rent - Small Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer group hover:border-blue-200 hover:-translate-y-1">
                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Key className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Rent</h3>
                    <p className="text-sm text-slate-500">Zero brokerage, seamless move-ins</p>
                </div>
            </div>

            {/* Plots - Small Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300 cursor-pointer group hover:border-purple-200 hover:-translate-y-1">
                <div className="bg-purple-50 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Plots</h3>
                    <p className="text-sm text-slate-500">Verified land with clear titles</p>
                </div>
            </div>

            {/* Student Housing - Wide Card */}
            <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-slate-100 flex items-center justify-between hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300 cursor-pointer group hover:border-orange-200 hover:-translate-y-1">
                <div className="max-w-[60%]">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Student Housing</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">Safe, affordable, and fully furnished stays near top universities.</p>
                </div>
                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 group-hover:rotate-12 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8" />
                </div>
            </div>
        </div>
    );
}
