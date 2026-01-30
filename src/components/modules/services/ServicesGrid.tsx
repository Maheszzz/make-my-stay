import { Home, Key, Building2, GraduationCap } from 'lucide-react';

export function ServicesGrid() {
    const services = [
        { label: "Buy", icon: Home, color: "bg-emerald-100 text-emerald-600", col: "col-span-1", row: "row-span-2" },
        { label: "Rent", icon: Key, color: "bg-blue-100 text-blue-600", col: "col-span-1", row: "row-span-1" },
        { label: "Plots", icon: Building2, color: "bg-purple-100 text-purple-600", col: "col-span-1", row: "row-span-1" },
        { label: "Student Housing", icon: GraduationCap, color: "bg-orange-100 text-orange-600", col: "col-span-2", row: "row-span-1" },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-full min-h-[300px]">
            {/* Custom Bento Layout */}
            <div className="col-span-2 lg:col-span-1 row-span-2 bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer group hover:border-emerald-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-100 transition-colors"></div>
                <div className="bg-emerald-100 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 z-10">
                    <Home className="w-6 h-6" />
                </div>
                <div className="z-10">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Buy Property</h3>
                    <p className="text-sm text-slate-500 mt-2">Find your dream home with AI valuation.</p>
                </div>
            </div>

            <div className="col-span-1 bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group hover:border-blue-100">
                <div className="bg-blue-100 w-10 h-10 rounded-xl flex items-center justify-center text-blue-600 mb-2">
                    <Key className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Rent</h3>
                    <p className="text-xs text-slate-500">Zero brokerage options</p>
                </div>
            </div>

            <div className="col-span-1 bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer group hover:border-purple-100">
                <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center text-purple-600 mb-2">
                    <Building2 className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Plots</h3>
                    <p className="text-xs text-slate-500">Verified land details</p>
                </div>
            </div>

            <div className="col-span-2 bg-white rounded-3xl p-6 border border-slate-100 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer group hover:border-orange-100">
                <div>
                    <h3 className="text-lg font-bold text-slate-900">Student Housing</h3>
                    <p className="text-xs text-slate-500 mt-1">Near universities & colleges</p>
                </div>
                <div className="bg-orange-100 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-600">
                    <GraduationCap className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
}
