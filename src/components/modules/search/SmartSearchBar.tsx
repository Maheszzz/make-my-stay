"use client";

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SmartSearchBar() {
    const [activeTab, setActiveTab] = useState<'buy' | 'rent'>('buy');

    return (
        <div className="bg-white/95 backdrop-blur-sm p-2 rounded-3xl shadow-2xl border border-white/20 max-w-2xl w-full">
            <div className="flex gap-2 mb-2 p-1">
                {[
                    { id: 'buy', label: 'Buy' },
                    { id: 'rent', label: 'Rent' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id
                            ? 'bg-slate-900 text-white shadow-md'
                            : 'bg-transparent text-slate-500 hover:bg-slate-50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="relative flex items-center">
                <MapPin className="absolute left-4 w-5 h-5 text-emerald-500" />
                <input
                    type="text"
                    placeholder="Search 3BHK in Koramangala near Wipro..."
                    className="w-full pl-12 pr-32 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-100 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none transition-all font-medium"
                />
                <div className="absolute right-2">
                    <Button variant="primary" className="!py-2.5 !px-6 rounded-xl">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}
