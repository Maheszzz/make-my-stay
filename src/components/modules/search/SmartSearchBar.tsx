"use client";


import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface SmartSearchBarProps {
    category?: 'buy' | 'rent';
    setCategory?: (category: 'buy' | 'rent') => void;
    searchQuery?: string;
    setSearchQuery?: (query: string) => void;
}

export function SmartSearchBar({ category, setCategory, searchQuery, setSearchQuery }: SmartSearchBarProps) {

    return (
        <div className="bg-surface-light/80 backdrop-blur-md p-2 rounded-3xl shadow-glass border border-white/20 max-w-2xl w-full">
            <div className="flex gap-2 mb-2 p-1">
                {[
                    { id: 'buy', label: 'Buy' },
                    { id: 'rent', label: 'Rent' }
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setCategory(tab.id as 'buy' | 'rent')}
                        className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-all ${category === tab.id
                            ? 'bg-brand-dark text-white shadow-md'
                            : 'bg-transparent text-slate-500 hover:bg-brand-50'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="relative flex items-center">
                <MapPin className="absolute left-4 w-5 h-5 text-brand-500" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search 3BHK in Koramangala near Wipro..."
                    className="w-full pl-12 pr-32 py-4 bg-slate-50/50 border-0 focus:ring-2 focus:ring-brand-500/50 rounded-2xl text-slate-900 placeholder:text-slate-400 outline-none transition-all font-medium"
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
